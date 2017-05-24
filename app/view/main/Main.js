/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('TODO.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.MessageBox',

        'TODO.view.todo.TodoList'
    ],
    layout:{
        type:'hbox',
        pack:'center'
    },
    controller: 'main',
    viewModel: 'main',

    items: [
        {
            xtype:'todolist',
            minHeight:200
        }
    ]
});
