Ext.define('Tf.store.Service', {
    requires: [
        'Tf.model.Service'
    ],
    extend: 'Ext.data.Store',
    alias: 'store.Service',
    autoLoad: true,
    autoSync: true,
    cors: true,
    controller: 'main',
    storeId: 'service',
    model: 'Tf.model.Service',
    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/service',
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
    },
    filters: [{
        property: 'name',
        value: Ext.util.Cookies.get('service')
    }]
});