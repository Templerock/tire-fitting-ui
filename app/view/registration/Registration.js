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
      radioUser: true
    }
  },
    layout: 'center',
    items: [{
        xtype: 'panel',
        bodyPadding: '10 10',
        title: 'Registration form',
        scrollable: true,
        width: 300,
        layout: {
            type: 'vbox',
            pack: 'start',
            align: 'stretch'
        },
        items: [{
            xtype: 'textfield',
            margin: '10 0',
            label: 'Login',
            bind: '{login}',
            fieldLabel: 'Login',
            reference: 'regLogField',
            scrollable: true,
            border: true
        }, {
            xtype: 'textfield',
            margin: '10 0',
            label: 'Password',
            inputType: 'password',
            bind: '{password}',
            fieldLabel: 'Password',
            reference: 'regPassField',
            scrollable: true,
            border: true
        },{
            xtype: 'textfield',
            margin: '10 0',
            label: 'Password',
            inputType: 'password',
            bind: '{repeatPassword}',
            fieldLabel: 'Repeat password',
            reference: 'regPassRepField',
            scrollable: true,
            border: true
        }, {
            xtype: 'fieldcontainer',
            margin: '10 0',
            fieldLabel: '',
            defaultType: 'radiofield',
            defaults: {
              flex: 1
            },
            layout: 'column',
                items: [
                  {
                    boxLabel: 'User',
                    margin: '0 50 0 50',
                    name: 'user',
                    id: 'radioUserButton',
                    bind: '{radioUser}'
                  }, {
                    boxLabel: 'Service',
                    name: 'user',
                    id: 'radioServiceButton',
                    bind: 'radioService'
                  }]
            }, {
                  xtype: 'textfield',
            margin: '10 0',
                  bind: {
                    fieldLabel: '{radioUser ? "User name" : "Service name"}'
                  },
                  reference: 'regFieldOne'
                }, {
                  xtype: 'textfield',
            margin: '10 0',
                  bind: {
                    fieldLabel: '{radioUser ? "Car brand" : "Location"}'
                  },
                  reference: 'regFieldTwo'
                }, {
                  xtype: 'textfield',
            margin: '10 0',
                  bind: {
                    fieldLabel: '{radioUser ? "Tire radius" : "Serving staff"}'
                  },
                  reference: 'regFieldThree'
                }, {
                  xtype: 'textfield',
            margin: '10 0',
                  bind: {
                    fieldLabel: '{radioUser ? "Tire type" : "Rating"}',
                  },
                  reference: 'regFieldFour',
                },
            {
                xtype: 'button',
                scale: 'medium',
                align: 'stretch',
                margin: '10 0',
                handler: 'onRegistration',
                bind: {
                    disabled: '{!password||!login||!repeatPassword||(password!=repeatPassword)}',
                    text: 'Register'
                }
            },
            {
                xtype: 'button',
                margin: '10 0',
                scale: 'medium',
                handler: 'onLoginClick',
                text: 'Login'
            }
        ]}]
});