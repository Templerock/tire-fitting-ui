Ext.define('Tf.view.main.Main', {
  extend: 'Ext.window.Window',
  autoShow: true,
  closable: false,
  controller: 'main',
  id: 'main',
  xtype: 'main',
  requires: [
    'Ext.Button'
  ],

  items: [{

    title: 'Home page',
    html: '<h1 class="main-banner">Welcome to the Tire Fitting service</h1>',
  }]
});