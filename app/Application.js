Ext.define('Tf.Application', {
  extend: 'Ext.app.Application',

  mainView: 'Tf.view.main.Main',

  name: 'TireFittingUI',

  stores: [
    'Tf.store.User',
    'Tf.store.Order',
    'Tf.store.Service'
  ],

  launch: function () {
    var userCookie = Ext.util.Cookies.get('user'); //TODO change to actual cookie after REST integration
    var serviceCookie = Ext.util.Cookies.get('service');
    if (!(userCookie || serviceCookie)) {
      this.redirectTo('login');
    }
    else {
      this.redirectTo(userCookie ? 'user' : 'service');
    }
  },

  onAppUpdate: function () {
    Ext.Msg.confirm('Application Update',
        'This application has an update, reload?',
        function (choice) {
          if (choice === 'yes') {
            window.location.reload();
          }
        }
    );
  }
});