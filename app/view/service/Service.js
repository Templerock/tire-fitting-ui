Ext.define('Tf.view.service.Service', {
  extend: 'Ext.tab.Panel',
    requires: [
        'Tf.model.Service'
    ],
    controller: 'service',
    xtype: 'service',
    id: 'service',
    viewModel: {
        data: {
            status: '',
            finstatus: '',
        }
    },
    layout: 'fit',
    items: [{
    title: 'Service info',

      items: [
          {
              xtype: 'form',
              reference: 'serviceForm',
              layout: 'center',
              bodyPadding: '10',
              fieldDefaults: {
                  labelAlign: 'left',
                  labelWidth: 150,
                  anchor: '100%',
                  msgTarget: 'side'
              },
              items: [
                  {
                      title: 'Service info',
                      layout: 'column',
                      bodyPadding: '10',
                      items: [
                          {
                              columnWidth: 1,
                              xtype: 'fieldset',
                              title: 'Details',
                              layout: 'anchor',
                              defaultType: 'textfield',
                              items: [
                                  {
                                      fieldLabel: 'Service Id',
                                      dataIndex: 'serviceId',
                                      name: 'serviceId',
                                      hidden: true
                                  },
                                  {
                                      fieldLabel: 'Name',
                                      dataIndex: 'name',
                                      name: 'name'
                                  },

                                  {
                                      fieldLabel: 'Location',
                                      dataIndex: 'location',
                                      name: 'location'
                                  },
                                  {
                                      fieldLabel: 'Serving Staff',
                                      dataIndex: 'servingStaff',
                                      name: 'servingStaff'
                                  },
                                  {
                                      fieldLabel: 'Total Rating',
                                      dataIndex: 'totalRating',
                                      name: 'totalRating'
                                  }

                              ]
                          }
                      ]
                  }
              ]
          }
      ],
      buttons:[
          {
              scale: 'medium',
              text: 'Service',
              handler: 'loadServiceInfo'
          },
          {
              scale: 'medium',
              text: 'Go back to Login',
              handler: 'onLoginClick'
          }
      ]
  }, {
    title: 'Available Orders',
        items: [
            {
                xtype: 'form',
                reference: 'formOne',
                layout: 'fit',
                bodyPadding: '10',
                fieldDefaults: {
                    labelAlign: 'left',
                    labelWidth: 150,
                    anchor: '100%',
                    msgTarget: 'side'
                },
                items:[
                    {
                        layout: 'column',
                        bodyPadding: '10',
                        items: [
                            {
                            columnWidth: 0.75,
                            xtype: 'gridpanel',
                            store: 'service',
                            title: 'Avalible order',
                            columns: [{
                                text: 'Order ID',
                                sortable: true,
                                dataIndex: 'orderId',
                            },
                                {
                                    text: 'Service ID',
                                    flex: 1,
                                    sortable: true,
                                    dataIndex: 'serviceId',
                                    hidden: true,
                                },
                                {
                                    text: 'Service Name',
                                    flex: 1,
                                    sortable: true,
                                    name: 'serviceName',
                                    dataIndex: 'serviceName',
                                    hidden: true
                                },
                                {
                                    text: 'User Name',
                                    flex: 1,
                                    sortable: true,
                                    name: 'userName',
                                    dataIndex: 'userName',
                                },
                                {
                                    text: 'Status',
                                    flex: 1,
                                    sortable: true,
                                    name: 'status',
                                    dataIndex: 'status',
                                }, {
                                    text: 'Location',
                                    flex: 1,
                                    sortable: true,
                                    dataIndex: 'location',
                                    name: 'location'
                                }, {
                                    text: 'Rating',
                                    flex: 1,
                                    sortable: true,
                                    dataIndex: 'rating',
                                    hidden: true,
                                    name: 'rating'
                                }, {
                                    text: 'Description',
                                    flex: 1,
                                    sortable: true,
                                    dataIndex: 'description',
                                    name: 'description'
                                }],
                                listeners: {
                                    selectionchange: 'onSelectionChangeOne'
                                }
                            },

                            {
                                columnWidth: 0.25,
                                xtype: 'fieldset',
                                title: 'Active Order',
                                layout: 'anchor',
                                defaultType: 'textfield',
                                items: [
                                        {
                                        fieldLabel: 'Order ID',
                                        name: 'orderId'
                                    },
                                    {
                                        fieldLabel: 'Service Name',
                                        hidden: true,
                                        name: 'serviceName'
                                    },
                                    {
                                        fieldLabel: 'User Name',
                                        name: 'userName'
                                    },
                                    {
                                        fieldLabel: 'Status',
                                        bind: '{status}',
                                        name: 'status'
                                    }, {
                                        fieldLabel: 'Location',
                                        name: 'location'
                                    },
                                    {
                                        fieldLabel: 'Rating',
                                        hidden: true,
                                        name: 'rating'
                                    },
                                    {
                                        fieldLabel: 'Description',
                                        name: 'description'
                                    }],
                            }
                        ],
                        buttons:[
                            {
                                scale: 'medium',
                                text: 'Accept Order',
                                bind: {
                                    disabled: '{!status}'
                                },
                                handler: 'acceptOrder'
                            }
                        ]
            }
        ]
  }],
        buttons:[
            {
                scale: 'medium',
                text: 'Go back to Login',
                handler: 'onLoginClick'
            }
        ]
  },
        {
            title: 'Current Orders',
            items: [
                {
                    xtype: 'form',
                    reference: 'formTwo',
                    layout: 'fit',
                    bodyPadding: '10',
                    fieldDefaults: {
                        labelAlign: 'left',
                        labelWidth: 150,
                        anchor: '100%',
                        msgTarget: 'side'
                    },
                    items:[
                        {
                            layout: 'column',
                            bodyPadding: '10',
                            items: [
                                {
                                    columnWidth: 0.75,
                                    xtype: 'gridpanel',
                                    store: 'user',
                                    title: 'Current Orders',
                                    columns: [{
                                        text: 'Order ID',
                                        sortable: true,
                                        dataIndex: 'orderId',
                                    },
                                        {
                                            text: 'Service ID',
                                            flex: 1,
                                            sortable: true,
                                            dataIndex: 'serviceId',
                                            hidden: true,
                                        },
                                        {
                                            text: 'Service Name',
                                            flex: 1,
                                            sortable: true,
                                            name: 'serviceName',
                                            dataIndex: 'serviceName',
                                            hidden: true
                                        },
                                        {
                                            text: 'User Name',
                                            flex: 1,
                                            sortable: true,
                                            name: 'userName',
                                            dataIndex: 'userName',
                                        },
                                        {
                                            text: 'Status',
                                            flex: 1,
                                            sortable: true,
                                            name: 'status',
                                            dataIndex: 'status',
                                        }, {
                                            text: 'Location',
                                            flex: 1,
                                            sortable: true,
                                            dataIndex: 'location',
                                            name: 'location'
                                        }, {
                                            text: 'Rating',
                                            flex: 1,
                                            sortable: true,
                                            dataIndex: 'rating',
                                            hidden: true,
                                            name: 'rating'
                                        }, {
                                            text: 'Description',
                                            flex: 1,
                                            sortable: true,
                                            dataIndex: 'description',
                                            name: 'description'
                                        }],
                                    listeners: {
                                        selectionchange: 'onSelectionChangeTwo'
                                    }
                                },

                                {
                                    columnWidth: 0.25,
                                    xtype: 'fieldset',
                                    title: 'Active Order',
                                    layout: 'anchor',
                                    defaultType: 'textfield',
                                    items: [
                                            {
                                            fieldLabel: 'Order ID',
                                            name: 'orderId'
                                        },
                                        {
                                            fieldLabel: 'Service Name',
                                            hidden: true,
                                            name: 'serviceName'
                                        },
                                        {
                                            fieldLabel: 'User Name',
                                            name: 'userName'
                                        },
                                        {
                                            fieldLabel: 'Status',
                                            bind: '{finstatus}',
                                            name: 'status'
                                        }, {
                                            fieldLabel: 'Location',
                                            name: 'location'
                                        },
                                        {
                                            fieldLabel: 'Rating',
                                            hidden: true,
                                            name: 'rating'
                                        },
                                        {
                                            fieldLabel: 'Description',
                                            name: 'description'
                                        }],
                                }
                            ],
                            buttons:[

                                {
                                    scale: 'medium',
                                    text: 'Complete Order',
                                    bind: {
                                        disabled: '{!finstatus}',
                                    },
                                    handler: 'completeOrder'
                                }

                            ]


                        }
                    ],
                }],
            buttons:[ {
                scale: 'medium',
                text: 'Orders',
                handler: 'loadCurrentOrders'
            },
                {
                    scale: 'medium',
                    text: 'Go back to Login',
                    handler: 'onLoginClick'
                }
            ]
        }
  ]
});
