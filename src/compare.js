import axios from "axios";
import fetch from "isomorphic-fetch";

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
  const axiosPollingFn = () =>
    axios("/hello").then(response => {
      document.body.appendChild(createDiv(response.data));
      axiosPollingFn();
    });
  axiosPollingFn();
}

function callIsomorphicFetch() {
  const fetchPollingFn = () =>
    fetch("/hello")
      .then(response => {
        return response.json();
      })
      .then(data => {
        document.body.appendChild(createDiv(data));
        fetchPollingFn();
      })
      .catch(e => {
        console.log(e);
      });
  fetchPollingFn();
}

document.body.appendChild(
  button("Start server calls with isomorphic-fetch", callIsomorphicFetch)
);
document.body.appendChild(button("Start server calls with axios", callAxios));

document.body.appendChild(lineBreak());
document.body.appendChild(lineBreak());
document.body.appendChild(
  link("Click to navigate away from page", "http://amazon.com")
);
document.body.appendChild(lineBreak());
document.body.appendChild(lineBreak());
