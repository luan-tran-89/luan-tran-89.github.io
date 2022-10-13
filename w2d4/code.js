
String.prototype.filter = function(text) {
  return this.replaceAll(text, '').replaceAll("  ", " ");
};

Array.prototype.bubbleSort = function() {
  const length = this.length;
  for(let i = 0 ; i < length - 1 ; i++) {
    for (let j = 0 ; j < length - i - 1 ; j++) {
      if (this[j] > this[j + 1]) {
         swap(this, j, j + 1);
      }
    }
  }
  return this;
};

function swap(arr, firstIndex, secondIndex) {
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}

var Person = function() {};
Person.prototype.initialize = function(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.describe = function() {
  return this.name + ", " + this.age + " years old.";
}

var Student = function() {};
Student.prototype = new Person();

Student.prototype.learn = function(subject) {
  const result = `${this.name} just learned ${subject}`;
  console.log(result);
  return result;
}

var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");

var Teacher = function() {};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject) {
  return `${this.name} is now teaching ${subject}`;
}

var myTeacher = new Teacher();
myTeacher.initialize("Michael Zijlstra", 45);
myTeacher.teach("MPP");
