
function Atheia() {
    document.write("Hello there son");

    
    body.style.box = 'images/Phoney.jpg';
}


function Market(name, food) {
    document.write("Hello there " + "Bone!");
}


window.onload = function() {
    var pos = 0; 
   //our box element
   var box = document.getElementById('bone');
   var t = setInterval(move, 100);
 
   function move() {
       if(pos >= 350) {
           clearInterval(t);
       }
       else if(pos > 360) {
           clearInterval(t);
       }
       else {
        pos += 10;
        box.style.left = pos+'px';
       }
   }
};