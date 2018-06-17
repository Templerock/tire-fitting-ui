Ext.define('Tf.view.order.Order', {
    extend: 'Ext.window.Window',
    requires: [
        'Tf.model.Order'
    ],
    xtype: 'order',
    controller: 'order',
    id: 'order',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
    bodyPadding: 20,
    viewModel: {
        data: {
            description: '',
            location: '',
            userId: '',
        }
    },
    items: [{
         xtype: 'textarea',
            label: 'Description',
            bind: '{description}',
            fieldLabel: 'Description',
            reference: 'ordFieldOne'
        }, {
            xtype: 'textfield',
            label: 'Location',
            bind: '{location}',
            fieldLabel: 'location',
            reference: 'ordFieldTwo'
        },
        {
            xtype: 'button',
            handler: 'acceptOrder',
            text: 'Accept'
        },
        {
            xtype: 'button',
            handler: 'updateOrder',
            text: 'Update'
        }
    ]
});