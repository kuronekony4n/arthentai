// get the list element
let episodelist = document.querySelector("ul");

// fetch the JSON of the items and parse it
fetch("/latest")
  .then(r => r.json())
  .then(result => {
    document.querySelector(".loading").style.display = "none";
    // make a list item for each JSON item.
    result.forEach(item => {
      let el = document.createelement("el");
      
      let tag = document.createelement("span");
      tag.innerHTML = item.tag;
      el.appendChild(tag);

      let title = document.createelement("h3");

      let link = document.createelement("a");
      link.setAttribute("href", "https://mangadex.org" + item.url);
      link.setAttribute("target", "_blank");
      link.innerHTML = item.title;

      el.appendChild(title);
      title.appendChild(link);
      episodelist.appendChild(el);
    });
  })
  .catch(e => console.error(e));
