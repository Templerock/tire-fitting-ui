Ext.define('Tf.view.user.ServiceController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.service',
    id: 'serviceContr',

    onUpdateOrder: function () {
        Ext.create('Tf.view.order.Order', {
            title: 'Order',
            height: 300,
            width: 300
        }).show();
    },

    onSelectionChangeOne: function (model, records) {
        var formOne = this.lookupReference('formOne');
        var recOne = records[0];
        if (recOne) {
            formOne.getForm().loadRecord(recOne);
        }
    },

    onSelectionChangeTwo: function (model, records) {
        var formTwo = this.lookupReference('formTwo');
        var recTwo = records[0];
        if (recTwo) {
            formTwo.getForm().loadRecord(recTwo);
        }
    },

    loadServiceInfo: function () {
        var form = this.lookupReference('serviceForm');
        Tf.model.Service.load(Ext.util.Cookies.get('service'), {
            success: function(service) {
                console.log(service.getId());
                form.getForm().loadRecord(service);
            }
        });
    },

    loadCurrentOrders: function () {
        var form = this.lookupReference('formTwo');
        Tf.model.OrderComplete.load(Ext.util.Cookies.get('service'),
            {
            success: function(order) {
                console.log(order.getId());
                form.getForm().loadRecord(order);
            }
        }
        );
    },

    acceptOrder: function () {
        var form = this.lookupReference('formOne');
        var order = Tf.model.OrderCreate.load(form.getValues().orderId, {
            success: function(order) {
                console.log(order.getId());
            }
        });
        order.set('serviceId', Ext.util.Cookies.get('service'));
        order.set('status', 'Active');
        order.save({
            success: function() {
                console.log('The Order was accepted');
            }
        });
        this.getView().reload();
    },

    completeOrder: function () {
        var form = this.lookupReference('formTwo');
        var order = Tf.model.OrderCreate.load(form.getValues().orderId, {
            success: function(order) {
                console.log(order.getId());
            }
        });
        order.set('status', 'Completed');
        order.save({
            success: function() {
                console.log('The Order was completed');
            }
        });
        this.getView().reload();
    },

    onLoginClick: function () {
        this.redirectTo('login');
    },
});
