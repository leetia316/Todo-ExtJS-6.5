Ext.define('TODO.view.todo.TodoController',{
    extend:'Ext.app.ViewController',
    alias:'controller.todo',
    onTodoListTap:function(grid,location){
        
        if( !Ext.isEmpty(location.item) && 
            Ext.fly(location.event.target).hasCls('fa-close')) {
                this.getView().getStore().remove( location.record);
        }
    },
    onAddTodo:function(){
        var todoDesc = this.lookupReference('tododescfield').getValue();
        this.getView().getStore().add({
            'todoDesc':todoDesc,
            'completed':false
        });
    },
    onToggleComplete:function(btn,pressed){

        
            this.getView().getStore().clearFilter(true);
            this.getView().getStore().filter([{
                property:'completed',
                value:pressed
            }])
        
    }
});