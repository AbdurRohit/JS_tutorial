
function arraylist() {
    const arr = [10, 30, 20, 115, 29];
    var add=0;

    var len=arr.length;
    for(var i=0; i < len; i++){
        add += arr[i];
    }
    console.log("Sum =",add);
    alert('Sum is = '+ add)
}

var bttn = document.getElementById("btn");
bttn.addEventListener('click', arraylist);
