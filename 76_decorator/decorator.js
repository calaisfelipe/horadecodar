class task {
    constructor(name) {
        this.name = name

       // this.save = function(){}
        //this.complete = function(){}



    }
}

//USANDO DECORATOR:  --> você coloca uma função dentro do prototype e não dentro do constructor. pq no constructor a função vai ocupar espaço como se fosse uma propriedade, poluindo o objeto.

task.prototype.save = function(){
    console.log(this.name)
}
task.prototype.complete = function(){
    console.log(this.name + ' complete')
}

task.prototype.urgent = function(){
    this.urgent = true
}



const Item = new task('felipe')

console.log(Item)
Item.save()
Item.complete()

const urgentTask = new task('urgent')

urgentTask.urgent()

console.log(urgentTask)