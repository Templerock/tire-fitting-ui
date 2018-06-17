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
  // model: 'Tf.model.Service',
    model: 'Tf.model.Order',
  proxy: {
    type: 'rest',
    // url: 'http://localhost:8080/service'
    url: 'http://localhost:8080/order/available/' + Ext.util.Cookies.get('service')
  },
  // filters: [{
  //   property: 'serviceId',
  //   value: Ext.util.Cookies.get('service')
  // }]
});