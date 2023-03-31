let p1 = new Promise((resolve,reject)=>{
    console.log("Promise is Pending ......");
    setTimeout(() =>{
        console.log("The Promise is Resolved--->");
        resolve(true);
    },5000);
});

let p2 = new Promise((resolve,reject)=>{
    console.log("Promise is Pending ......");
    setTimeout(() =>{
        console.log("The Promise is Rejected xxxxx");
        reject(new Error("Promise Rejected Error"))
    },5000);
});

p1.then((value) => {
    console.log(value);
});

p2.catch((error)=>{
    alert("Promise Rejected Error Occured");
});