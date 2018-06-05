Ext.define('Tf.view.user.User', {
  extend: 'Ext.form.Panel',
  xtype: 'user',
    title: 'User',
  controller: 'main',
  id: 'user',
        initComponent: function() {
    Ext.apply(this,
        {
        fieldDefaults: {
            labelAlign: 'left',
            labelWidth: 150,
            anchor: '100%',
            msgTarget: 'side'
        },

        items: [{
            title: 'User info',
            layout: 'column',
            bodyPadding: '50',
            margin: '50 250 0 250',
            items: [{
                columnWidth: 1,
                xtype: 'gridpanel',
                store: 'user',
                columns: [{
                    text: 'Name',
                    flex: 1,
                    sortable: true,
                    dataIndex: 'name',
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
                }
            ]}]}
            ,
            {
                title: 'User orders',
                layout: 'column',
                bodyPadding: '50',
                margin: '50 250 0 250',
                items: [{
                    columnWidth: 0.75,
                    xtype: 'gridpanel',
                    frame: true,
                    title: 'User orders',
                    store: 'order',
                    columns: [{
                        text: 'Order ID',
                        sortable: true,
                        dataIndex: 'orderId'
                    },
                        {
                        text: 'Service ID',
                        flex: 1,
                        sortable: true,
                        dataIndex: 'serviceId',
                    },
                        {
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
                    }],
                    listeners: {
                        scope: this,
                        selectionchange: this.onSelectionChange
                    }
                }, {
                    columnWidth: 0.25,
                    xtype: 'fieldset',
                    title:'Details',
                    layout: 'anchor',
                    defaultType: 'textfield',
                    items: [{
                        fieldLabel: 'Order ID',
                        name: 'orderId'
                    },{
                        fieldLabel: 'Service Name',
                        name: 'serviceId'
                    },{
                        fieldLabel: 'Status',
                        name: 'status'
                    },{
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
                        },
                        {
                            xtype: 'button',
                            margin: '0 0 0 154',
                            scale: 'medium',
                            text: 'Go back to Login',
                            handler: 'onLoginClick'

                        }
                    ]

                }]}
        ]});
    this.callParent();
},
onSelectionChange: function(model, records) {
    var rec = records[0];
    if (rec) {
        this.getForm().loadRecord(rec);
    }
}


    // layout: 'fit',


    // items: [{
    //     title: 'User info',
    //     padding: '50px 250px 0px 250px',
    //     items: [{
    //         xtype: 'gridpanel',
    //         frame: true,
    //         title: 'User info',
    //         store: 'user',
    //         columns: [
    //         //     {
    //         //     text: 'User ID',
    //         //     width: 130,
    //         //     sortable: true,
    //         //     dataIndex: 'userId'
    //         // },
    //             {
    //             text: 'Name',
    //             flex: 1,
    //             sortable: true,
    //             dataIndex: 'name',
    //         }, {
    //             text: 'Car Info ID',
    //             flex: 1,
    //             sortable: true,
    //             dataIndex: 'carInfoId',
    //         }, {
    //             text: 'Car Brand',
    //             flex: 1,
    //             sortable: true,
    //             dataIndex: 'carBrand',
    //         }, {
    //             text: 'Tire radius',
    //             flex: 1,
    //             sortable: true,
    //             dataIndex: 'tireRadius',
    //         }, {
    //             text: 'Tire Type',
    //             flex: 1,
    //             sortable: true,
    //             dataIndex: 'tireType',
    //         }]
    //
    //     }, {
    //         xtype: 'button',
    //         margin: '20px 0 0 1300px',
    //         // x:1300,
    //         // y:30,
    //         text: 'Go back to Login',
    //         handler: 'onLoginClick'
    //
    //     }]
    // }, {
    //     title: 'User orders',
    //     padding: '50px 250px 0px 250px',
    //     items: [{
    //         xtype: 'gridpanel',
    //         frame: true,
    //         title: 'User orders',
    //         store: 'order',
    //         columns: [{
    //             text: 'Order ID',
    //             width: 75,
    //             sortable: true,
    //             dataIndex: 'orderId'
    //         }, {
    //             text: 'Service ID',
    //             flex: 1,
    //             sortable: true,
    //             dataIndex: 'serviceId',
    //         }, {
    //             text: 'Status',
    //             flex: 1,
    //             sortable: true,
    //             dataIndex: 'status',
    //         }, {
    //             text: 'Location',
    //             flex: 1,
    //             sortable: true,
    //             dataIndex: 'location',
    //         }, {
    //             text: 'Rating',
    //             flex: 1,
    //             sortable: true,
    //             dataIndex: 'rating',
    //         }, {
    //             text: 'Description',
    //             flex: 1,
    //             sortable: true,
    //             dataIndex: 'description',
    //         },],
    //
    //     }, {
    //       xtype: 'button',
    //       text: 'Go back to Login',
    //         x:1300,
    //         y:30,
    //       handler: 'onLoginClick'
    //     }]
    // }]
});
