class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}
    
class Apartment {
    residents = [];
    
    addResident(resident) {
        this.residents.push(resident);
    }
} 
    
class House {
    constructor(maxApartments){
        this.apartments = [];
        this.maxApartments = maxApartments;
    }
    
    addApartment (apartment) {
        if(this.apartments.length >= this.maxApartments) {
            console.log('The maximum number of apartments has already been exceeded.')
        } else {
            this.apartments.push(apartment);
        }
    }
}
    
const person1 = new Person('Alinka', 'female');
const person2 = new Person('Mike', 'male');
const person3 = new Person('Rada', 'female');
    
const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();
    
apartment1.addResident(person1);
apartment2.addResident(person2);
apartment3.addResident(person3);
    
const house1 = new House(3);
    
house1.addApartment(apartment1);
house1.addApartment(apartment2);
house1.addApartment(apartment3);
    
console.log(house1);