class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }

  getKey() {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected tenants: Person[] = [];

  constructor(protected key: Key) {}

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log('Person entered the house.');
    } else {
      console.log('Door is closed. Cannot enter.');
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(enteredKey: Key): void {
    if (enteredKey.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('Door opened.');
    } else {
      console.log('Invalid key. Door remains closed.');
    }
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

export {};
