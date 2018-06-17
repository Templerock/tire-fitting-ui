Ext.define('Tf.view.login.Login', {
  extend: 'Ext.panel.Panel',
  controller: 'login',
  xtype: 'login',
  id: 'loginWindow',
  title: 'Login page',
  viewModel: {
    data: {
      login: '',
      password: ''
    }
  },
    layout: 'center',
    items: [{
        layout: {
            type: 'vbox',
            pack: 'start',
            align: 'stretch'
        },
        items: [
            {
                xtype: 'image',
                src: '/app/img/arg.png',
                width: 300,
                height: 300
            }, {
                xtype: 'textfield',
                margin: '10 0',
                label: 'Login',
                bind: '{login}',
                fieldLabel: 'Login',
                vtype: 'alphanum',
                reference: 'logLogin',
            },  {
                xtype: 'textfield',
                margin: '10 0',
                label: 'Password',
                inputType: 'password',
                bind: '{password}',
                fieldLabel: 'Password',
                vtype: 'alphanum',
                reference: 'logPass'
            },  {
                xtype: 'button',
                scale: 'medium',
                margin: '10 0',
                align: 'stretch',
                handler: 'onLogin',
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
                text: 'Registration'}]
    }]
});