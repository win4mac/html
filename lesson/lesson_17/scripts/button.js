export class Button {
  constructor(root, label, classNames, onClick) {
    this.root = root;
    this.label = label;
    this.onClick = onClick;
    this.classNames = classNames;
    this.render();
  }

  render() {
    this.element = document.createElement('button');
    if (this.onClick !== undefined) {
      this.element.addEventListener('click', () => {
        this.onClick();
      });
    }

    this.element.textContent = this.label;
    this.element.classList.add('btn');
    this.element.classList.add(this.classNames);
    this.root.append(this.element);
  }
}
