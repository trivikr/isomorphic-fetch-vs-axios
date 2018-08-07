import axios from "axios";

function button(text, onClick) {
  let element = document.createElement("button");
  element.innerHTML = text;
  element.onclick = onClick;
  return element;
}

function link(text, url) {
  let element = document.createElement("a");
  element.innerHTML = text;
  element.href = url;
  return element;
}

function lineBreak() {
  return document.createElement("br");
}

function createDiv(text) {
  let element = document.createElement("div");
  element.innerHTML = text;
  return element;
}

function callAxios() {
  axios("http://localhost:3000", {
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  }).then(response => {
    document.body.appendChild(createDiv(response.data));
  });
}

document.body.appendChild(button("Start server calls with isomorphic-fetch"));
document.body.appendChild(button("Start server calls with axios", callAxios));

document.body.appendChild(lineBreak());
document.body.appendChild(lineBreak());
document.body.appendChild(
  link("Click to navigate away from page", "http://amazon.com")
);
document.body.appendChild(lineBreak());
document.body.appendChild(lineBreak());
