const app = Vue.createApp({
  data() {
    return {
      myName: "Rodolfo",
      myAge: 31,
      vueImg:
        "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/f2/latest/20150621181400/Eevee.png/200px-Eevee.png",
    };
  },
  methods: {
    outputAge() {
      return this.myAge + 5;
    },
    outputRandomNumber() {
      return Math.random();
    },
    outputPrepopulatedName(){
        return this.myName
    }
  },
});

app.mount("#assignment");
