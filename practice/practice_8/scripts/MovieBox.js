import { Ajax } from "../../../common/scripts/Ajax.js";

class MovieBox {
  constructor(rootElement) {
    this.rootElement = rootElement;
  }
  init() {
    this.render();
    this.getData();
  }
  render() {
    this.ul = document.createElement("ul");
    this.ul.classList.add("movie-box__slides");
    this.rootElement.classList.add("movie-box");
    this.rootElement.append(this.ul);
  }
  getData() {
    const request = new Ajax(
      "https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/movies"
    );
    const responseHandler = responseData => {
      const data = JSON.parse(responseData);
      data.list.forEach(slideData => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        li.classList.add("slide_active");
        img.src = slideData.preview.high;
        li.classList.add("movie-box__slide");
        li.append(img);
        img.classList.add("movie-box__frame");
        this.ul.append(li);
      });
    };
    request.get(responseHandler);
  }
}
export { MovieBox };
