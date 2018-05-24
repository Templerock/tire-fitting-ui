Ext.define('Tf.store.User', {
    requires: [
        'Tf.model.User'
    ],
    extend: 'Ext.data.Store',
    alias: 'store.User',
    autoLoad: true,
    autoSync: true,
    cors: true,
    controller: 'main',
    storeId: 'user',
    model: 'Tf.model.User',
    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/user',
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
        value: Ext.util.Cookies.get('user')
    }]
});