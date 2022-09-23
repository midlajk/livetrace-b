let usere = {};
let vehicles = [];
let serverDate = {};
let maptype = 'standard';
let useriid = '';

export default {

  setUser(user) {
    usere = user;
  },
  getUser() {
    return usere;
  },
  setVehicle(vehicle) {
    vehicles = vehicle;
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
  setMaptype(type) {
    maptype = type
  },
  getmaptype() {
    return maptype;
  },
  setuseriid(id) {
    useriid = id
  },
  getuseriid() {
    return useriid;
  },
};
