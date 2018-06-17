Ext.define('Tf.view.order.OrderController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.order',
    id: 'orderContr',

    acceptOrder: function () {
        var fieldOne = this.lookupReference('ordFieldOne').getValue(),
            fieldTwo = this.lookupReference('ordFieldTwo').getValue(),
            fieldThree = Ext.util.Cookies.get("user"),
            fieldFour = 'Active';
            var order = Ext.create('Tf.model.OrderCreate', {
                description: fieldOne,
                location: fieldTwo,
                userId: fieldThree,
                status: fieldFour,
                orderId: null,
                serviceId: null,
                rating: 0
            });
        order.save();
        this.getView().close();
    },

    updateOrder: function () {
        var fieldOne = this.lookupReference('ordFieldOne').getValue(),
            fieldTwo = this.lookupReference('ordFieldTwo').getValue();

        var order = Tf.model.Order.load(Ext.util.Cookies.get('user'), {
            success: function(order) {
                console.log(order.getId());
            }
        });
        var orderId = Tf.model.OrderCreate.load(455, {
            success: function(orderId) {
                console.log(orderId.getId());
            }
        });
        orderId.set('description', fieldOne);
        orderId.set('location', fieldTwo);
        orderId.set('status', 'Active');
        orderId.save({
            success: function() {
                console.log('The Order was updated');
            }
        });
        this.getView().close();
    }


});




