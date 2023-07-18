let person  = {
    firstName: "Roshan",
    lastName: "Neupane",
    age: 30
}

// console.log(person.firstName)
// console.log(person['firstName'])

let meal = {
    appetizer: 'chicken chilly',
    entree: 'briyani',
    dessert: 'ice cream',
    drink: 'coca cola'
}

let bestDessertEver = meal.dessert
// console.log(bestDessertEver)

let {appetizer: appetizer} = meal // same as: let {appetizer} = meal
// console.log(appetizer)

let{entree, dessert} = meal
// console.log(entree, dessert)

// works only after destructing
let bestDessert = dessert
// console.log(bestDesert)

for(key in person){
    //console.log(key)
    //console.log(person[key])
}

let meal2 = {...meal}
// console.log(meal2)

meal.togo = 'chicken nuggies'
// console.log(meal)

meal2.togo = meal.togo
// console.log(meal2)

delete meal2.togo
// console.log(meal2)

class Pet{
    constructor(name, breed, age){
        this.name = name
        this.breed = breed
        this.age = age
    }

    greeting(){
        console.log(`Hi, my name is ${this.name} and I'm a ${this.age} years old ${this.breed}.`)
    }
}

let pet1 = new Pet("Tom", "cartoon cat", 5)
// console.log(pet1.name)

let pet2 = new Pet("Jerry", "cartoon mouse", 5)
// console.log(pet2.breed)

pet1.greeting()
pet2.greeting()

class Dog extends Pet{
    constructor(name, breed, age, barkCount){
        super(name, breed, age)
        this.barkCount = barkCount
        this.isGoodBoy = true;
    }

    speak(){
        this.barkCount += 1
        console.log("SQUIRREL")
    }
}

let dog1 = new Dog("Scooby", "cartoon dog", 5, 0)

dog1.greeting()
dog1.speak()
dog1.speak()
dog1.speak()

console.log(dog1.barkCount)
console.log(dog1.isGoodBoy)