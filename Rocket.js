"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        // returns sum of all items' mass
        var sumMass = 0;
        for (var i = 0; i < items.length; i++) {
            sumMass += items[i].massKg;
        }
        return sumMass;
    };
    Rocket.prototype.currentMassKg = function () {
        // uses this.sumMass to return combined mass of this.astronauts and this.cargoItems
        var currentMassKg = (this.sumMass(this.cargoItems)) + (this.sumMass(this.astronauts));
        return currentMassKg;
    };
    Rocket.prototype.canAdd = function (item) {
        // returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (cargo) {
        // uses this.canAdd() to see if another item can be added. TRUE adds cargo to this.cargoItems, returns true.
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        // uses this.canAdd() to see if another astronaut can be added. TRUE adds astronaut to this.astronauts, returns true.
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
