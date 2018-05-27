Ext.define('Tf.model.Registration', {
  extend: 'Ext.data.Model',
  alias: 'model.registration',
  fields: ['login', 'password', 'userId, serviceId'],
  proxy: {
    type: "rest",
    url: "http://localhost:8080/registration"
  }
});

