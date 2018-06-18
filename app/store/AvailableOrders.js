Ext.define('Tf.store.Avail', {
  extend: 'Ext.data.Store',
  alias: 'store.Avail',
  requires: [
    'Tf.model.Order'
  ],
  autoLoad: true,
  autoSync: true,
  cors: true,
  storeId: 'avail',
  model: 'Tf.model.Order',
  proxy: {
      type: 'rest',
      url: 'http://localhost:8080/order/available/' + Ext.util.Cookies.get('service')
  }
});