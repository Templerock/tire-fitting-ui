Ext.define('Tf.store.User', {
  extend: 'Ext.data.Store',
  alias: 'store.User',
  requires: [
    'Tf.model.User'
  ],
  autoLoad: true,
  autoSync: true,
  cors: true,
  storeId: 'user',
  model: 'Tf.model.User',
  proxy: {
    type: 'rest',
    url: 'http://localhost:8080/user',
  },
  listeners: {
    load: { //TODO move listener to Controller
      fn: function (store) {
        var task = {
          run: function () {
            Ext.getStore(store).load();
          },
          interval: 30000
        };
        Ext.TaskManager.start(task);
      },
      single: true
    }
  },
  filters: [{
    property: 'name',
    value: Ext.util.Cookies.get('user')
  }]
});