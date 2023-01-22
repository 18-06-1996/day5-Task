//1)Do the below programs in anonymous function & IIFE
//a. Print odd numbers in an array

(()=>{
let array=[8,6,9];
    let res=[];
    for(let i=0;i<=array.length-1;i++){
        if(array[i]%2 == 1){
          res.push(array[i]); 
        }
    }
    console.log(res);
})();

//output 
 [9]

//b.Convert all the strings to title caps in a string array

(()=>{
    let str="welcome";
    let spaced="";
    for(let i=0;i<=str.length-1;i++){
    spaced=spaced+ str[i] + " ";
    }
    console.log(spaced.trim());
})();

//output 
 w e l c o m e

//c.Sum of all numbers in an array

(()=>{
    let array=[7,6,5,4,8];
    let sum=0;
    for(let i=0;i<=array.length-1;i++){
        sum=sum+Number(array[i]);
    }
    console.log(sum);
})();

//output 
 30

//d.Return all the prime numbers in an array

(()=>{
let array=[3,4,5,6];
let sorted=[];
array.forEach((num) => {
let count=0;
for(let i=2;i<num;i++){
     if(num%i==0){
            count++;
        }
    }
if(count==0){
   sorted.push(num); 
}
});
console.log(sorted);

})();

//output 
 [3, 5]

//-----------------------------------------------------------

//e.Return all the palindromes in an array

(()=>{
 let array=[14541,131,56767];
// let k=n;
let array1=[];
array.forEach((num) => {
let rem=0;
let res=0;

let k=num;
//console.log(k)
while(num>0){
    rem= num%10;
    num=parseInt(num/10);
    res=res*10+rem;
}
if(res == k){
    array1.push(res);
}
})
console.log(array1);
})()

//output 
[14541, 131]

//-----------------------------------------------------------

//f.Return median of two sorted arrays of the same size.
(()=>{
    let array1=[3,4,5,6,7];
    let array2=[6,7,8,9,6,]
    let sorted1=array1.sort((a,b)=>(a-b));
    let sorted2=array2.sort((a,b)=>(a-b));
    
    let median1=sorted1[Math.ceil(array1.length/2)];
    let median2=sorted2[Math.ceil(array2.length/2)];
    console.log(median1,median2);
})()

//output 
6 8

//-----------------------------------------------------------
//g.Remove duplicates from an array

(()=>{
    let array=[1,3,4,5,4,6,1];
let ans=[];
for(let i=0;i<array.length;i++){
    if(ans.indexOf(array[i]) === -1){
        ans.push(array[i]);
    }
}
console.log(ans);

})();
// output 
[1, 3, 4, 5, 6];






