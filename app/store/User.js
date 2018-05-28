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
  filters: [{
    property: 'userId',
    value: Ext.util.Cookies.get('user')
  }]
});