/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('TODO.view.todo.TodoModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.todo',

    stores:{
        todo:{
            fields:['todoDesc','completed'],
            proxy:{
                type:'memory',
                reader:{
                    type:"json"
                }
            },
            data:[
                {
                    todoDesc:"Complete the developlent of Todo App with ExtJS",
                    completed:false
                },{
                   todoDesc:"Checkin the code to github",
                   completed:false 
                },{
                    todoDesc:"share the github repo details with Blake",
                    completed:false
                }
            ],
            filters:[{
                property:'completed',
                value:false
            }],
            filtersOnLoad:true
        }
    }

    //TODO - add data, formulas and/or methods to support your view
});
