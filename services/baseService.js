const fs = require("fs");
const path = require("path");

class Service {
  constructor(model, dbPath) {
    this.model = model;
    this.dbPath = `${process.cwd()}${path.sep}${dbPath}`;
  }

  findAll() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.dbPath, "utf-8", async (err, data) => {
        if (err) {
          if (err.code === "ENOENT") {
            await this.saveAll([]);
            return resolve([]);
          }
          return reject(err);
        }
        const formattedData = JSON.parse(data).map(this.model.create);
        return resolve(formattedData);
      });
    });
  }

  async saveAll(data) {
    return new Promise((resolve, reject) => {
      fs.writeFile(this.dbPath, JSON.stringify(data), (err) => {
        if (err) {
          return reject(err);
        }
        return resolve(true);
      });
    });
  }

  async add(element) {
    try {
      const data = await this.findAll();
      let lastElementId = 0;
      if (data.length > 0) {
        lastElementId = data[data.length - 1].id;
      }
      element.id = lastElementId + 1;
      data.push(element);
      await this.saveAll(data);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  async find(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await this.findAll();
        const founded = data.find((el) => el.id === id);
        return resolve(founded);
      } catch (err) {
        return reject(err);
      }
    });
  }

  async delete(id) {
    return new Promise(async (resolve, reject) => {
      const data = await this.findAll();
      const foundedIndex = data.findIndex((el) => el.id === id);
      if (foundedIndex === -1) {
        return reject(`Element with id ${id} does not exist.`);
      }
      data.splice(foundedIndex, 1);
      await this.saveAll(data);
      return resolve("Success");
    });
  }
}
module.exports = Service;
