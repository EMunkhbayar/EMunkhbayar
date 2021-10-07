String.prototype.filter = function(banned) {
    const words = banned.toLowerCase().split(" ");
    return this.split(" ").filter(e => !words.includes(e.toLowerCase())).join(" ");
};

Array.prototype.bubbleSort = function() {
    const arr = this;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < (arr.length - i -1); j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
};

let Person = function() {};
Person.prototype.initialize = function(name, age){
    this.name = name;
    this.age = age;
}
Person.prototype.describe = function(){
    return this.name + ", " + this.age + " years old.";
}

let Teacher = function() {};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject){
    return this.name + " is now teaching " + subject;
}