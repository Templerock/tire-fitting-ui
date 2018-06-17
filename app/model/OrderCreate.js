Ext.define('Tf.model.OrderCreate', {
    extend: 'Tf.model.Order',
    alias: 'model.orderCreate',
    proxy: {
        type: "rest",
        url: "http://localhost:8080/order"
    }
});
