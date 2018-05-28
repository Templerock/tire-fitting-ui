Ext.define('Tf.view.main.MainController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.main',
  id: 'mainContr',
  listen: {
    controller: {
      '#': {
        unmatchedroute: 'onRouteChange'
      }
    },
      store: {
          '*': {
              load: 'loadStore',
              single: true
          }
      }
  },
  routes: {
    ':node': 'onRouteChange'
  },

  onRouteChange: function (node) {
    node = (node || '').toLowerCase();
    this.setCurrentView(node);
  },

  setCurrentView: function (node) {
    var mainWindow = Ext.getCmp('main');
    mainWindow.removeAll();
    try {
      mainWindow.add({xtype: node});
    }
    catch (err) {
      debugger;
      Ext.Msg.alert('Error!', 'wrong route');
    }
  },

  onRegistration: function () {
    var fieldOne = this.lookupReference('regFieldOne').getValue(),
        fieldTwo = this.lookupReference('regFieldTwo').getValue(),
        fieldThree = this.lookupReference('regFieldThree').getValue(),
        fieldFour = this.lookupReference('regFieldFour').getValue(),
        login = this.lookupReference('regLogField').getValue(),
        pass = this.lookupReference('regPassField').getValue();

    var userRadio = Ext.getCmp('radioUserButton'),
        serviceRadio = this.lookupReference('serviceRadio'),
        url = userRadio.checked ? "user" : "service";
    if (userRadio.checked) {
      var user = Ext.create('Tf.model.User', {
        carInfo: {
          carBrand: fieldTwo,
          // carInfoId: 0,
          tireRadius: fieldThree,
          tireType: fieldFour
        },
        name: fieldOne,
        // userId: 0
      });
      user.save({          //POST service
        success: function () {
          var registration = Ext.create('Tf.model.Registration', {
            login: login,
            password: pass,
            userId: user.data.userId,
            serviceId: null
          });
          registration.save()

        },
        failure: function () {
          Ext.Msg.alert('Error!', 'Something went wrong, try again');
        }
      });
      // Ext.util.Cookies.set(url, login); //TODO delete after REST integration

    }
    else {
      var service = Ext.create('Tf.model.Service', {
        name: fieldOne,
        location: fieldTwo,
        servingStaff: fieldThree,
        totalRating: fieldFour
      });
      service.save({          //POST service
        success: function () {
          var registration = Ext.create('Tf.model.Registration', {
            login: login,
            password: pass,
            userId: null,
            serviceId: service.data.serviceId
          });
          registration.save()

        },
        failure: function () {
          Ext.Msg.alert('Error!', 'Something went wrong, try again');
        }
      });

    }
    // Ext.util.Cookies.set(url, login);
    this.redirectTo(url);

  },

  onLogin: function () {
    var login = this.lookupReference('logLogin').getValue(),
        password = this.lookupReference('logPass').getValue();

    var authorization = Ext.create('Tf.model.Login', {
      serviceId: null,
      userId: null,
      login: login,
      password: password
    });
    authorization.load({
      params: {
        login: login,
        password: password
      },
      success: function () {
        // Ext.util.Cookies.set(authorization.data.userId > 0 ? 'user' : 'service',
        //     login);
        window.location.hash = authorization.data.userId > 0 ? 'user'
            : 'service'
      }
    });
  },

  onRegisterClick: function () {
    this.redirectTo('registration');
  },

  onLoginClick: function () {
    this.redirectTo('login');
  },

  onUserClick: function () {
    this.redirectTo('user');
  },

  onServiceClick: function () {
    this.redirectTo('service');
  },

  loadStore: function (store) {
    var task = {
      run: function () {
        Ext.getStore(store).load();
      },
      interval: 30000
    };
    Ext.TaskManager.start(task);

  }
});