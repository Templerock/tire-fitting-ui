Ext.define('Tf.view.main.MainController', {
    extend : 'Ext.app.ViewController',
    alias : 'controller.main',
    listen : {
        controller : {
            '#' : {

                unmatchedroute : 'onRouteChange'
            }
        }
    },
    routes: {
        ':node' : 'onRouteChange'
    },

    requires : [

    ],

    onRouteChange : function(node) {
        node = (node||'').toLowerCase();
        this.setCurrentView(node);
    },

    setCurrentView : function(node){
        var mainWindow = Ext.getCmp('main');
          mainWindow.removeAll();
        try {
            mainWindow.add(Ext.create({xtype: node}));
            this.loadStore('test');
        }
        catch (err) {
            Ext.Msg.alert('Error!', 'wrong route');
        }
    },

    onRegistration : function () {

        var userRadio = Ext.getCmp('radioUserButton'),
            serviceRadio = this.lookupReference('serviceRadio'),
            url = userRadio.checked ? "user" : "service";
        Ext.util.Cookies.set('MyCookie', url); //TODO delete after REST integration
        this.redirectTo(url);
    },

    onLogin : function () {
        //get login: user or service?
        Ext.util.Cookies.set('myCookie', 'user'); //TODO delete after REST integration
       this.redirectTo('user');
    },

    onRegisterClick : function () {
        this.redirectTo('registration');
    },

    onLoginClick: function () {
        this.redirectTo('login');
    },

    onUserClick: function () {
        this.redirectTo('user');
    },

    onServiceClick: function () {
        this.redirectTo('service');
    },

    loadStore: function (store) {
      var  task = {
            run: function() {
                    Ext.getStore(store).load();
            },
            interval: 1000
        };
      debugger;
        Ext.TaskManager.start(task);

    }
});