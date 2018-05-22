Ext.define('Tf.store.Test', {
    requires: [
        'Tf.model.Test'
    ],
    extend: 'Ext.data.Store',
    alias: 'store.Test',
    autoLoad: true,
    autoSync: true,
    cors: true,
    storeId: 'test',
    model: 'Tf.model.Test',
    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/status',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        writer: {
            type: 'json'
        }
    },
});
