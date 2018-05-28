Ext.define('Tf.view.service.Service', {
  extend: 'Ext.tab.Panel',
  xtype: 'service',
  items: [{
    title: 'Service info',
    layout: 'fit',
    items: [{
      xtype: 'gridpanel',
      title: 'Service info',
      store: 'service',
      columns: [{
        text: 'Service ID',
        width: 75,
        sortable: true,
        dataIndex: 'serviceId'
      }, {
        text: 'Name',
        flex: 1,
        sortable: true,
        dataIndex: 'name',
      }, {
        text: 'Location',
        flex: 1,
        sortable: true,
        dataIndex: 'location',
      }, {
        text: 'Serving Staff',
        flex: 1,
        sortable: true,
        dataIndex: 'servingStaff',
      }, {
        text: 'Total Rating',
        flex: 1,
        sortable: true,
        dataIndex: 'totalRating',
      }],

    }, {
      xtype: 'button',
      text: 'Go back to Login',
      handler: 'onLoginClick'

    }]
  }, {
    title: 'Current Orders',
    layout: 'fit',
    items: [{
      xtype: 'button',
      text: 'Go back to Login',
      handler: 'onLoginClick'
    }, {
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

    },]
  }, {
    title: 'Available Orders',
    layout: 'fit',
    items: [{
      xtype: 'button',
      text: 'Go back to Login',
      handler: 'onLoginClick'
    }, {
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

    },]
  }]
});
