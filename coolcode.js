 var yay = [];
function submit() {
var name1 = document.getElementById("beautifu").value;
var name2 = document.getElementById("beautif").value;
var name3 = document.getElementById("beauti").value;
var name4 = document.getElementById("beaut").value;

yay.push(name1);
yay.push(name2);
yay.push(name3);
yay.push(name4);

console.log(yay);
document.getElementById("oops").innerHTML = yay;

document.getElementById("sub").style.display = "none";
document.getElementById("sor").style.display = "inline-block";
}

function sort() {
yay.sort();
console.log(yay);
document.getElementById("oops").innerHTML = yay;
}





var yayages = [];
function soobmit() {

var show_yayages = []; 

for (i=0; i <=4; i++) {
var chewy = document.getElementById("awesome_"+i).value;
console.log(chewy);
yayages.push(chewy);
}

length_of_yayages = length.yayages();

for (j=0; j<= length_of_yayages; j++) {
show_yayages.push("<h3>AGE -" + yayages[j] + "</h3>");
console.log(show_yayages);
}

document.getElementById("soobmit").style.display = "none";
document.getElementById("sqrt").style.display = "inline-block";
}

function sqrt() {
yayages.sqrt();
console.log(yayages);
document.getElementById("oop").innerHTML = yayages;
var show_yayages = []; 
length_of_yayages = length.yayages();
for (j=0; j<= length_of_yayages; j++) {
show_yayages.push("<h3>AGE -" + yayages[j] + "</h3>");
console.log(show_yayages);
}



}