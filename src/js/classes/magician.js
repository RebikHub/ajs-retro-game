import Character from '../Character';

export default class Magician extends Character {
  constructor(level) {
    super(level);
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
  }
}
