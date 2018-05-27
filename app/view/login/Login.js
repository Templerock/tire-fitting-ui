Ext.define('Tf.view.login.Login', {
  extend: 'Ext.window.Window',
  autoShow: true,
  closable: false,
  controller: 'main',
  id: 'loginWindow',
  title: 'Login page',
  requires: [
    'Ext.Button',
    'Ext.form.*'
  ],
  xtype: 'login',
  viewModel: {
    data: {
      login: '',
      password: '',
    }
  },
  items: [{
    xtype: 'textfield',
    label: 'Login',
    bind: '{login}',
    fieldLabel: 'Login',
    reference: 'logLogin'
  }, {
    xtype: 'textfield',
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
    handler: 'onLogin',
    bind: {
      disabled: '{!password||!login}',
      text: 'Login'
    }
  },
    {
      xtype: 'button',
      handler: 'onRegisterClick',
      text: 'Registration'
    }]
});