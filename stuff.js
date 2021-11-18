const shoe1 = {name:"Alpha", Price:"$100,000"};

const shoe2 = {name:"Sigma", Price:"$45,000"};

const shoe3 = {name:"Beta", Price:"$4,999"}

const t = [shoe1,shoe2,shoe3];

const i = ["shoe1.jpg","shoe2.jpg", "shoe3.jpg"];

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


function addingtoCart(objButton) {
  if(document.getElementById("mt")) {
    document.getElementById("mt").remove();
  }
  var b = parseInt(objButton.value);
  b = b-1;
  var c = t[b]
  var nme = c.name;
  var price = c.Price;
  var img = document.createElement("img");
  img.src = i[b];
  img.style.width = "50px";
  img.style.height = "50px";
  var x = document.getElementById("oc");
  var y = document.createElement("li");
  y.appendChild(img);
  y.appendChild(document.createTextNode(nme+" "+price));
  x.appendChild(y);
}