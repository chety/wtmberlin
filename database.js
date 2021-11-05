const fs = require("fs");
// const fsPromise = require("fs/promises");
const saveSync = (fileName, data) => {
  fs.writeFileSync(fileName, JSON.stringify(data));
  console.log("File saved successfully");
};
const loadSync = (fileName) => {
  const buffer = fs.readFileSync(fileName, { encoding: "utf-8", flag: "r" });
  return JSON.parse(buffer);
};

// const saveAsyncPromise = async (fileName, data) => {
//   try {
//     await fsPromise.writeFile(fileName, JSON.stringify(data));
//     return Promise.resolve("File saved successfully with Promise");
//   } catch (err) {
//     return Promise.reject(err);
//   }
// };

// const loadAsyncPromise = async (fileName) => {
//   try {
//     const buff = await fsPromise.readFile(fileName, "utf-8");
//     return JSON.parse(buff);
//   } catch (err) {
//     console.error("Error occured while reading from file. Details ->", err);
//   }
// };

const saveAsyncCallback = (fileName, data, callback) => {
  fs.writeFile(fileName, JSON.stringify(data), (err) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null);
  });
};

const loadAsyncCallback = (fileName, callback) => {
  fs.readFile(fileName, "utf-8", (err, data) => {
    if (err) {
      callback(err);
      return;
    }
    callback(null, JSON.parse(data));
  });
};

module.exports = {
  saveSync,
  loadSync,
  // saveAsyncPromise,
  // loadAsyncPromise,
  loadAsyncCallback,
  saveAsyncCallback,
};
