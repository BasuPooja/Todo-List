<template>
    <div class="container-div">
    
    <h1>ToDoList</h1>
    <div style="display: inline-flex;">
      <input @keyup.enter="AddTask" class="inputbox" type="text"  placeholder = "Enter task" v-model="newTask">
      <button class="add" style="background-color: #4CAF50;" @click="AddTask"><i class="fa fa-plus"></i>Add</button>
    </div>

    <ul>
        <tasklist
        v-for="(task, index) in tasks"
        :key="index"
        :tasks="task"
        @edit = "editTask(index)"
        @remove = "removeTask(index)"
        />
    </ul>

    <div class="table-container">
      <div class="table-header">
        <div class="table-cell">Checklist</div>
        <div class="table-cell">Tasks</div>
        <div class="table-cell">Action</div>
        <div class="table-cell">Action</div>
      </div>
      
    </div>

    <div style="display: inline-flex;">
      <button @click="ClearItem" class="clear" >Clear all</button>
      <button @click="ClearcompleteItem" class="allclear">Clear completed</button>
    </div>
    
    
    </div>
</template>

<script>

import tasklist from "./tasklist.vue";

export default{
    components:{tasklist,},
    name:"App",
    data(){
        return{
            newTask: "",
            tasks: [],
        };
    },

    methods:{
        AddTask(){
            if(this.newTask.trim()=="")
                return;
            this.tasks.push(this.newTask);
            this.newTask = "";

        },
        removeTask(index){
            this.tasks.splice(index,1);
        },
    },

};
</script>

<style>
.container-div{
    border: 2px solid black; 
    width: 500px; 
    height: auto;
    margin: auto ;
    padding: 50px;
}
.inputbox{
    margin-left: 10px; 
    height: 25px; 
    width: 300px;
    margin: 10px;
   
}
.add{
  height: 30px;
  width: 100px;
  font-size: medium;
  font-weight: bold;
  margin: auto;
  display: inline-flex;
  
}
.clear{
  height: 40px;
  width: 100px;
  font-size: medium;
  font-weight: bold;
  margin: auto;
  display: inline-flex;
  background-color: red; 
  margin: 10px 10px 10px 10px;
  
}
.allclear{
  height: 40px;
  width: 150px;
  font-size: medium;
  font-weight: bold;
  margin: auto;
  display: inline-flex;
  background-color: red; 
  margin: 10px 10px 10px 10px; 
  background-color: orange
  
}

.table-container{
  border:1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
}

.table-header{
  display: flex;
  background-color: #f0f0f0;
  padding: 10px;
}
.table-cell{
  flex: 1;
  padding: 10px;
  font-size: 18px;
}
</style>