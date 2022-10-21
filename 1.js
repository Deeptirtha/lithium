let a="hello world"
let obj=a.split("").sort()
let obj1={}
for(i=1;i<obj.length;i++){
if(obj1[obj[i]]==undefined){
    obj1[obj[i]]=1
}else{ obj1[obj[i]]++}
}
console.log(obj1)



// let str = "I am not gonna live forever, but I wanna live while I am alive",
//     split = str.split(" "),
//     obj = {};

// for (let i = 0; i < split.length; i++) {
//   if (obj[split[i]] === undefined) {
//     obj[split[i]] = 1;
//   } else {
//     obj[split[i]]++;
//   }
// }
//console.log(obj)