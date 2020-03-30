const mongoose = require('mongoose');

var centerSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, required: true },
    contactNumber: { type: String },
    address: { type: String },
    date: { type: Date, default: Date.now },
    city: { type: String },
    landmark: { type: String },
    pincode: { type: String },
    totalVentilators: { type: Number },
    ventilatorsUsage: { type: Number },
    totalPatientCapacity: { type: Number },
    patientCapacityUsage: { type: Number },
    type: { type: String },
    status: { type: String }
  },
  { timestamps: true }
);

var Center = mongoose.model('Center', centerSchema);
module.exports = Center;
