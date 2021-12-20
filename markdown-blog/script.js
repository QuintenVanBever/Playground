import marked from "marked/bin/marked";

// This needs CORS to work
function fillBlog() {
  FileReader.readFile("blog_files/first.md", "utf8", (err, data) => {
    console.log(data);
    const htmlData = marked.parse(data);
    console.log(htmlData); // This needs to get in index.html #blog-article
    document.querySelector("#blog-article").innerHTML = "htmlData";
  });
}

export { fillBlog };
