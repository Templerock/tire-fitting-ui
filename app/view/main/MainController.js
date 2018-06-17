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

  loadStore: function (store) {
    var task = {
      run: function () {
        Ext.getStore(store).load();
        store.isRunning = true;
      },
      interval: 5000
    };
    if (!store.isRunning) {
      Ext.TaskManager.start(task);
    }
  }
});