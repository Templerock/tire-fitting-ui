Ext.define('Tf.store.Service', {
  extend: 'Ext.data.Store',
  alias: 'store.Service',
  requires: [
    'Tf.model.Service'
  ],
  autoLoad: true,
  autoSync: true,
  cors: true,
  storeId: 'service',
  model: 'Tf.model.Service',
  proxy: {
    type: 'rest',
    url: 'http://localhost:8080/service'
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
    value: Ext.util.Cookies.get('service')
  }]
});