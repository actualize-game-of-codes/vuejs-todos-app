/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      tasks: [
        {text: 'Take out the garbage', completed: false},
        {text: 'Make the bed', completed: false},
        {text: 'Mow the lawn', completed: false}
      ],
      newTaskText: ""
    },
    mounted: function() {

    },
    methods: {
      createTask: function() {
        if (this.newTaskText) {
          var newTask = {text: this.newTaskText, completed: false};
          this.tasks.push(newTask);
          this.newTaskText = "";
        }
      },
      toggleCompleted: function(inputTask) {
        inputTask.completed = !inputTask.completed;
      },
      numberOfIncompleteTasks: function() {
        var count = 0;
        this.tasks.forEach(function(task) {
          if (!task.completed) {
            count += 1;
          }
        });
        return count;
      },
      deleteCompletedTasks: function() {
        this.tasks = this.tasks.filter(function(task) {
          return !task.completed;
        });
      }
    },
    computed: {

    }
  });
});
