Ext.define('Tf.view.login.Login', {
  extend: 'Ext.Panel',
    controller: 'main',
    requires: [
        'Ext.Button',
        'Ext.form.*'
    ],
    xtype: 'login',
    id: 'loginWindow',
    // title: 'Login page',
    title: 'Tire-fitting',
    viewModel: {
        data: {
            login: '',
            password: '',
        }},
                xtype : 'container',
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'center'
                    },

                    margin: '120px 10px 10px 10px',
                    items: [
                    {
                        xtype: 'image',
                        src: '/app/img/arg.png',
                        width: 700,
                        height: 400,
                    },
                    {
                        xtype: 'textfield',
                        padding: '10px 50px 10px 50px',
                        label: 'Login',
                        bind: '{login}',
                        fieldLabel: 'Login',
                        reference: 'logLogin',
                    }, {
                        xtype: 'textfield',
                            padding: '10px 50px 10px 50px',
                        label: 'Password',
                        inputType: 'password',
                        bind: '{password}',
                        listeners: {
                            action: 'onLogin'
                        },
                        fieldLabel: 'Password',
                        reference: 'logPass'
                    }, {
                        xtype: 'button',
                            width: 276,
                            align: 'stretch',
                            margin: '10px 10px 10px 10px',
                        handler: 'onLogin',
                        bind: {
                            disabled: '{!password||!login}',
                            text: 'Login'
                        }
                    },
                    {xtype: 'button',
                        width: 276,
                        align: 'stretch',
                        margin: '10px 10px 10px 10px',
                        handler: 'onRegisterClick',
                        text: 'Registration'
                    }]
});