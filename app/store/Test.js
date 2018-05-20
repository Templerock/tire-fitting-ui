Ext.define('Tf.store.Test', {
    extend: 'Ext.data.Store',
    alias: 'store.Test',
    autoLoad: true,
    autoSync: true,
   id: 'test',
   storeId: 'test',
    model: 'Tf.model.Test',
    // proxy: {
    //     type: 'rest',
    //     url: 'http://localhost:8080/status',
    //     reader: {
    //         type: 'json',
    //         root: 'data'
    //     },
    //     writer: {
    //         type: 'json'
    //     }
    // },
    // fields: ['statusId', 'statusName'],
    data: [
        {statusId: '1', statusName: 'Active'},
        {statusId: '2', statusName: 'Passive'},
    ],

});
