Ext.define('Tf.view.login.LoginController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.login',
  id: 'loginContr',

  onLogin: function () {
    var login = this.lookupReference('logLogin').getValue(),
        password = this.lookupReference('logPass').getValue(),
        condition = true;

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
        condition = authorization.data.userId > 0;
        Ext.util.Cookies.set(condition ? 'user' : 'service', condition ? authorization.data.userId : authorization.data.serviceId);
        Ext.util.Cookies.clear(!condition ? 'user' : 'service');
        window.location.hash = authorization.data.userId > 0 ? 'user' : 'service'
      }
    });
  },

  onRegisterClick: function () {
    this.redirectTo('registration');
  }
});