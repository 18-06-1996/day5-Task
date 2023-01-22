//question no - 3 Do the below programs in arrow functions.

//a.Print odd numbers in an array

let isOddNum = (array)=>{
    let res=[];
    for(let i=0;i<=array.length-1;i++){
        if(array[i]%2 == 1){
          res.push(array[i]); 
        }
    }return res;
    }
    console.log(isOddNum([7,5,8]));

//output 
 [7, 5]
//--------------------------------------------
//b.Convert all the strings to title caps in a string array

let isAddSpace = (string) =>{
    let array =[];
    for(let i=0;i<=string.length-1;i++){
 array=array+string[i] + " ";
    }
    return array;
}
console.log(isAddSpace("karthick").trim());

//output 
 k a r t h i c k
//-----------------------------------------------------
//c.Sum of all numbers in an array

let sumOfAdd = (array) =>{
    let sum =0;
    for(let i=0;i<=array.length-1;i++){
        sum=sum+parseInt(array[i]);
    }
    return sum;
}
console.log(sumOfAdd([5,6,7,8,3,1]));

// output 
30
//-----------------------------------------------

// d.Return all the prime numbers in an array

// let array = [3,5,4,8,6,13,15];

let isPrime = (array) => {
    let sortarray=[];
   array.forEach((num) => {
   let  count=0;
    for(let i=2;i<num;i++ ){
        if(num%i == 0){
            count++;
        }
    }if(count == 0){
        sortarray.push(num);
    }
   });
   return sortarray;
};
console.log(isPrime([3,5,4,8,6,13,15]));

// output 
 [3, 5, 13]
//------------------------------------------------------
// e.Return all the palindromes in an array

let isPolyndrome=(array) => {
 //let array=[131,453,4567654]
   let array1 = [];
   array.forEach((num) => {
    let k=num;
    let rem=0;
    let res=0;
    while(num>0){
        rem=num%10;
        num=parseInt(num/10);
        res=res*10+rem;
    }
    if(res  == k){
        array1.push(res);
    }
   });
   return array1;
};
 console.log(isPolyndrome([131,453,4567654]));

 //output 
 [131, 4567654]

 //-----------------------------------------------------
 











