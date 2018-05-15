Ext.define('Tf.view.registration.Registration', {
    extend: 'Ext.window.Window',
    autoShow: true,
    closable: false,
    controller: 'main',
    id: 'registrationWindow',
    title: 'Registration page',
    requires: [
        'Ext.Button',
        'Ext.form.*',

    ],
    xtype: 'registration',
    viewModel: {
        data: {
            login: '',
            password: '',
            repeatPassword: '',
            radioUser: true,
            radioService: ''
        }
    },
    layout: 'column',
    items: [{
        items:[{
        xtype: 'textfield',
        label: 'Login',
        bind: '{login}',
        fieldLabel: 'Login'
    },{
        xtype: 'textfield',
        label: 'Password',
        inputType: 'password',
        bind:  '{password}',
        fieldLabel: 'Password'
    },{
        xtype: 'textfield',
        label: 'Password',
        inputType: 'password',
        bind:  '{repeatPassword}',
        fieldLabel: 'Repeat password'
    }, {
        xtype: 'button',
        handler: 'onRegistration',
        bind: {
            disabled: '{!password||!login||!repeatPassword||(password!=repeatPassword)}',
            text: 'Register'
        }
        }, {
        xtype      : 'fieldcontainer',
        fieldLabel : 'Size',
        defaultType: 'radiofield',
        defaults: {
            flex: 1
        },
        layout: 'hbox',
        items: [
            {
                boxLabel  : 'User',
                name      : 'user',
                id        : 'radioUserButton',
                bind: '{radioUser}'
            }, {
                boxLabel  : 'Service',
                name      : 'user',
                id        : 'radioServiceButton',
                bind: 'radioService'
            }]
        }],
    }, {
        items: [{
            items:[{
                xtype: 'textfield',
                bind: {
                    fieldLabel: '{radioUser ? "User" : "Service"} Data'
                }
            },{
                xtype: 'textfield',
                bind: {
                    fieldLabel: '{radioUser ? "User" : "Service"} Data'
                }
            },{
                xtype: 'textfield',
                bind: {
                    fieldLabel: '{radioUser ? "User" : "Service"} Data'
                }
            },{
                xtype: 'button',
                handler: 'onLoginClick',
                text: 'Login'

            }]
    }]}]
});