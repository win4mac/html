class Ajax {
  constructor(url) {
    this.url = url;
  }

  get(successHandler) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', this.url);
    xhr.setRequestHeader('myHeader', 'Hello world');
    xhr.send();
    xhr.onload = () => {
      successHandler(xhr.response);
    };
  }
}

export { Ajax };
