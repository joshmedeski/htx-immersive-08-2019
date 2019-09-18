// Build website
var dummyText =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi modi, deserunt ullam voluptates sapiente unde molestiae ab amet dolor dolore dolores similique consectetur ducimus alias necessitatibus ut temporibus culpa, beatae sunt exercitationem autem dolorum? Ratione itaque fuga architecto pariatur corporis aperiam nesciunt et quas doloribus, nihil officiis quo numquam nemo earum placeat suscipit, repellendus nisi! Veniam nisi facilis totam eius libero possimus quam laudantium laboriosam perferendis saepe dolorem hic nostrum, ad est cumque voluptates aliquam corporis doloremque nemo, nihil temporibus. Maiores, commodi quas consequatur magni, sunt quisquam ullam dolorum tempora distinctio quia architecto minus, laudantium placeat corrupti numquam odit dolorem?";
buildPage();

function buildPage() {
  var container = document.getElementById("container");
  container.appendChild(buildHeader());
  container.appendChild(buildContent());
}

function buildHeader() {
  var header = document.createElement("header");
  header.appendChild(buildLogo());
  header.appendChild(buildNav());
  return header;
}

function buildLogo() {
  var logo = document.createElement("h1");
  logo.textContent = "HighOnCoding";
  return logo;
}

function buildNav() {
  var unorderedList = document.createElement("ul");

  ["home", "categories", "about"].forEach(item => {
    var li = document.createElement("li");
    var link = document.createElement("a");
    link.setAttribute("href", "#");
    link.textContent = item;
    li.appendChild(link);
    unorderedList.appendChild(li);
  });

  return unorderedList;
}

function buildContent() {
  var content = document.createElement("main");
  content.appendChild(buildCta());
  var post1 = buildPost("Hello Watchkit");
  var post2 = buildPost("Intro to Swift");
  content.appendChild(post1);
  content.appendChild(post2);
  return content;
}

function buildCta() {
  var cta = document.createElement("div");
  cta.setAttribute("class", "cta");
  var heading = document.createElement("h2");
  heading.textContent = "Curse of the current reviews";
  cta.appendChild(heading);
  var desc = document.createElement("p");
  desc.textContent = dummyText;
  cta.appendChild(desc);
  return cta;
}

function buildPost(headline) {
  var post = document.createElement("article");
  var headline = buildPostHeadline(headline);
  post.appendChild(headline);
  var desc = document.createElement("p");
  desc.textContent = dummyText;
  post.appendChild(desc);
  var footer = buildPostFooter();
  post.appendChild(footer);
  return post;
}

function buildPostHeadline(headline) {
  var element = document.createElement("h3");
  var link = document.createElement("a");
  link.setAttribute("href", "#");
  link.setAttribute("class", "post-headline");
  link.textContent = headline;
  element.appendChild(link);
  return element;
}

function buildPostFooter() {
  var footer = document.createElement("footer");
  footer.setAttribute("class", "post-footer");

  var comments = document.createElement("div");
  comments.textContent = `${getRandomNumber()} comments`;
  footer.appendChild(comments);

  var likes = document.createElement("div");
  likes.textContent = `${getRandomNumber()} likes`;
  footer.appendChild(likes);
  return footer;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}
