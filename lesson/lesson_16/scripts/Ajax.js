const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://my-json-server.typicode.com/ilyalytvynov/ads-box-server/ads"
);

xhr.send();
xhr.onload = function() {
  console.log("LOAD", xhr);
};
