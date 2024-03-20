const a= [1,2,3,4,5,6,7,8,9,10]
;
// const b= [1,2,3,4,5,6,7,8,9,10];
console.log(a); // Output: false
console.log(a[4])

// for adding the new elemsnts in arrary use push
a.push(11); 
a.push("hello world")
console.log(a)

// nested array are created inside the array
const b=["hello " ,a,10]
 console.log(b)

 const c=[[1,2,3,4,5,6,7,8,9,10],[11,12,13,14,15],[,16,17,18,19,20]]
 console.log(a[0][3],a[1][2].a[2][1])