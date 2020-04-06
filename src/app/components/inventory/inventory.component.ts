import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
    patientCapacityUsage: 2,
    status: 'All good'
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
    patientCapacityUsage: 2,
    status: 'All good'
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
    patientCapacityUsage: 2,
    status: 'All good'
  }
];

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  centers: Center[];
  selectedCenter: Center;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    this.centers = Centers;
  }


  openLg(content, center) {
    this.modalService.open(content, { size: 'lg' });
    this.selectedCenter = center;
  }

}
