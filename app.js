/*
 * This call registers your application to be launched when the browser is ready.
 */
Ext.application({
    extend: 'Tf.Application',

    requires: [
        'Tf.main.Main'
    ],

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    mainView: 'Tf.main.Main'
});
