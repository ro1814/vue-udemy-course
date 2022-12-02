function getRamdonValue(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
} 
const App = Vue.createApp({
    data(){
        return {
            playerHealth: 100,
            monsterHealth : 100
        }
    },
    methods: {
        attackMonster(){
            const attackValue = getRamdonValue(12 , 5)
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer(){
            const attackValue = getRamdonValue(15, 8)
            this.playerHealth -= attackValue;
        }
    }
});

App.mount('#game')