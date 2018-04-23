function Person(fullName, color) {
    this.name = fullName;
    this.favColor = color;
    this.greet = function () {
        console.log("Hi, My name is " + this.name +"and my favirout color is "+ this.favColor);
    };
}

john = new Person("Rami Ashqar ", "blue");

john.greet();