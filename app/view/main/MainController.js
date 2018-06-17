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
              load: {
                fn: 'loadStore',
                single: true
              }
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

  onLoginClickMain: function () {
    this.redirectTo('login');
  },

  loadStore: function (store) {
    var task = {
      run: function () {
        Ext.getStore(store).load();
        store.isRunning = true;
      },
      interval: 30000
    };
    if (!store.isRunning) {
      Ext.TaskManager.start(task);
    }
  },
    // onCreateOrder: function () {
    //     Ext.create('Tf.view.order.Order', {
    //         title: 'Order',
    //         height: 250,
    //         width: 300
    //     }).show();
    // },
    //
    // onUpdateOrder: function () {
    //     Ext.create('Tf.view.order.Order', {
    //         title: 'Order',
    //         height: 300,
    //         width: 300
    //     }).show();
    // },
    //
    // onSelectionChange: function (model, records) {
    // var form = this.lookupReference('myForm');
    //     var rec = records[0];
    //     if (rec) {
    //         form.getForm().loadRecord(rec);
    //     }
    // },
    //
    // loadUserInfo: function () {
    //     var form = this.lookupReference('userForm');
    //     Tf.model.User.load(Ext.util.Cookies.get('user'), {
    //         success: function(user) {
    //             console.log(user.getId());
    //             form.getForm().loadRecord(user);
    //         }
    //     });
    // }

});