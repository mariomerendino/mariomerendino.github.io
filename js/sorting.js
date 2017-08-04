var arr = []
var startButton = document.getElementById("startButton")
startButton.onclick = function run(){
    var length = document.getElementById("size").value;
    var term = document.getElementById("output");
    term.innerHTML = "";
    //Fills Array
    fillArray(length);
    
    //output array;
    var listElement = document.createElement("li");
    listElement.innerHTML = arrayAsString(length);
    term.appendChild(listElement);

    
}
function arrayAsString(size){
    var str = arr[0].toString();
    for(var i = 1; i < size; i++){
        str = str + ", " + arr[i].toString(); 
    }
    alert(str)
    return str
}
//Fills Array with Random variables.
function fillArray(size){
    for(var i = 0; i < size; i++){
        arr[i] = Math.floor(Math.random() * 100);
    }
}

//Bubble Sort
function bubbleSort(a,size){
    var temp
    for (var n=0; n <size; n++){
        for (var i=0; i <size; i++){
            if(a[i]> a[i+1]){
                temp=a[i];
                a[i]=a[i+1];
                a[i+1]=temp;
            }
        }
    }
    return a
}
//Insertion Sort
function insertionSort(){
    var key;
    // Start with 1 (The second number in the array.
    for(var j = 1; j < arr.length; j++){
        //set that equal to the key   
        key = arr[j]; 
        // larger values move up in the array
        for(var i = j - 1; i >= 0; i--){
            if(arr[i] > key)
                arr[i+1] = a[i];
        }
        //Put key into its proper location
        arr[i+1] = key;    
    }
     return;
}
//Merge Sort function
//