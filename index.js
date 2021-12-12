function printOnScreen(a,c){
    document.getElementById(c).innerHTML = a;
};

printOnScreen("Mostafa","print1");

function paramiterOfCercle(r){
    return 2*3.14*r;
};

var cercle = paramiterOfCercle(5);
printOnScreen("the Number is "+cercle,"print2")