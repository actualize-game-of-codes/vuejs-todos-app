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
      }
    },
    computed: {

    }
  });
});
