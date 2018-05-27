Ext.define('Tf.model.Service', {
  extend: 'Ext.data.Model',
  alias: 'model.service',
  fields: [
    { name: 'serviceId', type: 'int' },
    { name: 'name', type: 'string' },
    { name: 'location', type: 'string' },
    { name: 'servingStaff', type: 'int' },
    { name: 'totalRating', type: 'int' },
  ],
  proxy: {
    type: "rest",
    url: "http://localhost:8080/service"
  }
});

