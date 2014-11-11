
console.log("Running Index.js");


// constructor
function Person(name, occupation){
    this.name = name;
    this.occupation = occupation;
}

Person.prototype.intro = function() {
  var greeting = "Hello I am %s and I'm a %s";
  console.log(greeting, this.name, this.occupation);
};

var john = new Person("john doe", "teaching");

john.intro();
module.exports = Person;