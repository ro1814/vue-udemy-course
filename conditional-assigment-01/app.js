const app = Vue.createApp({
    data() {
      return {
        enteredTask: '', 
        tasks: [],
        taskListVisible: true
      };
    },
    computed: {
        buttonCaption() {
            return this.taskListVisible ? 'Hide List' : 'Show List';
        }
    },
    methods: {
      addTask() {
        this.tasks.push(this.enteredTask);
      },
      hideShowTask() {
        this.taskListVisible = !this.taskListVisible
      }
    }
  });
  
  app.mount('#assignment');
  