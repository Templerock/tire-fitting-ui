Ext.define('Tf.model.AvailableOrder', {
    extend: 'Tf.model.Order',
    alias: 'model.availableOrder',
    proxy: {
        type: "rest",
        url: "http://localhost:8080/order/available"
    }
});