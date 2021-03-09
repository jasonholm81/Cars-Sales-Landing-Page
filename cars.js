// dialog box is pinned to top when clicking on images

// created constructor function
function Car(make, model, colour, image, registration, price) {
    this.make = make;
    this.model = model;
    this.colour = colour;
    this.imageSrc = image;
    this.registration = registration;
    this.price = price;
  }
  
  // created the car objects
  let ford_raptor = new Car(
    "Ford",
    "Raptor",
    "Royal Blue",
    "./images/ford_raptor.png",
    "YHA 108",
    "R250 000"
  );
  
  let ford_wildtrak = new Car(
    "Ford",
    "Wildtrak",
    "Charcoal",
    "./images/ford_wildtrak.png",
    "TVA 106",
    "R230 000"
  );
  
  let ford_thunder = new Car(
    "Ford",
    "Thunder",
    "Black",
    "./images/ford_thunder.png",
    "CA 222-234",
    "R340 000"
  );
  
  let ford_bronco = new Car(
    "Ford",
    "Bronco",
    "Aqua",
    "./images/ford_bronco.png",
    "ZTT 297 GP",
    "R430 000"
  );
  
  let ford_kuga = new Car(
    "Ford",
    "Kuga",
    "Red",
    "./images/ford_kuga.png",
    "NP 128-128",
    "R220 000"
  );
  
  // cars array
  let arrayOfCars = [ford_raptor, ford_wildtrak, ford_thunder, ford_bronco, ford_kuga];
  
  // function to display objects when cars.html is loaded
  var loaded = {};
  
  loaded.addCars = function() {
    arrayOfCars.forEach(function(car) {
      let div = document.getElementById("cars");
      //created image element
      let imgProfile = document.createElement("img");
      imgProfile.src = car.imageSrc;
      imgProfile.alt = car.make + " " + car.model;
      imgProfile.style.height = "300px";
      imgProfile.style.width = "500px";
      imgProfile.style.padding = "20px";
  
      // display car make and model
      let carMake = document.createElement("p");
      carMake.innerHTML = car.make + " " + car.model;
      carMake.style.color = "navy";
      carMake.style.fontSize = "35px";
  
      // created car dialog for each car only once in the main loop
      let carDialog = document.createElement("dialog");
      let y = document.createTextNode(car.make + "," + car.model + "," + car.colour + "," + car.registration + "," + car.price);
      carDialog.appendChild(y);
      
      
      // attached dialog to car objects
      car.dialog = carDialog;
      
      // open attribute set for showMore function
      car.showMore = function() {
        arrayOfCars.forEach(function(curr) {
          curr.dialog.removeAttribute("open");
        })
        car.dialog.setAttribute("open", "open");
      };
      
      // added eventListener to imgProfile to show dialog when image is clicked
      imgProfile.addEventListener("click", function(e) {
        car.showMore();
      });

      // appended children to div to display content in html file when loaded
      div.appendChild(imgProfile);
      div.appendChild(carMake);
      div.appendChild(carDialog);   
      
    });
  };
  
  loaded.addCars();