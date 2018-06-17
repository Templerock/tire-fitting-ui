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
        }
        // stores: {
        //   singleUser: {              //Local store for current user
        //     autoLoad: true,
        //     autoSync: true,
        //     cors: true,
        //     model: 'Tf.model.User',
        //     proxy: {
        //       type: 'rest',
        //       url: 'http://localhost:8080/user/' + Ext.util.Cookies.get('user')
        //     }
        //   }
        // }
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
                      ],
                      buttons:[
                          {
                              scale: 'medium',
                              text: 'Order',
                              handler: 'loadServiceInfo'
                          }
                      ]
                  }
              ]
          }
      ],
      buttons:[
          {
              scale: 'medium',
              text: 'Go back to Login',
              handler: 'onLoginClick'
          }
      ]

    // layout: 'fit',
    // items: [{
    //   xtype: 'gridpanel',
    //   title: 'Service info',
    //   store: 'service',
    //   columns: [{
    //     text: 'Service ID',
    //     width: 75,
    //     sortable: true,
    //     dataIndex: 'serviceId'
    //   }, {
    //     text: 'Name',
    //     flex: 1,
    //     sortable: true,
    //     dataIndex: 'name',
    //   }, {
    //     text: 'Location',
    //     flex: 1,
    //     sortable: true,
    //     dataIndex: 'location',
    //   }, {
    //     text: 'Serving Staff',
    //     flex: 1,
    //     sortable: true,
    //     dataIndex: 'servingStaff',
    //   }, {
    //     text: 'Total Rating',
    //     flex: 1,
    //     sortable: true,
    //     dataIndex: 'totalRating',
    //   }],
    //
    // }, {
    //   xtype: 'button',
    //   text: 'Go back to Login',
    //   handler: 'onLoginClick'
    //
    // }]
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
                        // title: 'Current order',
                        layout: 'column',
                        bodyPadding: '10',
                        items: [
                            {
                            columnWidth: 0.75,
                            xtype: 'gridpanel',
                                store: 'service',
                                // reference: 'form',
                               // store: 'currOrder',
                            // frame: true,
                            title: 'Avalible order',
                            columns: [{
                                text: 'Order ID',
                                sortable: true,
                                dataIndex: 'orderId',
                                hidden: true
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
                                    name: 'rating'
                                }, {
                                    text: 'Description',
                                    flex: 1,
                                    sortable: true,
                                    dataIndex: 'description',
                                    name: 'description'
                                }],
                                listeners: {
                                    selectionchange: 'onSelectionChange'
                                }
                            },

                            {
                                columnWidth: 0.25,
                                xtype: 'fieldset',
                                title: 'Active Order',
                                layout: 'anchor',
                                defaultType: 'textfield',
                                items: [
                                    //     {
                                    //     fieldLabel: 'Order ID',
                                    //     name: 'orderId'
                                    // },
                                    {
                                        fieldLabel: 'Service Name',
                                        name: 'serviceName'
                                    },
                                    {
                                        fieldLabel: 'User Name',
                                        name: 'userName'
                                    },
                                    {
                                        fieldLabel: 'Status',
                                        // bind: '{status}',
                                        name: 'status'
                                    }, {
                                        fieldLabel: 'Location',
                                        name: 'location'
                                    },
                                    {
                                        fieldLabel: 'Rating',
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
                                text: 'Orders',
                                handler: 'loadCurrentOrders'
                            }
                        ]


            }
        ],
                buttons:[
                    {
                        scale: 'medium',
                        text: 'Go back to Login',
                        handler: 'onLoginClick'
                    }
                ]


    // layout: 'fit',
    // items: [{
    //   xtype: 'button',
    //   text: 'Go back to Login',
    //   handler: 'onLoginClick'
    // }, {
    //   xtype: 'gridpanel',
    //   // renderTo: document.body,
    //   layout: 'fit',
    //   frame: true,
    //   title: 'User orders',
    //   iconCls: 'icon-user',
    //   store: 'order',
    //   columns: [{
    //     text: 'Order ID',
    //     width: 100,
    //     sortable: true,
    //     dataIndex: 'orderId'
    //   }, {
    //     text: 'Service ID',
    //     flex: 1,
    //     sortable: true,
    //     dataIndex: 'serviceId',
    //   }, {
    //     text: 'Status',
    //     flex: 1,
    //     sortable: true,
    //     dataIndex: 'status',
    //   }, {
    //     text: 'Location',
    //     flex: 1,
    //     sortable: true,
    //     dataIndex: 'location',
    //   }, {
    //     text: 'Rating',
    //     flex: 1,
    //     sortable: true,
    //     dataIndex: 'rating',
    //   }, {
    //     text: 'Description',
    //     flex: 1,
    //     sortable: true,
    //     dataIndex: 'description',
    //   }]
    //
    // }]
  }],
  //       {
  //   title: 'Available Orders',
  //   layout: 'fit',
  //   items: [{
  //     xtype: 'button',
  //     text: 'Go back to Login',
  //     handler: 'onLoginClick'
  //   }, {
  //     xtype: 'gridpanel',
  //     // renderTo: document.body,
  //     layout: 'fit',
  //     frame: true,
  //     title: 'User orders',
  //     iconCls: 'icon-user',
  //     store: 'order',
  //     columns: [{
  //       text: 'Order ID',
  //       width: 100,
  //       sortable: true,
  //       dataIndex: 'orderId'
  //     }, {
  //       text: 'Service ID',
  //       flex: 1,
  //       sortable: true,
  //       dataIndex: 'serviceId',
  //     }, {
  //       text: 'Status',
  //       flex: 1,
  //       sortable: true,
  //       dataIndex: 'status',
  //     }, {
  //       text: 'Location',
  //       flex: 1,
  //       sortable: true,
  //       dataIndex: 'location',
  //     }, {
  //       text: 'Rating',
  //       flex: 1,
  //       sortable: true,
  //       dataIndex: 'rating',
  //     }, {
  //       text: 'Description',
  //       flex: 1,
  //       sortable: true,
  //       dataIndex: 'description',
  //     },],
  //
  //   },]
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
                            // title: 'Current order',
                            layout: 'column',
                            bodyPadding: '10',
                            items: [
                                {
                                    columnWidth: 0.75,
                                    xtype: 'gridpanel',
                                    // reference: 'form',
                                    // store: 'service',
                                    frame: true,
                                    title: 'Current Orders',
                                    columns: [{
                                        text: 'Order ID',
                                        sortable: true,
                                        dataIndex: 'orderId',
                                        hidden: true
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
                                            name: 'rating'
                                        }, {
                                            text: 'Description',
                                            flex: 1,
                                            sortable: true,
                                            dataIndex: 'description',
                                            name: 'description'
                                        }],
                                    listeners: {
                                        selectionchange: 'onSelectionChange'
                                    }
                                },

                                {
                                    columnWidth: 0.25,
                                    xtype: 'fieldset',
                                    title: 'Active Order',
                                    layout: 'anchor',
                                    defaultType: 'textfield',
                                    items: [
                                        //     {
                                        //     fieldLabel: 'Order ID',
                                        //     name: 'orderId'
                                        // },
                                        {
                                            fieldLabel: 'Service Name',
                                            name: 'serviceName'
                                        },
                                        {
                                            fieldLabel: 'User Name',
                                            name: 'userName'
                                        },
                                        {
                                            fieldLabel: 'Status',
                                            // bind: '{status}',
                                            name: 'status'
                                        }, {
                                            fieldLabel: 'Location',
                                            name: 'location'
                                        },
                                        {
                                            fieldLabel: 'Rating',
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
                                    text: 'Orders',
                                    handler: 'loadCurrentOrders'
                                }
                            ]


                        }
                    ],
                    buttons:[
                        {
                            scale: 'medium',
                            text: 'Go back to Login',
                            handler: 'onLoginClick'
                        }
                    ]


                    // layout: 'fit',
                    // items: [{
                    //   xtype: 'button',
                    //   text: 'Go back to Login',
                    //   handler: 'onLoginClick'
                    // }, {
                    //   xtype: 'gridpanel',
                    //   // renderTo: document.body,
                    //   layout: 'fit',
                    //   frame: true,
                    //   title: 'User orders',
                    //   iconCls: 'icon-user',
                    //   store: 'order',
                    //   columns: [{
                    //     text: 'Order ID',
                    //     width: 100,
                    //     sortable: true,
                    //     dataIndex: 'orderId'
                    //   }, {
                    //     text: 'Service ID',
                    //     flex: 1,
                    //     sortable: true,
                    //     dataIndex: 'serviceId',
                    //   }, {
                    //     text: 'Status',
                    //     flex: 1,
                    //     sortable: true,
                    //     dataIndex: 'status',
                    //   }, {
                    //     text: 'Location',
                    //     flex: 1,
                    //     sortable: true,
                    //     dataIndex: 'location',
                    //   }, {
                    //     text: 'Rating',
                    //     flex: 1,
                    //     sortable: true,
                    //     dataIndex: 'rating',
                    //   }, {
                    //     text: 'Description',
                    //     flex: 1,
                    //     sortable: true,
                    //     dataIndex: 'description',
                    //   }]
                    //
                    // }]
                }],
            //       {
            //   title: 'Available Orders',
            //   layout: 'fit',
            //   items: [{
            //     xtype: 'button',
            //     text: 'Go back to Login',
            //     handler: 'onLoginClick'
            //   }, {
            //     xtype: 'gridpanel',
            //     // renderTo: document.body,
            //     layout: 'fit',
            //     frame: true,
            //     title: 'User orders',
            //     iconCls: 'icon-user',
            //     store: 'order',
            //     columns: [{
            //       text: 'Order ID',
            //       width: 100,
            //       sortable: true,
            //       dataIndex: 'orderId'
            //     }, {
            //       text: 'Service ID',
            //       flex: 1,
            //       sortable: true,
            //       dataIndex: 'serviceId',
            //     }, {
            //       text: 'Status',
            //       flex: 1,
            //       sortable: true,
            //       dataIndex: 'status',
            //     }, {
            //       text: 'Location',
            //       flex: 1,
            //       sortable: true,
            //       dataIndex: 'location',
            //     }, {
            //       text: 'Rating',
            //       flex: 1,
            //       sortable: true,
            //       dataIndex: 'rating',
            //     }, {
            //       text: 'Description',
            //       flex: 1,
            //       sortable: true,
            //       dataIndex: 'description',
            //     },],
            //
            //   },]
        }
  ]
});
