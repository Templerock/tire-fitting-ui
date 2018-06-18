Ext.define('Tf.view.user.User', {
  extend: 'Ext.tab.Panel',
  requires: [
    'Tf.model.User'
  ],
  xtype: 'user',
  controller: 'user',
  id: 'user',
  layout: 'fit',
  viewModel: {
      data: {
          status: '',
      }
  },
    items: [
        {
            title: 'User info',
            items: [
                {
                    xtype: 'form',
                    reference: 'userForm',
                    layout: 'center',
                    bodyPadding: '10',
                    listeners: {
                            afterrender: 'loadUserInfo'
                        },
                    fieldDefaults: {
                        labelAlign: 'left',
                        labelWidth: 150,
                        anchor: '100%',
                        msgTarget: 'side'
                    },
                    items: [
                        {
                            title: 'User info',
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
                                    , {
                                        fieldLabel: 'Name',
                                        dataIndex: 'name',
                                        name: 'name'
                                    }
                                    , {
                                        fieldLabel: 'Car Brand',
                                        dataIndex: 'carBrand',
                                        name: 'carBrand'
                                    },
                                        {
                                            fieldLabel: 'Tire Radius',
                                            dataIndex: 'tireRadius',
                                            name: 'tireRadius'
                                        },
                                        {
                                            fieldLabel: 'Tire Type',
                                            dataIndex: 'tireType',
                                            name: 'tireType'
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
                    text: 'Go back to Login',
                    handler: 'onLoginClick'
                }
            ]
        },
        {
        title: 'Current order',
        items: [
            {
                xtype: 'form',
                reference: 'activeOrder',
                layout: 'center',
                bodyPadding: '10',
                listeners: {
                    afterrender: 'loadActiveOrder'
                },
                fieldDefaults: {
                    labelAlign: 'left',
                    labelWidth: 150,
                    anchor: '100%',
                    msgTarget: 'side'
                },
                items:[
                    {
                        title: 'User orders',
                        layout: 'column',
                        bodyPadding: '10',
                                items: [
                                    {
                                    columnWidth: 1,
                                    xtype: 'fieldset',
                                    title: 'Active Order',
                                    layout: 'anchor',
                                    defaultType: 'textfield',
                                    items: [
                                        {
                                        fieldLabel: 'Service Name',
                                        name: 'serviceName'
                                    },
                                        {
                                            fieldLabel: 'User Name',
                                            name: 'userName',
                                            hidden: true
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
                                            name: 'rating',
                                            hidden: true,
                                        },
                                        {
                                            fieldLabel: 'Description',
                                            name: 'description'
                                        }]}],
                        buttons: [
                            {
                                scale: 'medium',
                                text: 'Create Order',
                                bind: {
                                    disabled: '{status}',
                                },
                                handler: 'onCreateOrder'
                            },
                            {
                                scale: 'medium',
                                bind: {
                                    disabled: '{!status}',
                                },
                                text: 'Update Order',
                                handler: 'onUpdateOrder'
                            }
                        ]
                    }
                ]
        }
        ],
            buttons: [
                {
                    scale: 'medium',
                    text: 'Go back to Login',
                    handler: 'onLoginClick'
                }
            ]
    },{
        title: 'Orders history',
        bodyPadding: '10',
        items: [{
            xtype: 'gridpanel',
            store: 'order',
            plugins: 'gridfilters',
            columns: [{
                text: 'Order ID',
                sortable: true,
                dataIndex: 'orderId',
                hidden: true
            }, {
                text: 'Service ID',
                flex: 1,
                sortable: true,
                dataIndex: 'serviceId',
                hidden: true
            },
                {
                    text: 'Service Name',
                    flex: 1,
                    sortable: true,
                    dataIndex: 'serviceName'
                },

                {
                    text: 'User Name',
                    flex: 1,
                    sortable: true,
                    hidden: true,
                    dataIndex: 'userName'
                },

                {
                text: 'Status',
                width: 95,
                flex: 1,
                sortable: true,
                dataIndex: 'status'
            }, {
                text: 'Location',
                flex: 1,
                sortable: true,
                dataIndex: 'location'
            }, {
                text: 'Rating',
                flex: 1,
                sortable: true,
                hidden: true,
                dataIndex: 'rating'
            }, {
                text: 'Description',
                flex: 1,
                sortable: true,
                dataIndex: 'description'
            }, {
                text: 'User ID',
                flex: 1,
                sortable: true,
                dataIndex: 'userId',
                hidden: true
            }]

        }
        ],
       buttons: [
           {
               text: 'Go back to Login',
               scale: 'medium',
               handler: 'onLoginClick'
           }
       ]
    }]
});

