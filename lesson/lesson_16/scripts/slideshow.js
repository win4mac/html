class SlideShow {
  constructor(rootElement) {
    this.rootElement = rootElement;
  }

  init() {
    this.render();
    this.getData();
  }

  render() {
    this.slides = document.createElement("ul");

    this.rootElement.append(this.slides);
  }

  getData() {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/ads"
    );

    xhr.send();

    xhr.onload = () => {
      const data = JSON.parse(xhr.response);
      for (let obj of data) {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = obj.img;
        li.append(img);
        this.slides.append(li);
      }
    };
  }
}

export { SlideShow };
