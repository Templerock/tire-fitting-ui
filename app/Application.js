Ext.define('Tf.Application', {
    extend: 'Ext.app.Application',

    mainView: 'Tf.view.main.Main',

    name: 'TireFittingUI',

    stores: [
        'Tf.store.Test'
    ],

    launch: function () {
        var myCookie = Ext.util.Cookies.get('myCookie'); //TODO change to actual cookie after REST integration
       if (myCookie) {
            this.redirectTo(myCookie);
       }
       else {
           this.redirectTo('login');
       }
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});