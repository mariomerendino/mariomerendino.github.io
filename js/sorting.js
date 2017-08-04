var arr = []

function main(){
    
}

//Fills Array with Random variables.
function fillArray(size){
    for(var i = 0; i < size; i++){
        arr[i] = Math.random();
    }
}

//Bubble Sort
function bubbleSort(){
    var temp
    for (var n=0; n <arr.length; n++){
        for (var i=0; i <arr.legnth; i++){
            if(a[i]> a[i+1]){
                temp=a[i];
                arr[i]=a[i+1];
                arr[i+1]=temp;
            }
        }
    }
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