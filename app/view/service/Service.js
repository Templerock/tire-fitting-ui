Ext.define('Tf.view.service.Service', {
  extend: 'Ext.tab.Panel',
  xtype: 'service',
    title: 'Service',
    controller: 'main',
    id: 'service',
    layout: 'column',

  items: [{
      title: 'Service info',
      padding: '50px 250px 0px 250px',
      items: [{
        xtype: 'gridpanel',
          frame: true,
      title: 'Service info',
      store: 'service',
      columns: [{
        text: 'Service ID',
        width: 100,
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
          margin: '20px 0 0 1300px',
      text: 'Go back to Login',
      handler: 'onLoginClick'

    }]
  }, {
    title: 'Current Orders',
      padding: '50px 250px 0px 250px',
    // layout: 'fit',
    items: [ {
      xtype: 'gridpanel',
      renderTo: document.body,
      // layout: 'fit',
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

    }, {
            xtype: 'button',
            text: 'Go back to Login',
            margin: '20px 0 0 1300px',
            handler: 'onLoginClick'
        },]
  }, {
    title: 'Available Orders',
      padding: '50px 250px 0px 250px',
    // layout: 'fit',
    items: [ {
      xtype: 'gridpanel',
      renderTo: document.body,
      // layout: 'fit',
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

    }, {
            xtype: 'button',
            text: 'Go back to Login',
        margin: '20px 0 0 1300px',
            handler: 'onLoginClick'
        },]
  }]
});
