Ext.define('Tf.view.order.UpOrder', {
    extend: 'Ext.window.Window',
    requires: [
        'Tf.model.Order'
    ],
    xtype: 'order',
    controller: 'order',
    id: 'upOrder',
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
            bodyPadding: 20,
            scale: 'medium',
            handler: 'updateOrder',
            text: 'Update'
        }
    ]
});