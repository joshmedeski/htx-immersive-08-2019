var container = document.getElementById("container");
console.log(container);

var header = document.createElement("header");
var logo = document.createElement("h1");
logo.innerHTML = "HighOnCode";

function buildNav() {
  var navigation = document.createElement("nav");
  var navUl = document.createElement("ul");

  ["home", "categories", "about"].forEach(item => {
    var li = document.createElement("li");
    var link = document.createElement("a");
    link.setAttribute("href", "#");
    link.textContent = item;
    li.appendChild(link);
    navUl.appendChild(li);
  });

  navigation.appendChild(navUl);
  header.appendChild(logo);
  return navigation;
}

var navigation = buildNav();
header.appendChild(navigation);

container.appendChild(header);
header.appendChild(navigation);
