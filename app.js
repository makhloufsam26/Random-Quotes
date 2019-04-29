const color = [
   "#EA2027",
   "#1B1464",
   "#006266",
   "#D980FA",
   "#F79F1F",
   "#ED4C67",
   "#1B1464",
   "#6F1E51",
   "#0652DD",
   "#4bcffa",
   "#05c46b",
   "#485460",
   "#f53b57",
   "#0fbcf9"
];

const random = l => {
   return Math.floor(Math.random() * l);
};

let x = 0;

document.getElementById("new-quote").addEventListener("click", change);
document.getElementById("output").addEventListener("load", fet());

function change() {
   fet();
   x++;
   if (x > color.length - 1) x = 0;
}

function fet() {
   fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
   )
      .then(res => res.json())
      .then(data => {
         document.getElementById("output").innerHTML = data.quotes[random(data.quotes.length - 1)].quote;
         document.getElementById("author").innerHTML = `- ${data.quotes[random(data.quotes.length - 1)].author}`;
         document.body.style.background = color[x];
         document.body.style.color = color[x];
         document.getElementById("new-quote").style.background = color[x];
      })
      .catch(err => console.log(err));
}
