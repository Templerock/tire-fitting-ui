Ext.define('Tf.view.user.UserController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user',
    id: 'userContr',

    onCreateOrder: function () {
        Ext.create('Tf.view.order.Order', {
            title: 'Order',
            height: 250,
            width: 300
        }).show();
    },

    onUpdateOrder: function () {
        Ext.create('Tf.view.order.Order', {
            title: 'Order',
            height: 300,
            width: 300
        }).show();
    },

    // onSelectionChange: function (model, records) {
    //     var form = this.lookupReference('myForm');
    //     var rec = records[0];
    //     if (rec) {
    //         form.getForm().loadRecord(rec);
    //     }
    // },

    loadUserInfo: function () {
        var form = this.lookupReference('userForm');
        Tf.model.User.load(Ext.util.Cookies.get('user'), {
            success: function(user) {
                console.log(user.getId());
                form.getForm().loadRecord(user);
            }
        });
    },

    loadActiveOrder: function () {
        var form = this.lookupReference('activeOrder');
        Tf.model.Order.load(Ext.util.Cookies.get('user'), {
            success: function(order) {
                console.log(order.getId());
                form.getForm().loadRecord(order);
            }
        });
    },

    onLoginClick: function () {
        this.redirectTo('login');
    },
});
