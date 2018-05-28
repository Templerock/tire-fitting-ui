Ext.define('Tf.view.registration.Registration', {
  extend: 'Ext.panel.Panel',
  controller: 'main',
  id: 'registrationWindow',
  title: 'Registration page',
  xtype: 'registration',
  viewModel: {
    data: {
      login: '',
      password: '',
      repeatPassword: '',
      radioUser: true,
    }
  },
  layout: 'column',
  items: [{
    items: [{
      xtype: 'textfield',
      label: 'Login',
      bind: '{login}',
      fieldLabel: 'Login',
      reference: 'regLogField'
    }, {
      xtype: 'textfield',
      label: 'Password',
      inputType: 'password',
      bind: '{password}',
      fieldLabel: 'Password',
      reference: 'regPassField'

    }, {
      xtype: 'textfield',
      label: 'Password',
      inputType: 'password',
      bind: '{repeatPassword}',
      fieldLabel: 'Repeat password',
      reference: 'regPassRepField'
    }, {
      xtype: 'fieldcontainer',
      fieldLabel: 'Size',
      defaultType: 'radiofield',
      defaults: {
        flex: 1
      },
      layout: 'hbox',
      items: [
        {
          boxLabel: 'User',
          name: 'user',
          id: 'radioUserButton',
          bind: '{radioUser}'
        }, {
          boxLabel: 'Service',
          name: 'user',
          id: 'radioServiceButton',
          bind: 'radioService'
        }]
    },  {
        xtype: 'button',
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
        reference: 'regFieldOne'
      }, {
        xtype: 'textfield',
        bind: {
          fieldLabel: '{radioUser ? "Car brand" : "Location"}'
        },
        reference: 'regFieldTwo'
      }, {
        xtype: 'textfield',
        bind: {
          fieldLabel: '{radioUser ? "Tire radius" : "Serving staff"}'
        },
        reference: 'regFieldThree'
      }, {
        xtype: 'textfield',
        bind: {
          fieldLabel: '{radioUser ? "Tire type" : "Rating"}'
        },
        reference: 'regFieldFour'
      }, {
        xtype: 'button',
        handler: 'onLoginClick',
        text: 'Login'

      }]
    }]
  }]
});