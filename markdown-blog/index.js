const express = require("express");
const path = require("path");

const marked = require("marked/bin/marked");

const app = express();

app.use(express.static(__dirname + "public")); //Serves resources from public folder

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(5000);
console.log("port 5000");

function fillBlog() {
  FileReader.readFile("blog_files/first.md", "utf8", (err, data) => {
    console.log(data);
    const htmlData = marked.parse(data);
    console.log(htmlData); // This needs to get in index.html #blog-article
    document.querySelector("#blog-article").innerHTML = "htmlData";
  });
}

export { fillBlog };
