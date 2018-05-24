Ext.define('Tf.view.user.User', {
    extend: 'Ext.tab.Panel',
    xtype: 'user',
    controller: 'main',
    id: 'user',
    layout: 'fit',
    requires: [
        // 'Ext.Button',
        // 'Ext.field.Text'
    ],

    viewModel: {
        data: {
            //TODO implement REST integration
        }
    },

    items: [{
        title: 'User info',
        layout: 'fit',
        items: [{
            xtype: 'button',
            text: 'Go back to Login',
            handler: 'onLoginClick'
        },{
            xtype: 'gridpanel',
            renderTo: document.body,
            layout: 'fit',
            frame: true,
            title: 'User info',
            iconCls: 'icon-user',
            store: 'user',
            columns: [{
                text: 'User ID',
                width: 100,
                sortable: true,
                dataIndex: 'userId'
            }, {
                text: 'Name',
                flex: 1,
                sortable: true,
                dataIndex: 'name',
            },{
                text: 'Car Info ID',
                flex: 1,
                sortable: true,
                dataIndex: 'carInfoId',
            },{
                text: 'Car Brand',
                flex: 1,
                sortable: true,
                dataIndex: 'carBrand',
            },{
                text: 'Tire radius',
                flex: 1,
                sortable: true,
                dataIndex: 'tireRadius',
            },{
                text: 'Tire Type',
                flex: 1,
                sortable: true,
                dataIndex: 'tireType',
            },],

         },{
            xtype: 'button',
            text: 'Go back to Login',
            handler: 'onLoginClick'

        }]
    }, {
        title: 'Orders',
        layout: 'fit',
        items: [{
            xtype: 'button',
            text: 'Go back to Login',
            handler: 'onLoginClick'
            },{
            xtype: 'gridpanel',
            renderTo: document.body,
            layout: 'fit',
            frame: true,
            title: 'User orders',
            iconCls: 'icon-user',
            store: 'order',
            columns: [{
                text: 'Order ID',
                width: 100,
                sortable: true,
                dataIndex: 'orderId'
            }, {
                text: 'Service ID',
                flex: 1,
                sortable: true,
                dataIndex: 'serviceId',
            },{
                text: 'Status',
                flex: 1,
                sortable: true,
                dataIndex: 'status',
            },{
                text: 'Location',
                flex: 1,
                sortable: true,
                dataIndex: 'location',
            },{
                text: 'Rating',
                flex: 1,
                sortable: true,
                dataIndex: 'rating',
            },{
                text: 'Description',
                flex: 1,
                sortable: true,
                dataIndex: 'description',
            },],

        },]
    }]
});
