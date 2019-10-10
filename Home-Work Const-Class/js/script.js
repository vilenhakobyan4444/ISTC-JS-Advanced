
                            // *****WITH FUNCTION CONSTRUCOR*****


// function makeGiutar(type,name,price,colour){
//     this.type = type;
//     this.name = name;
//     this.price = price;
//     this.colour = colour;
// }
// function classic(type,name,price,colour){makeGiutar.call(this,type,name,price,colour)}
// function acoustic(type,name,price,colour){makeGiutar.call(this,type,name,price,colour)}
// function electric(type,name,price,colour){makeGiutar.call(this,type,name,price,colour)}
// makeGiutar.call(makeGiutar.full)
// var classic = new classic("classic","Ortega","450$","natural");
// var acoustic = new acoustic("acoustic","Fender","118$","natural");
// var electric = new electric("electric","Gibson","600$","Sunburst");


                            // *****WITH CLASS*****



class makeGiutar {
    constructor(type,name,price,colour) {
      this.type = type;
      this.name = name;
      this.price = price;
      this.colour = colour;
    }
  }
  
var classic = new makeGiutar("classic","Ortega","450$","natural");
var acoustic = new makeGiutar("acoustic","Fender","118$","natural");
var electric = new makeGiutar("electric","Gibson","600$","Sunburst");

var count1 = 0;
var count2 = 0;
var count3 = 0;

function classicGit(){
    count1++;
    var arKey = Object.keys(classic);
    var arVal = Object.values(classic);
 
    if(count1 % 2 == 1){
        after1.className = "after";
        ul1 =  document.createElement('ul');
        document.getElementById("contantC").appendChild(ul1);
        for (let i = 0; i < arKey.length; i++) {
            var li = document.createElement("li");
            li.innerHTML = arKey[i]+ " - " + arVal[i];
            ul1.appendChild(li);  
        }
    }
    else{ ul1.remove();after1.className = " "}

}

function acousticGit(){
    count2++;
    var arKey = Object.keys(acoustic);
    var arVal = Object.values(acoustic);
 
    if(count2 % 2 == 1){ 
        after2.className = "after";
        ul2 =  document.createElement('ul');
        document.getElementById("contantA").appendChild(ul2);
        for (let i = 0; i < arKey.length; i++) {
            var li = document.createElement("li");
            li.innerHTML = arKey[i]+ " - " + arVal[i];
            ul2.appendChild(li);  
        }
    }
    else{ ul2.remove();after2.className = " "}


}
function electroGit(){
    count3++;
    var arKey = Object.keys(electric);
    var arVal = Object.values(electric);
    if(count3 % 2 == 1){
        after3.className = "after";
        ul3 =  document.createElement('ul');
        document.getElementById("contantE").appendChild(ul3);
        for (let i = 0; i < arKey.length; i++) {
            var li = document.createElement("li");
            li.innerHTML = arKey[i]+ " - " + arVal[i];
            ul3.appendChild(li);  
        } 
    }
    else{ ul3.remove();after3.className = " "}
}














