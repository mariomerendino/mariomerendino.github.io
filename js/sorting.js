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
    listElement.innerHTML = "Original Array: "+ arrayAsString(arr, length);
    term.appendChild(listElement);
    console.log(arr)

    //output performance of Bubbble Sort
    var t0 = performance.now();
    var bubbleSorted = bubbleSort(copyArray(length), length);
    var t1 = performance.now();
    var bubbleSortLine = document.createElement("li");
    bubbleSortLine.innerHTML = "BubbleSort took " + (t1 - t0) + " milliseconds.";
    term.appendChild(bubbleSortLine);

    //output performance of Insertion sort
    t0 = performance.now();
    var insertionSorted = insertionSort(copyArray(length), length);
    t1 = performance.now();
    var insertionSortLine = document.createElement("li");
    insertionSortLine.innerHTML = "Insertion Sort took " + (t1 - t0) + " milliseconds.";
    term.appendChild(insertionSortLine);

    //output performance of Merge Sort
    t0 = performance.now();
    var mergeSorted = mergeSort(copyArray(length), length);
    console.log(mergeSorted)
    t1 = performance.now();
    var mergeSortLine = document.createElement("li");
    mergeSortLine.innerHTML = "Merge Sort took " + (t1 - t0) + " milliseconds.";
    term.appendChild(mergeSortLine);

}
function copyArray(size){
    var a = [];
    for(var i = 0; i < size; i++){
        a[i] = arr[i]
    }
    return a;
}
function arrayAsString(a, size){
    var str = a[0].toString();
    for(var i = 1; i < size; i++){
        str = str + ", " + a[i].toString(); 
    }
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
function insertionSort(a, size){
    var key;
    // Start with 1 (The second number in the array.
    for(var j = 0; j < size; j++){
        //set that equal to the key   
        key = a[j]; 
        // larger values move up in the array
        for(var i = j - 1; i >= 0; i--){
            if(a[i] > key)
                a[i+1] = a[i];
        }
        //Put key into its proper location
        a[i+1] = key;    
    }
    console.log(a)
    return a;
}
//Merge Sort function
function mergeSort(a,length)
{
    if (length < 2)
        return a;
 
    var middle = parseInt(length / 2);
    var left   = a.slice(0, middle);
    var right  = a.slice(middle, length);
 
    return merge(mergeSort(left), mergeSort(right));
}
 
function merge(left, right)
{
    var result = [];
 
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
 
    while (left.length)
        result.push(left.shift());
 
    while (right.length)
        result.push(right.shift());
 
    return result;
}