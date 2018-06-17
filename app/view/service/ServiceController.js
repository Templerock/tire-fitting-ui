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

    onSelectionChange: function (model, records) {
        var form = this.lookupReference('formOne');
        var rec = records[0];
        if (rec) {
            form.getForm().loadRecord(rec);
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
        Tf.model.AvailableOrder.load(Ext.util.Cookies.get('service'),
            {
            success: function(order) {
                console.log(order.getId());
                form.getForm().loadRecord(order);
            }
        }
        );
    },

    // loadActiveOrder: function () {
    //     var form = this.lookupReference('activeOrder');
    //     Tf.model.Order.load(Ext.util.Cookies.get('user'), {
    //         success: function(order) {
    //             console.log(order.getId());
    //             form.getForm().loadRecord(order);
    //         }
    //     });
    // },

    onLoginClick: function () {
        this.redirectTo('login');
    },
});
