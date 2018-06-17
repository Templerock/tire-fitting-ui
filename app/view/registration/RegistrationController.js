Ext.define('Tf.view.registration.RegistrationController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.registration',
  id: 'registrationContr',

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
          tireRadius: fieldThree,
          tireType: fieldFour
        },
        name: fieldOne
      });
      user.save({          //POST user
        success: function () {
          var registration = Ext.create('Tf.model.Registration', {
            login: login,
            password: pass,
            userId: user.data.userId,
            serviceId: null
          });
          registration.save();
          Ext.util.Cookies.set(url, registration.data.userId);
          Ext.util.Cookies.clear('service');
        },
        failure: function () {
          Ext.Msg.alert('Error!', 'Something went wrong, try again');
        }
      });
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
          registration.save();
          Ext.util.Cookies.set(url, registration.data.serviceId);
          Ext.util.Cookies.clear('user');
        },
        failure: function () {
          Ext.Msg.alert('Error!', 'Something went wrong, try again');
        }
      });

    }
    this.redirectTo(url);
  },

  onLoginClick: function () {
    this.redirectTo('login');
  }
});