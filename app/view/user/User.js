Ext.define('Tf.view.user.User', {
  extend: 'Ext.tab.Panel',
  xtype: 'user',
    title: 'User',
  controller: 'main',
  id: 'user',
  layout: 'column',

    items: [{
        title: 'User info',
        padding: '50px 250px 0px 250px',
        items: [{
            xtype: 'gridpanel',
            frame: true,
            title: 'User info',
            store: 'user',
            columns: [{
                text: 'User ID',
                width: 130,
                sortable: true,
                dataIndex: 'userId'
            }, {
                text: 'Name',
                flex: 1,
                sortable: true,
                dataIndex: 'name',
            }, {
                text: 'Car Info ID',
                flex: 1,
                sortable: true,
                dataIndex: 'carInfoId',
            }, {
                text: 'Car Brand',
                flex: 1,
                sortable: true,
                dataIndex: 'carBrand',
            }, {
                text: 'Tire radius',
                flex: 1,
                sortable: true,
                dataIndex: 'tireRadius',
            }, {
                text: 'Tire Type',
                flex: 1,
                sortable: true,
                dataIndex: 'tireType',
            }]

        }, {
            xtype: 'button',
            margin: '20px 0 0 1300px',
            // x:1300,
            // y:30,
            text: 'Go back to Login',
            handler: 'onLoginClick'

        }]
    }, {
        title: 'User orders',
        padding: '50px 250px 0px 250px',
        items: [{
            xtype: 'gridpanel',
            frame: true,
            title: 'User orders',
            store: 'order',
            columns: [{
                text: 'Order ID',
                width: 75,
                sortable: true,
                dataIndex: 'orderId'
            }, {
                text: 'Service ID',
                flex: 1,
                sortable: true,
                dataIndex: 'serviceId',
            }, {
                text: 'Status',
                flex: 1,
                sortable: true,
                dataIndex: 'status',
            }, {
                text: 'Location',
                flex: 1,
                sortable: true,
                dataIndex: 'location',
            }, {
                text: 'Rating',
                flex: 1,
                sortable: true,
                dataIndex: 'rating',
            }, {
                text: 'Description',
                flex: 1,
                sortable: true,
                dataIndex: 'description',
            },],

        }, {
          xtype: 'button',
          text: 'Go back to Login',
            x:1300,
            y:30,
          handler: 'onLoginClick'
        }]
    }]
});
