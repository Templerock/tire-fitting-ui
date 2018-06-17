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
    items: [
        {
            title: 'User info',
            items: [
                {
                    xtype: 'form',
                    reference: 'userForm',
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
                                    //     {
                                    //     fieldLabel: 'User ID',
                                    //     dataIndex: 'userId',
                                    //     name: 'orderId'
                                    // }
                                    , {
                                        fieldLabel: 'Name',
                                        dataIndex: 'name',
                                        name: 'name'
                                    }
                                    //     {
                                    //     fieldLabel: 'Car Info Id',
                                    //     dataIndex: 'carInfoId',
                                    //     name: 'carInfoId'
                                    // }
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
                            ],
                            buttons:[
                                {
                                    scale: 'medium',
                                    text: 'Go back to Login',
                                    handler: 'onLoginClick'
                                },
                                {
                                    scale: 'medium',
                                    text: 'User',
                                    handler: 'loadUserInfo'
                                }
                            ]
                        }
                    ]
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
                                    // {
                                    // columnWidth: 0.75,
                                    // xtype: 'gridpanel',
                                    // frame: true,
                                    // title: 'User orders',
                                    // // reference: 'activeOrder',
                                    // columns: [{
                                    //     text: 'Order ID',
                                    //     sortable: true,
                                    //     dataIndex: 'orderId'
                                    // },
                                    //     {
                                    //         text: 'Service ID',
                                    //         flex: 1,
                                    //         sortable: true,
                                    //         dataIndex: 'serviceId',
                                    //     },
                                    //     {
                                    //         text: 'Status',
                                    //         flex: 1,
                                    //         sortable: true,
                                    //         dataIndex: 'status',
                                    //     }, {
                                    //         text: 'Location',
                                    //         flex: 1,
                                    //         sortable: true,
                                    //         dataIndex: 'location',
                                    //     }, {
                                    //         text: 'Rating',
                                    //         flex: 1,
                                    //         sortable: true,
                                    //         dataIndex: 'rating',
                                    //     }, {
                                    //         text: 'Description',
                                    //         flex: 1,
                                    //         sortable: true,
                                    //         dataIndex: 'description',
                                    //     }],
                                //     listeners: {
                                //         selectionchange: 'onSelectionChange'
                                //     }
                                // },
                                    {
                                    columnWidth: 1,
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
                                            bind: '{status}',
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
                                        }]}],
                        buttons: [
                            {
                                scale: 'medium',
                                text: 'Active',
                                handler: 'loadActiveOrder'
                            },
                            // {
                            //     scale: 'medium',
                            //     text: 'to Login',
                            //     handler: 'onLoginClick'
                            // },
                            {
                                scale: 'medium',
                                text: 'CreateOr',
                                bind: {
                                    disabled: '{status}',
                                },
                                handler: 'onCreateOrder'
                            },
                            {
                                scale: 'medium',
                                text: 'UpdateOr',
                                handler: 'onUpdateOrder'
                            }
                        ]
                    }
                ]
            //Trying to bind data from store to textfield
            // bind: {
            //   value: '{name}'
            //   //value: '{singleUser.data.name}'
            // }
        },
        ]
    },{
        title: 'Orders history',
        bodyPadding: '10',
        items: [{
            xtype: 'gridpanel',
            store: 'order',
            // maxWidth: 600,
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
                hidden: true,
                // filter:
                //     {
                //         type: 'string',
                //         value: Ext.util.Cookies.get('user')
                //     }
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




// var frmAccount = Ext.create('Ext.form.Panel', {
//     initComponent: function () {
//         Ext.apply(this,
//             {
//                 fieldDefaults: {
//                     labelAlign: 'left',
//                     labelWidth: 150,
//                     anchor: '100%',
//                     msgTarget: 'side'
//                 },
//
//                 items: [
//                     {
//                         title: 'User orders',
//                         layout: 'column',
//                         bodyPadding: '50',
//                         margin: '50 250 0 250',
//                         items: [{
//                             columnWidth: 0.75,
//                             xtype: 'gridpanel',
//                             frame: true,
//                             title: 'User orders',
//                             store: 'order',
//                             columns: [{
//                                 text: 'Order ID',
//                                 sortable: true,
//                                 dataIndex: 'orderId'
//                             },
//                                 {
//                                     text: 'Service ID',
//                                     flex: 1,
//                                     sortable: true,
//                                     dataIndex: 'serviceId',
//                                 },
//                                 {
//                                     text: 'Status',
//                                     flex: 1,
//                                     sortable: true,
//                                     dataIndex: 'status',
//                                 }, {
//                                     text: 'Location',
//                                     flex: 1,
//                                     sortable: true,
//                                     dataIndex: 'location',
//                                 }, {
//                                     text: 'Rating',
//                                     flex: 1,
//                                     sortable: true,
//                                     dataIndex: 'rating',
//                                 }, {
//                                     text: 'Description',
//                                     flex: 1,
//                                     sortable: true,
//                                     dataIndex: 'description',
//                                 }],
//                             listeners: {
//                                 scope: this,
//                                 selectionchange: this.onSelectionChange
//                             }
//                         }, {
//                             columnWidth: 0.25,
//                             xtype: 'fieldset',
//                             title: 'Details',
//                             layout: 'anchor',
//                             defaultType: 'textfield',
//                             items: [{
//                                 fieldLabel: 'Order ID',
//                                 name: 'orderId'
//                             }, {
//                                 fieldLabel: 'Service Name',
//                                 name: 'serviceId'
//                             }, {
//                                 fieldLabel: 'Status',
//                                 name: 'status'
//                             }, {
//                                 fieldLabel: 'Location',
//                                 name: 'location'
//                             },
//                                 {
//                                     fieldLabel: 'Rating',
//                                     name: 'rating'
//                                 },
//                                 {
//                                     fieldLabel: 'Description',
//                                     name: 'description'
//                                 },
//                                 {
//                                     xtype: 'button',
//                                     margin: '0 0 0 154',
//                                     scale: 'medium',
//                                     text: 'Go back to Login',
//                                     handler: 'onLoginClick'
//
//                                 }
//                             ]
//
//                         }]
//                     }
//                 ]
//             });
//         this.callParent();
//     },
    // onSelectionChange: function (model, records) {
    //     var rec = records[0];
    //     if (rec) {
    //         this.getForm().loadRecord(rec);
    //     }
    // }
// });
