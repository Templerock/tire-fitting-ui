Ext.define('Tf.model.Order', {
  extend: 'Ext.data.Model',
  alias: 'model.order',
  fields: [
    { name: 'description', type: 'string' },
    { name: 'location', type: 'string' },
    { name: 'orderId', type: 'int' },
    { name: 'rating', type: 'int' },
    { name: 'serviceId', type: 'int' },
    { name: 'status', type: 'string' },
    { name: 'userId', type: 'int' },
  ],
  proxy: {
    type: "rest",
    url: "http://localhost:8080/order"
  }
});

