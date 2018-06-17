Ext.define('Tf.store.CurrOrder', {
    extend: 'Ext.data.Store',
    alias: 'store.CurrOrder',
    requires: [
        'Tf.model.Service'
    ],
    autoLoad: true,
    autoSync: true,
    cors: true,
    storeId: 'currOrder',
    model: 'Tf.model.Order',
    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/order/available/' + Ext.util.Cookies.get('service')
    }
});