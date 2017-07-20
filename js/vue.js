new Vue({
  el: '#app',
  data: {
  	//Array of animals
     
    title: 'Looping through a list of cars with key and value pairs',
    //Array of cars with object with keys and values
    cars: [
    {name: 'BMW', age: 5, color: 'black'},
    {name: 'Merc', age: 'unknown', color: 'metallic'}
    ], 

    name: 'Looping through the BIG FIVE animals in Africa and including indexes',

     animals: ['Lion', 'Elephant', 'Leopard', 'Rhinocerous', 'Buffalo'],

     numbers: 'Iterating through a list of numbers',
  }
});