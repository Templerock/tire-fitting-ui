Ext.define('Tf.model.CurrentOrder', {
    extend: 'Tf.model.Order',
    alias: 'model.currentOrder',
    proxy: {
        type: "rest",
        url: "http://localhost:8080/order/current"
    }
});