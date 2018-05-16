Ext.define('Tf.view.service.Service', {
    extend: 'Ext.tab.Panel',
    xtype: 'service',
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
            handler: 'onUserClick',
            text: 'Go to User'

        }]
    }, {
        title: 'Tab2',
        items: [{
            xtype: 'button',
            text: 'Go back to Login',
            handler: 'onLoginClick'

        }, {
            xtype: 'button',
            handler: 'onUserClick',
            text: 'Go to User'

        }]
    }, {
        title: 'Tab3',
        items: [{
            xtype: 'button',
            text: 'Go back to Login',
            handler: 'onLoginClick'

        }, {
            xtype: 'button',
            handler: 'onUserClick',
            text: 'Go to User'

        }]
    }]
});
