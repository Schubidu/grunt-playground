/// <reference path="IAnimal.ts"/>


class Animal implements IAnimal{
    move():string {
        return this.name + 'Moving...';
    }

    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

