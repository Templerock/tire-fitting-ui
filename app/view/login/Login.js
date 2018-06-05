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
                // listeners: {
                //     specialkey: function(f,e){
                //         if(e.getKey() == e.ENTER){
                //             console.log('Spacial Key = Enter');
                //         }
                //     }
                // },
                fieldLabel: 'Password',
                reference: 'logPass'
            },  {
                xtype: 'button',
                scale: 'medium',
                margin: '10 0',
                align: 'stretch',
                handler: 'onLogin',
                // listeners: {
                //     show: function() {
                //         new Ext.KeyMap(Ext.getCmp('loginWindow').body, [{
                //             key: Ext.EventObject.ENTER,
                //             fn: function() {
                //                 Ext.getCmp('onLogin').fireEvent('click');
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

});
// var myform = Ext.getCmp('loginWindow');
//     myForm.getForm().submit();