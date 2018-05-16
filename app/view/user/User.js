Ext.define('Tf.view.user.User', {
    extend: 'Ext.tab.Panel',
    xtype: 'user',
    requires: [
        // 'Ext.Button',
        // 'Ext.field.Text'
    ],

    viewModel: {
        data: {
            //TODO REST integration
        }
    },

    items: [{
        title: 'Tab1',
        items: [{
            xtype: 'button',
            text: 'Go back to Login',
            handler: 'onLoginClick'

        }, {
            xtype: 'button',
            handler: 'onServiceClick',
            text: 'Go to Service'

        }]
    }, {
        title: 'Tab2',
        items: [{
            xtype: 'button',
            text: 'Go back to Login',
            handler: 'onLoginClick'

        }, {
            xtype: 'button',
            handler: 'onServiceClick',
            text: 'Go to Service'

        }]
    }, {
        title: 'Tab3',
        items: [{
            xtype: 'button',
            text: 'Go back to Login',
            handler: 'onLoginClick'

        }, {
            xtype: 'button',
            handler: 'onServiceClick',
            text: 'Go to Service'

        }]
    }]
});
