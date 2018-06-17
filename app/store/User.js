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
  model: 'Tf.model.Order',
  proxy: {
    type: 'rest',
      url: 'http://localhost:8080/order/complete/' + Ext.util.Cookies.get('service')
  }
});