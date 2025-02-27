// TODO: Define a City class with name and id properties

// import { json } from "stream/consumers";
import fs from 'fs/promises';
import { error } from "console";

// TODO: Complete the HistoryService class
class HistoryService {
  private filePath:string; 
  constructor(filePath: string) {
    this.filePath = filePath;
  }
  // TODO: Define a read method that reads from the searchHistory.json file
  private async read() {
    try {
      const fileContent = await fs.readFile(this.filePath, 'utf-8');
      return JSON.parse(fileContent)
    } catch (error) {
      console.error('Error')
      throw error; 
    }
  };
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  private async write(cities: []) {
    try {
      const updatedCities = JSON.stringify(cities);
      await fs.writeFile(this.filePath, updatedCities, 'utf-8');
      console.log('Cities history has been updated');
    } catch {
        console.error('Error', error)
        throw error;
    }
  }; 
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  async getCities() {
    try {
      const cities = await this.read();
      return cities;
    } catch (error) {
      console.error ('Error', error);
      throw error;
    }
  };
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  async addCity(city: string) {
    try {
      const data = await this.read();
      data.push(city);
      await this.write(data); 
    } catch (error) {
      console.error('Error', error)
      throw error;
    }
  };
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  // async removeCity(id: string) {}
}

export default new HistoryService('path/to/searchHistory.json');
