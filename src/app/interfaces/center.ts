export interface Center {
  name: String;
  email: String;
  contactNumber: String;
  address: String;
  city: String;
  landmark: String;
  pincode: String;
  // Total number of ventilators at location
  totalVentilators: Number;
  // How many ventilators are being used
  ventilatorsUsage: Number;
  // Total number of patients that can be accomodated
  totalPatientCapacity: Number;
  // How many patients are currently here
  patientCapacityUsage: Number;
}
