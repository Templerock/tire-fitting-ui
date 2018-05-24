Ext.define('Tf.store.Test', {
    requires: [
        'Tf.model.Test'
    ],
    extend: 'Ext.data.Store',
    alias: 'store.Test',
    autoLoad: true,
    autoSync: true,
    cors: true,
    controller: 'main',
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
    listeners: {
        load: {
            fn: function (store) {
                var task = {
                    run: function () {
                        Ext.getStore(store).load();
                    },
                    interval: 30000
                };
                Ext.TaskManager.start(task);
            },
            single: true
        }
    }
});
