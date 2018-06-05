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

        //     items: [
        //       {
        //         boxLabel: 'User',
        //         name: 'user',
        //           // padding: '30px 0  100px 0',
        //         id: 'radioUserButton',
        //         bind: '{radioUser}'
        //       }, {
        //         boxLabel: 'Service',
        //         name: 'user',
        //             // padding: '30px 0  100px 0',
        //         id: 'radioServiceButton',
        //         bind: 'radioService'
        //       }]
        //   },  {
        //       xtype: 'button',
        //       // width: 320,
        //       // height: 40,
        //       // margin: '20px 0 0 100px',
        //       handler: 'onRegistration',
        //       bind: {
        //           disabled: '{!password||!login||!repeatPassword||(password!=repeatPassword)}',
        //           text: 'Register'
        //       }
        //   }]
        // },



  //   xtype : 'container',
  //   layout: 'center',
  //       width: 500,
  //       height: 400,
  //       // pack: 'start',
  //       // align: 'stretch'
  //       // align: 'center'
  //
  //
  //   // bodyPadding: '200 0',
  //
  // items: [
  //     {
  //   items: [
  //       {
  //     xtype: 'textfield',
  //       // margin: '100px 0 0 0px',
  //     label: 'Login',
  //     bind: '{login}',
  //     fieldLabel: 'Login',
  //     reference: 'regLogField',
  //           scrollable: true,
  //           border: true,
  //           layout: 'fit'
  //       // padding: '50px 0  100px 0',
  //   }, {
  //     xtype: 'textfield',
  //     label: 'Password',
  //     inputType: 'password',
  //     bind: '{password}',
  //     fieldLabel: 'Password',
  //     reference: 'regPassField',
  //           scrollable: true,
  //           border: true,
  //           layout: 'fit'
  //       // padding: '50px 0  100px 0',
  //
  //   }, {
  //     xtype: 'textfield',
  //     label: 'Password',
  //     inputType: 'password',
  //     bind: '{repeatPassword}',
  //     fieldLabel: 'Repeat password',
  //     reference: 'regPassRepField',
  //           scrollable: true,
  //           border: true,
  //       // padding: '50px 0  100px 0',
  //   }, {
  //     xtype: 'fieldcontainer',
  //     // fieldLabel: 'Size',
  //       fieldLabel: '',
  //     defaultType: 'radiofield',
  //     defaults: {
  //       flex: 1
  //     },
  //     layout: 'hbox',
  //     items: [
  //       {
  //         boxLabel: 'User',
  //         name: 'user',
  //           // padding: '30px 0  100px 0',
  //         id: 'radioUserButton',
  //         bind: '{radioUser}'
  //       }, {
  //         boxLabel: 'Service',
  //         name: 'user',
  //             // padding: '30px 0  100px 0',
  //         id: 'radioServiceButton',
  //         bind: 'radioService'
  //       }]
  //   },  {
  //       xtype: 'button',
  //       // width: 320,
  //       // height: 40,
  //       // margin: '20px 0 0 100px',
  //       handler: 'onRegistration',
  //       bind: {
  //           disabled: '{!password||!login||!repeatPassword||(password!=repeatPassword)}',
  //           text: 'Register'
  //       }
  //   }]
  // }, {
  //   items: [{
  //     items: [{
  //       xtype: 'textfield',
  //       bind: {
  //         fieldLabel: '{radioUser ? "User name" : "Service name"}'
  //       },
  //         // padding: '50px 0  100px 0',
  //         // margin: '100px 0 0 0px',
  //       reference: 'regFieldOne'
  //     }, {
  //       xtype: 'textfield',
  //       bind: {
  //         fieldLabel: '{radioUser ? "Car brand" : "Location"}'
  //       },
  //         // padding: '50px 0  100px 0',
  //       reference: 'regFieldTwo'
  //     }, {
  //       xtype: 'textfield',
  //       bind: {
  //         fieldLabel: '{radioUser ? "Tire radius" : "Serving staff"}'
  //       },
  //         // padding: '50px 0  100px 0',
  //       reference: 'regFieldThree'
  //     }, {
  //       xtype: 'textfield',
  //       bind: {
  //         fieldLabel: '{radioUser ? "Tire type" : "Rating"}',
  //           hidden: 'radioUser'
  //       },
  //         // padding: '50px 0  100px 0',
  //       reference: 'regFieldFour'
  //     }, {
  //       xtype: 'button',
  //       handler: 'onLoginClick',
  //         // width: 320,
  //         // height: 40,
  //         margin: '20px 0 0 55px',
  //       text: 'Login'
  //
  //     }]
  //   }]
  // }]
});