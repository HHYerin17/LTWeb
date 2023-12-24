let obj1 = {
    fullName: "Nguyễn Văn A",
    height: 1.7, // m
    weight: 55, // kg
    calcBMI: function() {
        return this.weight / (this.height * this.height);
    }
};

let obj2 = {
    fullname: "Trần Thị B",
    height: 1.65, // m
    weight: 48, // kg
    calcBMI: function() {
        return this.weight / (this.height * this.height);
    }
}


console.log(`BMI obj1: ${obj1.calcBMI()}`);
console.log(`BMI obj2: ${obj2.calcBMI()}`);
if (obj1.calcBMI() > obj2.calcBMI()) console.log(true);
else console.log(false);
