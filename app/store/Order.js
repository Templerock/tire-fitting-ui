Ext.define('Tf.store.Order', {
    requires: [
        'Tf.model.Order'
    ],
    extend: 'Ext.data.Store',
    alias: 'store.Order',
    autoLoad: true,
    autoSync: true,
    cors: true,
    controller: 'main',
    storeId: 'order',
    model: 'Tf.model.Order',
    proxy: {
        type: 'rest',
        url: 'http://localhost:8080/order',
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
    // filters: [{
    //     property: 'userId',
    //     value: Ext.create('Tf.model.User').load().
    // }]
});