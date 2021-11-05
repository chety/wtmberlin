const asyncTask = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve("Done") : reject("Error");
    }, 1000);
  });
};

const handleAsyncTask = async() => {
    try {
        const result = await asyncTask();
        console.log("In Try block. Value ->",result)
    } catch (err) {
        console.error("In catch clause. Err -> ",err)
    }
};

console.log("Before Async");
handleAsyncTask();
console.log("After Async");
