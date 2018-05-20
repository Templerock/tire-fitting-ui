Ext.define('Tf.model.Test', {
    extend: 'Ext.data.Model',
    alias: 'model.test',
    fields: [{
        name: 'statusId',
        type: 'int',
        useNull: true
    }, 'statusName'],
    validations: [{
        type: 'length',
        field: 'statusName',
        min: 1
    }],
});

