Ext.define('Tf.store.Completed', {
    extend: 'Ext.data.Store',
    alias: 'store.Completed',
    requires: [
        'Tf.model.Order'
    ],
    autoLoad: true,
    autoSync: true,
    cors: true,
    storeId: 'completed',
    model: 'Tf.model.Order',
    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/order/complete/' + Ext.util.Cookies.get('service')
    }
});