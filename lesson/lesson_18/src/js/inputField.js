export class InputField {
  constructor(root, type, placeholder, label, classNames) {
    this.root = root;
    this.type = type;
    this.placeholder = placeholder;
    this.label = label;
    this.classNames = classNames;
    this.render();
  }

  render() {
    this.element = document.createElement('label');
    this.nameElement = document.createElement('span');
    this.error = document.createElement('span');
    this.error.classList.add('input-field__error');

    this.nameElement.textContent = this.label;
    this.realInput = document.createElement('input');
    this.realInput.classList.add('input-field__input');
    this.realInput.placeholder = this.placeholder;
    this.realInput.type = this.type;

    this.element.classList.add('input-field');
    this.element.classList.add(this.classNames);
    this.element.append(this.nameElement);
    this.element.append(this.realInput);
    this.element.append(this.error);
    this.root.append(this.element);
  }

  value() {
    return this.realInput.value;
  }

  setError(message) {
    this.error.textContent = message;
    this.error.style.color = 'red';
    this.realInput.style.border = '1px solid red';
  }

  clearError() {
    this.error.textContent = '';
    this.error.style.color = '';
    this.realInput.style.border = '1px solid transparent';
  }
}
