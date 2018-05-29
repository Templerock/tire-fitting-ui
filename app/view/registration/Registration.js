Ext.define('Tf.view.registration.Registration', {
  extend: 'Ext.panel.Panel',
  controller: 'main',
  id: 'registrationWindow',
  title: 'Registration page',
  xtype: 'registration',
    style: {margin: '100px 0 0 500px', display: 'inline-block'},
  viewModel: {
    data: {
      login: '',
      password: '',
      repeatPassword: '',
      radioUser: true,
    }
  },
  layout: 'column',

  items: [
      {
    items: [
        {
      xtype: 'textfield',
        margin: '100px 0 0 0px',
      label: 'Login',
      bind: '{login}',
      fieldLabel: 'Login',
      reference: 'regLogField',
        padding: '50px 0  100px 0',
    }, {
      xtype: 'textfield',
      label: 'Password',
      inputType: 'password',
      bind: '{password}',
      fieldLabel: 'Password',
      reference: 'regPassField',
        padding: '50px 0  100px 0',

    }, {
      xtype: 'textfield',
      label: 'Password',
      inputType: 'password',
      bind: '{repeatPassword}',
      fieldLabel: 'Repeat password',
      reference: 'regPassRepField',
        padding: '50px 0  100px 0',
    }, {
      xtype: 'fieldcontainer',
      // fieldLabel: 'Size',
        fieldLabel: '',
      defaultType: 'radiofield',
      defaults: {
        flex: 1
      },
      layout: 'hbox',
      items: [
        {
          boxLabel: 'User',
          name: 'user',
            padding: '30px 0  100px 0',
          id: 'radioUserButton',
          bind: '{radioUser}'
        }, {
          boxLabel: 'Service',
          name: 'user',
              padding: '30px 0  100px 0',
          id: 'radioServiceButton',
          bind: 'radioService'
        }]
    },  {
        xtype: 'button',
        width: 320,
        height: 40,
        margin: '20px 0 0 100px',
        handler: 'onRegistration',
        bind: {
            disabled: '{!password||!login||!repeatPassword||(password!=repeatPassword)}',
            text: 'Register'
        }
    }]
  }, {
    items: [{
      items: [{
        xtype: 'textfield',
        bind: {
          fieldLabel: '{radioUser ? "User name" : "Service name"}'
        },
          padding: '50px 0  100px 0',
          margin: '100px 0 0 0px',
        reference: 'regFieldOne'
      }, {
        xtype: 'textfield',
        bind: {
          fieldLabel: '{radioUser ? "Car brand" : "Location"}'
        },
          padding: '50px 0  100px 0',
        reference: 'regFieldTwo'
      }, {
        xtype: 'textfield',
        bind: {
          fieldLabel: '{radioUser ? "Tire radius" : "Serving staff"}'
        },
          padding: '50px 0  100px 0',
        reference: 'regFieldThree'
      }, {
        xtype: 'textfield',
        bind: {
          fieldLabel: '{radioUser ? "Tire type" : "Rating"}'
        },
          padding: '50px 0  100px 0',
        reference: 'regFieldFour'
      }, {
        xtype: 'button',
        handler: 'onLoginClick',
          width: 320,
          height: 40,
          margin: '20px 0 0 55px',
        text: 'Login'

      }]
    }]
  }]
});