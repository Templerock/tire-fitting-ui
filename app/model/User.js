Ext.define('Tf.model.User', {
  extend: 'Ext.data.Model',
  alias: 'model.user',
  fields: [
    { name: 'userId', type: 'int' },
    { name: 'name', type: 'string' },
    { name: 'carInfo', type: 'auto' },
    { name: 'carInfoId', type: 'int', mapping: 'carInfo.carInfoId' },
    { name: 'carBrand', type: 'string', mapping: 'carInfo.carBrand' },
    { name: 'tireRadius', type: 'int', mapping: 'carInfo.tireRadius' },
    { name: 'tireType', type: 'string', mapping: 'carInfo.tireType' },

  ],
  proxy: {
    type: "rest",
    url: "http://localhost:8080/user"
  }
});

