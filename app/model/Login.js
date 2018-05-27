Ext.define('Tf.model.Login', {
  extend: 'Ext.data.Model',
  alias: 'model.login',
  fields: ['login', 'password', 'userId, serviceId'],
  proxy: {
    type: "rest",
    url: "http://localhost:8080/login",
    appendId: false
  }
});

