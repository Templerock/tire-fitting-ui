Ext.define('Tf.view.login.Login', {
  extend: 'Ext.Panel',
    controller: 'main',
    requires: [
        'Ext.Button',
        'Ext.form.*'
    ],
    xtype: 'login',
    id: 'loginWindow',
    title: 'Login page',
    // title: 'Tire-fitting',
    viewModel: {
        data: {
            login: '',
            password: '',
        }},
    layout: 'center',
    // bodyPadding: '0 10',
    items: [{
        xtype: 'container',
        title: 'Greeting',
        scrollable: true,
        width: 300,
        layout: {
            type: 'vbox',
            pack: 'start',
            align: 'stretch'
        },
        items: [
            {
                xtype: 'image',
                src: '/app/img/arg.png',
                margin: '10 0',
        }, {
                xtype: 'textfield',
                margin: '10 0',
                label: 'Login',
                bind: '{login}',
                fieldLabel: 'Login',
                reference: 'logLogin',
            },  {
                xtype: 'textfield',
                margin: '10 0',
                label: 'Password',
                inputType: 'password',
                bind: '{password}',
                enablekeyEvents: true,
                listeners: {
                    action: 'onLogin',
                },
                fieldLabel: 'Password',
                reference: 'logPass'
            },  {
                xtype: 'button',
                // id: 'login',
                scale: 'medium',
                margin: '10 0',
                align: 'stretch',
                handler: 'onLogin',
                // listeners: {
                //     show: function() {
                //         new Ext.KeyMap(Ext.getCmp('Tf.view.login.Login').body, [{
                //             key: Ext.EventObject.ENTER,
                //             fn: function() {
                //                 Ext.getCmp('Tf.view.login.Login-onLogin').fireEvent('click');
                //             },
                //             scope: this
                //         }]);
                //     }
                // },
                bind: {
                    disabled: '{!password||!login}',
                    text: 'Login'
            }},
            {
                xtype: 'button',
                scale: 'medium',
                margin: '10 0',
                align: 'stretch',
                handler: 'onRegisterClick',
                text: 'Registration'
            }]
    }]


                // xtype : 'container',
                //     layout: {
                //         type: 'vbox',
                //         pack: 'start',
                //         // align: 'stretch'
                //         align: 'center'
                //     },
                //
                //     margin: '30px 10px 0px 0px',
                //     items: [
                //     {
                //         xtype: 'image',
                //         src: '/app/img/arg.png',
                //         // layout: 'fit',
                //         width: 320,
                //         height: 300,
                //     },
                //     {
                //         xtype: 'textfield',
                //         padding: '0px 0px 0px 10px',
                //         label: 'Login',
                //         bind: '{login}',
                //         fieldLabel: 'Login',
                //         reference: 'logLogin',
                //     }, {
                //         xtype: 'textfield',
                //             padding: '10px 0px 0px 10px',
                //         label: 'Password',
                //         inputType: 'password',
                //         bind: '{password}',
                //         listeners: {
                //             action: 'onLogin'
                //         },
                //         fieldLabel: 'Password',
                //         reference: 'logPass'
                //     }, {
                //         xtype: 'button',
                //             width: 276,
                //             align: 'stretch',
                //             margin: '10px 0px 0px 10px',
                //         handler: 'onLogin',
                //         bind: {
                //             disabled: '{!password||!login}',
                //             text: 'Login'
                //         }
                //     },
                //     {xtype: 'button',
                //         width: 276,
                //         align: 'stretch',
                //         margin: '10px 0px 0px 10px',
                //         handler: 'onRegisterClick',
                //         text: 'Registration'
                //     }]
});