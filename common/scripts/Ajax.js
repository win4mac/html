class Ajax {
  constructor(url) {
    this.url = url;
  }

  get(successHandler) {
    const xhr = new XMLHttpRequest();
    console.log("3");
    xhr.open("GET", this.url);
    xhr.setRequestHeader("myHeader", "Hello world");
    xhr.send();
    xhr.onload = () => {
      console.log("4");
      successHandler(xhr.response);
    };
    console.log("5");
  }

  post(successHandler, data) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", this.url);
    xhr.setRequestHeader("content-type", "application/json");
    const sendData = typeof data === "string" ? data : JSON.stringify(data);
    xhr.send(sendData);

    xhr.onload = () => {
      successHandler(xhr.response);
    };
  }
}

export { Ajax };
