Ext.define('Tf.view.login.Login', {
  extend: 'Ext.panel.Panel',
    controller: 'main',
    style: {margin: '100px 0 0 750px', display: 'inline-block'},
    bodyPadding: 50,
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
    }
  },

  items: [
      {},

      {
          xtype: 'image',
          src: '/app/img/arg.png',
          width: 184,
          height: 90,
      },



      {
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
      x:0,
      y:0,
      width:70,
      height:30,
      handler: 'onLogin',
      bind: {
          disabled: '{!password||!login}',
          text: 'Login'
      }
  },
      {
          xtype: 'button',
          x:50,
          y:0,
          handler: 'onRegisterClick',
          text: 'Registration'
      }]
});