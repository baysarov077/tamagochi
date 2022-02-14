const tamagochi = {
    name: 'Tamik',
    food: 1,
    energy: 3,
    mood: 4,

    getStatus(){
        if(this.food < 0 || this.energy < 0 || this.mood < 0) {
            return console.log(`${this.name} умер :(`)
        }
        let foodText = this.food < 3 ? `Я голоден (${this.food})` : `Я не голоден (${this.food})`
        let energyText = this.energy < 3 ? `Я хочу спать (${this.energy})` : `Я не хочу спать (${this.energy})`
        let moodText = this.mood < 3 ? `Мне скучно (${this.mood})` : `Мне весело (${this.mood})`
        console.log(`Имя: ${this.name}, Еда: ${foodText}, Энергия: ${energyText}, Настроение: ${moodText}.`)
},
    setName(name){
        this.name = name
    },
    getEat(){
        if(this.food < 5){
            this.food++
        }
        this.mood--
    },
    goToBed(){
        if(this.energy < 5){
            this.energy++  
        }
        this.food--
    },
    letPlay(){
        if(this.mood < 5){
            this.mood++ 
        }  
        this.energy--
    }
}

tamagochi.getStatus()