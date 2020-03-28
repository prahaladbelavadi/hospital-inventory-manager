import { Component, OnInit } from '@angular/core';
import { Center } from 'src/app/interfaces/center';

const Centers: Center[] = [
  {
    name: "St John's",
    email: 'example.com',
    contactNumber: '494949494',
    address: '322423423bhjnkm ',
    city: 'BLR',
    landmark: 'Garuda',
    pincode: '322394',
    totalVentilators: 1,
    ventilatorsUsage: 2,
    totalPatientCapacity: 2,
    patientCapacityUsage: 2
  },
  {
    name: "St John's",
    email: 'example.com',
    contactNumber: '494949494',
    address: '322423423bhjnkm ',
    city: 'BLR',
    landmark: 'Garuda',
    pincode: '322394',
    totalVentilators: 1,
    ventilatorsUsage: 2,
    totalPatientCapacity: 2,
    patientCapacityUsage: 2
  },
  {
    name: "St John's",
    email: 'example.com',
    contactNumber: '494949494',
    address: '322423423bhjnkm ',
    city: 'BLR',
    landmark: 'Garuda',
    pincode: '322394',
    totalVentilators: 1,
    ventilatorsUsage: 2,
    totalPatientCapacity: 2,
    patientCapacityUsage: 2
  }

];

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  centers: Center[];

  constructor() {}

  ngOnInit(): void {
    this.centers = Centers;
  }
}
