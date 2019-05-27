function User (name, age) {
    this.name = name;
    var _age = age;
    this.displayInfo = function(){
        document.write("Імя: " + this.name + "; вік: " + _age + "<br>");
    };
    this.getAge = function() {
        return _age;
    }
    this.setAge = function(age) {
        if(typeof age === "number" && age >0 && age<110){
            _age = age;
        } else {
            console.log("Неправельне значення");
        
    }
}
 
var tom = new User("Том", 26);
console.log(tom._age);
console.log(tom.getAge()); 
tom.setAge(32);
console.log(tom.getAge()); 
tom.setAge("54");