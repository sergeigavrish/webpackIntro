export default class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    const div = document.createElement('div');
    div.className = 'card';
    const h2 = document.createElement('h2');
    h2.textContent = `Hi, my name is ${this.name}`;
    div.appendChild(h2);
    return div;
  }
}