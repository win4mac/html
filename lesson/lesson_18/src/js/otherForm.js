import { InputField } from './inputField.js';
export class OtherForm {
  constructor(root) {
    this.root = root;
    this.isValid = true;
    this.render();
  }

  render() {
    this.form = document.createElement('form');

    this.email = new InputField(this.form, 'text', 'Hello', 'World:');
    this.root.append(this.form);
  }
}
