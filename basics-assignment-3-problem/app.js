const app = Vue.createApp({
    data() {
      return {
        number: 0,
        messageA: "Not there yet!",
        messabeB: "Too much!"
      };
    },
    watch: {
        result() {
            console.log("Watcher executing...");
            const that = this;
            setTimeout(function() {
                that.number = 0;
            }, 5000)
        }
    },
    computed: {
        result() {
        if (this.number < 37) {
          return this.messageA;
        } else if ( this.number === 37 ){
            return this.number;
        } else {
            return this.messabeB
        }
      }
    },
    methods: {
      addNumber(num) {
        this.number = this.number + num;
      },
    },
  });
  
  app.mount("#assignment");
  