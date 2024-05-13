let obj = {
    name : "Vishal",
    age : 23,
    getName : () => {
        console.log(this.name);
    },
    getAge : function(){
        console.log(this.age);
    }
}
obj.getName();
obj.getAge();