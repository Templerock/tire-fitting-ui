Ext.define('Tf.model.OrderComplete', {
    extend: 'Tf.model.Order',
    alias: 'model.orderComplete',
    proxy: {
        type: "rest",
        url: 'http://localhost:8080/order/complete/'
    }
});