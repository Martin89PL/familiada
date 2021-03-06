export default class Team {
    constructor(name) {
        this.name = name;
        this.points = 0;
        this.errors = 0;
    }

    addPoints(points) {
        this.points += points;
    }

    addError() {
        this.errors += 1;
    }

    resetErrors() {
        this.errors = 0;
    }

    getName() {
        return this.name;
    }

    getErrors() {
        return this.errors;
    }

    getPoints() {
        return this.points;
    }
}