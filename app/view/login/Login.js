Ext.define('Tf.view.login.Login', {
  extend: 'Ext.Panel',
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
      {
          xtype: 'image',
          src: '/app/img/arg.png',
          margin: '0 0 0 -250px',
          width: 800,
          height: 500,
      },
      {
      xtype: 'textfield',
      label: 'Login',
      bind: '{login}',
      fieldLabel: 'Login',
      reference: 'logLogin',
  }, {
      xtype: 'textfield',
          bodyPadding: 50,
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
      // x:0,
      // y:0,
          margin: '10px 0 0 0',
      width:274,
      height:50,
      handler: 'onLogin',
      bind: {
          disabled: '{!password||!login}',
          text: 'Login'
      }
  },
      {
          xtype: 'button',
          bodyPadding: 50,
          // x:-270,
          // y:80,
          margin: '80px 0 0 -274px',
          width:274,
          height:50,
          handler: 'onRegisterClick',
          text: 'Registration'
      }]
});