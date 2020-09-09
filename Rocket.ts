import {Astronaut} from './Astronaut';
import {Cargo} from './Cargo';
import {Payload} from './Payload';


export class Rocket implements Payload{
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    massKg: number;
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items: Payload[]): number {
        // returns sum of all items' mass
        let sumMass: number = 0;
        for (let i = 0; i < items.length; i++){
            sumMass += items[i].massKg;
        }return sumMass;
    }
    currentMassKg(): number {
        // uses this.sumMass to return combined mass of this.astronauts and this.cargoItems
        let currentMassKg: number = (this.sumMass(this.cargoItems)) + (this.sumMass(this.astronauts));
        return currentMassKg;
    }
    canAdd(item: Payload): boolean {
        // returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
    }
    addCargo(cargo: Cargo): boolean {
        // uses this.canAdd() to see if another item can be added. TRUE adds cargo to this.cargoItems, returns true.
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true
        }else{
            return false
        }
    }
    addAstronaut(astronaut: Astronaut): boolean {
        // uses this.canAdd() to see if another astronaut can be added. TRUE adds astronaut to this.astronauts, returns true.
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        }else{
            return false;
        }
    }
}

