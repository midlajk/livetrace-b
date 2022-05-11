let usere = {};
let vehicles = [];
let serverDate = {};

export default {

  setUser(user) {
    usere = user;
  },
  getUser() {
    return usere;
  },
  setVehicle(vehicle) {
    vehicles = vehicle;
    console.log(vehicles.length)
  },
  getVehicle(vehicle) {
    return vehicles;
  },
  getServerDate() {
    return serverDate;
  },
  setServerDate(date) {
    serverDate = date
  },
};