Ext.define('Tf.store.Order', {
  extend: 'Ext.data.Store',
  alias: 'store.Order',
  requires: [
    'Tf.model.Order'
  ],
  autoLoad: true,
  autoSync: true,
  cors: true,
  storeId: 'order',
  model: 'Tf.model.Order',
  proxy: {
    type: 'rest',
    url: 'http://localhost:8080/order'
  }
});