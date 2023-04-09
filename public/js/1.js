  ///////////////////////
  
  AFRAME.registerComponent("over-listener", {
    schema: {
      mouseover: { type: "boolean", default: false },
    },
    init: function () {  
      var el = this.el; // reference to the entity that contains this component
      var data = this.data; // reference to the properties of this component.
      // Listen for mouseenter event
  
      this.el.addEventListener("mouseenter", function (evt) {
        // You can't change the property directly. You must use setAttribute.
        el.setAttribute("over-listener", "mouseover", true); // this.el fail, due to scope of the function. Must use this reference.
        // Change the color of the button to indicate rollover state is on.
      });
      // Listen for mouseleave event
      this.el.addEventListener("mouseleave", function (evt) {
        el.setAttribute("over-listener", "mouseover", false);
      });
    },
    tick: function () {
      // called every frame
      if (this.data.mouseover) {
        // Check the mouseover state
        let elOcta = this.el;
        let rot = elOcta.getAttribute("rotation");
        elOcta.setAttribute("rotation", { x: rot.x, y: rot.y + 5, z: rot.z });
      }
    },
  });

  function getUrlParams() {
    var match;
    var pl = /\+/g; // Regex for replacing addition symbol with a space
    var search = /([^&=]+)=?([^&]*)/g;
    var decode = function (s) {
      return decodeURIComponent(s.replace(pl, " "));
    };
    var query = window.location.search.substring(1);
    var urlParams = {};

    match = search.exec(query);
    while (match) {
      urlParams[decode(match[1])] = decode(match[2]);
      match = search.exec(query);
    }
    return urlParams;
  }


  const my_models= async()=>{
  var prod= getUrlParams(); 
  const result = await fetch(`http://127.0.0.1:5000/api/v1.0/recommendations/${prod.product}`, {
            method: 'GET',
        });

   const data = await result.json();
   console.log(data);
   var player = document.getElementById("my_player");
  //  console.log(this.el);
   setInterval(doit,1000,player);
    function doit(me){
       console.log(me.object3D.rotation.x,me.object3D.rotation.y,me.object3D.rotation.z);
    
    // while(1){
    console.log("hello");
    var my_link ="./products/Images/"+data.data[0][4];
    var my_link1 ="./products/Images/"+data.data[1][4];
    var my_link2 =data.data.length>2?"./products/Images/"+data.data[2][4]:"";
    var my_link3 =data.data.length>3?"./products/Images/"+data.data[3][4]:"";
    var my_link4 =data.data.length>4?"./products/Images/"+data.data[4][4]:"";

    if( me.object3D.position.x>70&&me.object3D.position.z<-81){
     console.log("done");
     console.log(data);
    //three js code of all the products in our mall

console.log("hi");
var my_scene = document.querySelector("a-scene");
console.log(my_scene);
var sceneEl = document.createElement("a-entity");
sceneEl.setAttribute("position", "74 0 -130");
sceneEl.setAttribute("rotation", "0 30 0");
sceneEl.setAttribute("id", "goto");
sceneEl.setAttribute("class", "my_ele");
AFRAME.registerComponent("do-something-once-loaded", {
  init: function () {
    // This will be called after the entity has properly attached and loaded.
    const playBtn = document.querySelector("#goto");
    playBtn.addEventListener("click", (e) => {
      window.open(
        `/checkout.html?itemname=${data.data[0][3]}&itemrating=3.9&price=${data.data[0][6]}&product=./products/Images/${data.data[0][4]}&description=${data.data[0][5]}&scale=3.7 3.7 3.7&qr=./qr_code/1p.png`,
        "_blank"
      );
    });
  },
});

//model
var entityEl = document.createElement("a-entity");
entityEl.setAttribute("gltf-model", my_link);
entityEl.setAttribute("position", "0 1.6 0");
entityEl.setAttribute("scale", "4 4 4");
// //
entityEl.setAttribute("over-listener", "");
sceneEl.appendChild(entityEl);
//price tag
var model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "0.1 9.5 0");
model.setAttribute("troika-text", "value", `Rs ${data.data[0][6]}`);
model.setAttribute("troika-text", "color", "black");
model.setAttribute("scale", "2.5 2.5 2.5");
sceneEl.appendChild(model);

model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "-0.2 8.97 0");
model.setAttribute("troika-text", "value", "3.9");
model.setAttribute("troika-text", "color", "black");
model.setAttribute("scale", "2.5 2.5 2.5");
sceneEl.appendChild(model);

//cylender stand
model = document.createElement("a-cylinder");
model.setAttribute("height", "0.7");
model.setAttribute("material", "color:#939393;opacity: 0.8;");
model.setAttribute("position", "0 1 0");
model.setAttribute("radius", "1.3");
model.setAttribute("side", "double");
model.setAttribute("theta-start", "50");
sceneEl.appendChild(model);
// star icon
model = document.createElement("a-entity");
model.setAttribute("geometry", "primitive: plane; width: 0.50; height: 0.42;");
model.setAttribute("position", "0.4 9 0");
model.setAttribute(
  "material",
  "src:./resources/star-regular.svg;transparent: true;metalness:0.6; roughness: 0.4;"
);
model.setAttribute("color", "white");
sceneEl.appendChild(model);
// for up heiht change second ...for left keep 1 in - for right +
//info stand
model = document.createElement("a-entity");
model.setAttribute(
  "geometry",
  "primitive: box; width: 2.5; height: 1.9;depth: 0.1"
);
model.setAttribute("rotation", "-14 0 0");
model.setAttribute("position", "-3.3 5.1 0.3");
model.setAttribute(
  "material",
  "color:#939393; transparent: true;metalness:0.1; roughness: 0.2;opacity: 0.35"
);
sceneEl.appendChild(model);
//model text
var model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "-3.2 5.7 0.35");
model.setAttribute(
  "troika-text",
  "value",
  "Ready Player Me\nMen's Stylish Jackket"
);
model.setAttribute("scale", "1.1 1.1 1.1");
model.setAttribute("color", "white");
sceneEl.appendChild(model);
sceneEl.setAttribute("do-something-once-loaded", "");
my_scene.appendChild(sceneEl);
//
//
//
//
//
//
var sceneEl = document.createElement("a-entity");
sceneEl.setAttribute("position", "83 0 -137");
// sceneEl.setAttribute("position", "110 0 0");
sceneEl.setAttribute("rotation", "0 35 0");
sceneEl.setAttribute("id", "goto1");
sceneEl.setAttribute("class", "my_ele");
AFRAME.registerComponent("do-something-once-loaded-1", {
  init: function () {
    // This will be called after the entity has properly attached and loaded.
    const playBtn = document.querySelector("#goto1");
    playBtn.addEventListener("click", (e) => {
      window.open(
        `/checkout.html?itemname=${data.data[1][3]}&itemrating=3.9&price=${data.data[1][6]}&product=./products/Images/${data.data[1][4]}&description=${data.data[1][5]}&scale=3.7 3.7 3.7&qr=./qr_code/2p.png`,
        "_blank"
      );
    });
  },
});

//model
var entityEl = document.createElement("a-entity");
entityEl.setAttribute("gltf-model", my_link1);
entityEl.setAttribute("position", "0 1.6 0");
entityEl.setAttribute("scale", "4 4 4");
//
entityEl.setAttribute("over-listener", "");
sceneEl.appendChild(entityEl);
//price tag
var model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "0.1 9.5 0");
model.setAttribute("troika-text", "value", `Rs ${data.data[1][6]}`);
model.setAttribute("troika-text", "color", "black");
model.setAttribute("scale", "2.5 2.5 2.5");
sceneEl.appendChild(model);

model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "-0.2 8.97 0");
model.setAttribute("troika-text", "value", "4.2");
model.setAttribute("troika-text", "color", "black");
model.setAttribute("scale", "2.5 2.5 2.5");
sceneEl.appendChild(model);

//cylender stand
model = document.createElement("a-cylinder");
model.setAttribute("height", "0.7");
model.setAttribute("material", "color:#939393;opacity: 0.8;");
model.setAttribute("position", "0 1 0");
model.setAttribute("radius", "1.3");
model.setAttribute("side", "double");
model.setAttribute("theta-start", "50");
sceneEl.appendChild(model);
// star icon
model = document.createElement("a-entity");
model.setAttribute("geometry", "primitive: plane; width: 0.50; height: 0.42;");
model.setAttribute("position", "0.4 9 0");
model.setAttribute(
  "material",
  "src:./resources/star-regular.svg;transparent: true;metalness:0.6; roughness: 0.4;"
);
model.setAttribute("color", "white");
sceneEl.appendChild(model);
// for up heiht change second ...for left keep 1 in - for right +
//info stand
model = document.createElement("a-entity");
model.setAttribute(
  "geometry",
  "primitive: box; width: 2.5; height: 1.9;depth: 0.1"
);
model.setAttribute("rotation", "-14 0 0");
model.setAttribute("position", "-3.3 5.1 0.3");
model.setAttribute(
  "material",
  "color:#939393; transparent: true;metalness:0.1; roughness: 0.2;opacity: 0.35"
);
sceneEl.appendChild(model);
//model text
var model = document.createElement("a-text");
// /
model.setAttribute("side", "double");
model.setAttribute("position", "-3.2 5.8 0.34");
model.setAttribute("troika-text", "value", "Mens Casual Wear");
model.setAttribute("scale", "1.1 1.1 1.1");
model.setAttribute("color", "white");
sceneEl.appendChild(model);
sceneEl.setAttribute("do-something-once-loaded-1", "");
my_scene.appendChild(sceneEl);
//
//
//
//

var sceneEl = document.createElement("a-entity");
sceneEl.setAttribute("position", "95 0 -147");
// sceneEl.setAttribute("position", "115 0 0");
sceneEl.setAttribute("rotation", "0 30 0");
sceneEl.setAttribute("id", "goto2");
sceneEl.setAttribute("class", "my_ele");
AFRAME.registerComponent("do-something-once-loaded-2", {
  init: function () {
    // This will be called after the entity has properly attached and loaded.
    const playBtn = document.querySelector("#goto2");
    playBtn.addEventListener("click", (e) => {
      window.open(
        `/checkout.html?itemname=${data.data[2][3]}&itemrating=3.9&price=${data.data[2][6]}&product=./products/Images/${data.data[2][4]}&description=${data.data[2][5]}&scale=3.7 3.7 3.7&qr=./qr_code/3p.png `,
        "_blank"
      );
    });
  },
});

//model
var entityEl = document.createElement("a-entity");
entityEl.setAttribute("gltf-model", my_link2);
entityEl.setAttribute("position", "0 1.6 0");
entityEl.setAttribute("scale", "4 4 4");
//
entityEl.setAttribute("over-listener", "");
sceneEl.appendChild(entityEl);
//price tag
var model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "0.1 9.5 0");
model.setAttribute("troika-text", "value", `Rs ${data.data[2][6]}`);
model.setAttribute("troika-text", "color", "black");
model.setAttribute("scale", "2.5 2.5 2.5");
sceneEl.appendChild(model);

model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "-0.2 8.97 0");
model.setAttribute("troika-text", "value", "4.3");
model.setAttribute("troika-text", "color", "black");
model.setAttribute("scale", "2.5 2.5 2.5");
sceneEl.appendChild(model);

//cylender stand
model = document.createElement("a-cylinder");
model.setAttribute("height", "0.7");
model.setAttribute("material", "color:#939393;opacity: 0.8;");
model.setAttribute("position", "0 1 0");
model.setAttribute("radius", "1.3");
model.setAttribute("side", "double");
model.setAttribute("theta-start", "50");
sceneEl.appendChild(model);
// star icon
model = document.createElement("a-entity");
model.setAttribute("geometry", "primitive: plane; width: 0.50; height: 0.42;");
model.setAttribute("position", "0.4 9 0");
model.setAttribute(
  "material",
  "src:./resources/star-regular.svg;transparent: true;metalness:0.6; roughness: 0.4;"
);
model.setAttribute("color", "white");
sceneEl.appendChild(model);
// for up heiht change second ...for left keep 1 in - for right +
//info stand
model = document.createElement("a-entity");
model.setAttribute(
  "geometry",
  "primitive: box; width: 2.5; height: 1.9;depth: 0.1"
);
model.setAttribute("rotation", "-14 0 0");
model.setAttribute("position", "-3.3 5.1 0.3");
model.setAttribute(
  "material",
  "color:#939393; transparent: true;metalness:0.1; roughness: 0.2;opacity: 0.35"
);
sceneEl.appendChild(model);
//model text
var model = document.createElement("a-text");
// /
model.setAttribute("side", "double");
model.setAttribute("position", "-3.2 5.8 0.34");
model.setAttribute("troika-text", "value", "Mens Stylish Party Coat");
model.setAttribute("scale", "1.1 1.1 1.1");
model.setAttribute("color", "white");
sceneEl.appendChild(model);
sceneEl.setAttribute("do-something-once-loaded-2", "");
my_scene.appendChild(sceneEl);
//
//
//
//

var sceneEl = document.createElement("a-entity");
sceneEl.setAttribute("position", "76 0 -148");
// sceneEl.setAttribute("position", "119 0 0");
sceneEl.setAttribute("rotation", "0 30 0");
sceneEl.setAttribute("id", "goto3");
sceneEl.setAttribute("class", "my_ele");
AFRAME.registerComponent("do-something-once-loaded-3", {
  init: function () {
    // This will be called after the entity has properly attached and loaded.
    const playBtn = document.querySelector("#goto3");
    playBtn.addEventListener("click", (e) => {
      window.open(
        `/checkout.html?itemname=${data.data[3][3]}&itemrating=3.9&price=${data.data[3][6]}&product=./products/Images/${data.data[3][4]}&description=${data.data[3][5]}&scale=3.7 3.7 3.7&qr=./qr_code/4p.png`,
        "_blank"
      );
    });
  },
});

//model
var entityEl = document.createElement("a-entity");
entityEl.setAttribute("gltf-model", my_link3);
entityEl.setAttribute("position", "0 1.6 0");
entityEl.setAttribute("scale", "4 4 4");
//
entityEl.setAttribute("over-listener", "");
sceneEl.appendChild(entityEl);
//price tag
var model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "0.1 9.5 0");
model.setAttribute("troika-text", "value", `Rs ${data.data[3][6]}`);
model.setAttribute("troika-text", "color", "black");
model.setAttribute("scale", "2.5 2.5 2.5");
sceneEl.appendChild(model);

model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "-0.2 8.97 0");
model.setAttribute("troika-text", "value", "4.0");
model.setAttribute("troika-text", "color", "black");
model.setAttribute("scale", "2.5 2.5 2.5");
sceneEl.appendChild(model);

//cylender stand
model = document.createElement("a-cylinder");
model.setAttribute("height", "0.7");
model.setAttribute("material", "color:#939393;opacity: 0.8;");
model.setAttribute("position", "0 1 0");
model.setAttribute("radius", "1.3");
model.setAttribute("side", "double");
model.setAttribute("theta-start", "50");
sceneEl.appendChild(model);
// star icon
model = document.createElement("a-entity");
model.setAttribute("geometry", "primitive: plane; width: 0.50; height: 0.42;");
model.setAttribute("position", "0.4 9 0");
model.setAttribute(
  "material",
  "src:./resources/star-regular.svg;transparent: true;metalness:0.6; roughness: 0.4;"
);
model.setAttribute("color", "white");
sceneEl.appendChild(model);
// for up heiht change second ...for left keep 1 in - for right +
//info stand
model = document.createElement("a-entity");
model.setAttribute(
  "geometry",
  "primitive: box; width: 2.5; height: 1.9;depth: 0.1"
);
model.setAttribute("rotation", "-14 0 0");
model.setAttribute("position", "-3.3 5.1 0.3");
model.setAttribute(
  "material",
  "color:#939393; transparent: true;metalness:0.1; roughness: 0.2;opacity: 0.35"
);
sceneEl.appendChild(model);
//model text
var model = document.createElement("a-text");
// /
model.setAttribute("side", "double");
model.setAttribute("position", "-3.2 5.7 0.34");
model.setAttribute("troika-text", "value", "Men's Lime Green\nOffice Shirt");
model.setAttribute("scale", "1.1 1.1 1.1");
model.setAttribute("color", "white");
sceneEl.appendChild(model);
sceneEl.setAttribute("do-something-once-loaded-3", "");
my_scene.appendChild(sceneEl);
//
//
//
//
//
var sceneEl = document.createElement("a-entity");
// sceneEl.setAttribute("position", "65 0 -135");
sceneEl.setAttribute("position", "90 0 -156");
sceneEl.setAttribute("rotation", "0 30 0");
sceneEl.setAttribute("id", "goto4");
sceneEl.setAttribute("class", "my_ele");
AFRAME.registerComponent("do-something-once-loaded-4", {
  init: function () {
    // This will be called after the entity has properly attached and loaded.
    const playBtn = document.querySelector("#goto4");
    playBtn.addEventListener("click", (e) => {
      window.open(
        `/checkout.html?itemname=${data.data[4][3]}&itemrating=3.9&price=${data.data[4][6]}&product=./products/Images/${data.data[4][4]}&description=${data.data[4][5]}&scale=3.7 3.7 3.7&qr=./qr_code/5p.png`,
        "_blank"
      );
    });
  },
});

//model
var entityEl = document.createElement("a-entity");
entityEl.setAttribute("gltf-model", my_link4);
entityEl.setAttribute("position", "0 1.6 0");
entityEl.setAttribute("scale", "3.5 3.5 3.5");
//
entityEl.setAttribute("over-listener", "");
sceneEl.appendChild(entityEl);
//price tag
var model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "0.1 9.5 0");
model.setAttribute("troika-text", "value", `Rs ${data.data[4][6]}`);
model.setAttribute("troika-text", "color", "black");
model.setAttribute("scale", "2.5 2.5 2.5");
sceneEl.appendChild(model);

model = document.createElement("a-entity");
model.setAttribute("side", "double");
model.setAttribute("position", "-0.2 8.97 0");
model.setAttribute("troika-text", "value", "4.5");
model.setAttribute("troika-text", "color", "black");
model.setAttribute("scale", "2.5 2.5 2.5");
sceneEl.appendChild(model);

//cylender stand
model = document.createElement("a-cylinder");
model.setAttribute("height", "0.7");
model.setAttribute("material", "color:#939393;opacity: 0.8;");
model.setAttribute("position", "0 1 0");
model.setAttribute("radius", "1.3");
model.setAttribute("side", "double");
model.setAttribute("theta-start", "50");
sceneEl.appendChild(model);
// star icon
model = document.createElement("a-entity");
model.setAttribute("geometry", "primitive: plane; width: 0.50; height: 0.42;");
model.setAttribute("position", "0.4 9 0");
model.setAttribute(
  "material",
  "src:./resources/star-regular.svg;transparent: true;metalness:0.6; roughness: 0.4;"
);
model.setAttribute("color", "white");
sceneEl.appendChild(model);
// for up heiht change second ...for left keep 1 in - for right +
//info stand
model = document.createElement("a-entity");
model.setAttribute(
  "geometry",
  "primitive: box; width: 2.5; height: 1.9;depth: 0.1"
);
model.setAttribute("rotation", "-14 0 0");
model.setAttribute("position", "-3.3 5.1 0.3");
model.setAttribute(
  "material",
  "color:#939393; transparent: true;metalness:0.1; roughness: 0.2;opacity: 0.35"
);
sceneEl.appendChild(model);
//model text
var model = document.createElement("a-text");
// /
model.setAttribute("side", "double");
model.setAttribute("position", "-3.2 5.7 0.34");
model.setAttribute("troika-text", "value", "Women Stylish Looking\nDress");
model.setAttribute("scale", "1.1 1.1 1.1");
model.setAttribute("color", "white");
sceneEl.appendChild(model);
sceneEl.setAttribute("do-something-once-loaded-4", "");
my_scene.appendChild(sceneEl);

var sceneEl = document.createElement("a-entity");
// sceneEl.setAttribute("position", "15 0 -180");
sceneEl.setAttribute("position", "52 0 -192");
sceneEl.setAttribute("rotation", "0 -30 0");
// sceneEl.setAttribute("rotation", "0 -47 0");
sceneEl.setAttribute("id", "goto11");
AFRAME.registerComponent("do-something-once-loaded-11", {
  init: function () {
    // This will be called after the entity has properly attached and loaded.
    const playBtn = document.querySelector("#goto11");
    playBtn.addEventListener("click", (e) => {
      window.open(
        `/checkout.html?itemname=Sekar Lifestyle Polyurethane \nFabric Sofa Set&itemrating=4.2&price=26,999&product=./products/sofa/scene.gltf&scale=0.035 0.016 0.016&description=Product Material: Original solid Sheesham Wood.
        Product Dimension: Length (71 inch), Width (29 inch), Height (32 inch) Meatrial: Sheesham Wood, Seating Capacity: 3 Seat
        Color: (Honey Finish)Cushion: Beige color, Style: Contemporary&qr=./qr_code/p11.png`,
        "_blank"
      );
    });
  },
}); //Sekar Lifestyle Polyurethane \nFabric Sofa Set\n\nRs 26,999\nRated-4.2/5

//model
var entityEl = document.createElement("a-entity");
entityEl.setAttribute("gltf-model", "./products/sofa/scene.gltf");
entityEl.setAttribute("position", "0 2.1 0");
entityEl.setAttribute("scale", "0.1 0.06 0.06");
// entityEl.setAttribute("scale", "1.4 1 1");
sceneEl.appendChild(entityEl);
//cylender stand
model = document.createElement("a-cylinder");
model.setAttribute("height", "0.7");
model.setAttribute("material", "color:#939393;opacity: 0.8;");
model.setAttribute("position", "-6 1 -9");
model.setAttribute("radius", "18.5");
model.setAttribute("side", "double");
model.setAttribute("theta-start", "50");
sceneEl.appendChild(model);
// for up heiht change second ...for left keep 1 in - for right +
//info stand
model = document.createElement("a-entity");
model.setAttribute(
  "geometry",
  "primitive: box; width: 4; height: 3.2;depth: 0.1"
);
model.setAttribute("rotation", "-14 70 0");
model.setAttribute("position", "8 5.1 2");
model.setAttribute(
  "material",
  "color:#939393; transparent: true;metalness:0.1; roughness: 0.2;opacity: 0.35"
);
sceneEl.appendChild(model);
//model text
var model = document.createElement("a-entity");
// /
model.setAttribute("side", "double");
model.setAttribute("position", "8.1 5.9 2.05");
model.setAttribute("rotation", "0 70 0");
model.setAttribute(
  "troika-text",
  "value",
  "\nSekar Lifestyle Polyurethane \nFabric Sofa Set\n\nRs 26,999\nRated-4.2/5"
);
model.setAttribute("scale", "1.3 1.3 1.3");
model.setAttribute("troika-text", "color", "black");
sceneEl.appendChild(model);
sceneEl.setAttribute("do-something-once-loaded-11", "");
my_scene.appendChild(sceneEl);

}
  
  }
  }
my_models();
let names = [
    "Stripe Shirt",
    "Blue Shirt",
    "Shirt Vest",
    "Dress",
    "Black Dress",
    "Silk Dress",
    "Party Dress",
    "Hoodie",
    "Pants",
    "Pants2",
    "mens_caro_flannel",
  ];

  var dict = {
    "Stripe Shirt":1,
    "Blue Shirt":2,
    "Shirt Vest":3,
    "Dress":4,
    "Black Dress":5,
    "Silk Dress":6,
    "Party Dress":7,
    "Hoodie":8,
    "Pants":9,
    "Pants2":10,
    "mens_caro_flannel":11,


  }
  //Sort names in ascending order
  let sortedNames = names.sort();
  
  //reference
  let input = document.getElementById("input");
  function displayNames(value) {
    input.value = value;
    var param=getUrlParams();
    // alert(dict[value]);
    window.location.replace(`http://localhost:8080/scene.html?username=${param.username}&avatar=${param.avatar}&product=${dict[value]}`);

    my_models();
    removeElements();
  }
  function removeElements() {
    //clear all the item
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
      item.remove();
    });
  }
  //Execute function on keyup
  input.addEventListener("keyup", (e) => {
    //loop through above array
    //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
    removeElements();
    for (let i of sortedNames) {
      //convert input to lowercase and compare with each string
  
      if (
        i.toLowerCase().startsWith(input.value.toLowerCase()) &&
        input.value != ""
      ) {
        //create li element
        let listItem = document.createElement("li");
        //One common class name
        listItem.classList.add("list-items");
        listItem.style.cursor = "pointer";
        listItem.setAttribute("onclick", `displayNames('${i}')`);
        //Display matched part in bold
        let word = "<b>" + i.substr(0, input.value.length) + "</b>";
        word += i.substr(input.value.length);
        //display the value in array
        listItem.innerHTML = word;
        document.querySelector(".list").appendChild(listItem);
      }
    }
  });
  