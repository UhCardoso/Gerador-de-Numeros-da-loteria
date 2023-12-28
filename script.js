function getNumber(max) {
    let list = []
    let num1 = Math.floor((Math.random()*max)+1);
    let num2 = Math.floor((Math.random()*max)+1);
    let num3 = Math.floor((Math.random()*max)+1);
    let num4 = Math.floor((Math.random()*max)+1);
    let num5 = Math.floor((Math.random()*max)+1);
    let num6 = Math.floor((Math.random()*max)+1);

    while(num2 == num1) {
        num2 = Math.floor((Math.random()*max)+1);
    }
    while(num3 == num2 || num3 == num1) {
        num3 = Math.floor((Math.random()*max)+1);
        list.push(num3)
    }
    while(num4==num3 || num4==num2 || num4==num1) {
        num4 = Math.floor((Math.random()*max)+1);
    }
    while(num5==num4 || num5==num3 || num5 == num2 || num5 == num1) {
        num5 = Math.floor((Math.random()*max)+1);
    }
    while(num6==num5 || num6==num4 || num6==num3 || num6==num2 || num6==num1) {
        num6 = Math.floor((Math.random()*max)+1);
    }

    list.push(num1);
    list.push(num2);
    list.push(num3);
    list.push(num4);
    list.push(num5);
    list.push(num6);

    list.sort(function(a, b) {
        return a - b;
    });
    
    num1 = list[0];
    num2 = list[1];
    num3 = list[2];
    num4 = list[3];
    num5 = list[4];
    num6 = list[5];

    let num1ref = document.getElementById("box-item-1")
    num1ref.textContent = num1
    let num2ref = document.getElementById("box-item-2")
    num2ref.textContent = num2
    let num3ref = document.getElementById("box-item-3")
    num3ref.textContent = num3
    let num4ref = document.getElementById("box-item-4")
    num4ref.textContent = num4
    let num5ref = document.getElementById("box-item-5")
    num5ref.textContent = num5
    let num6ref = document.getElementById("box-item-6")
    num6ref.textContent = num6
}