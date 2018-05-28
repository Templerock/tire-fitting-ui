Ext.define('Tf.view.login.Login', {
  extend: 'Ext.panel.Panel',
  controller: 'main',
  xtype: 'login',
  id: 'loginWindow',
  title: 'Login page',
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