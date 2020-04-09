import { __decorate } from "tslib";
import { Component } from '@angular/core';
const Centers = [
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
let InventoryComponent = class InventoryComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() {
        this.centers = Centers;
    }
    openLg(content, center) {
        this.modalService.open(content, { size: 'lg' });
        this.selectedCenter = center;
    }
};
InventoryComponent = __decorate([
    Component({
        selector: 'app-inventory',
        templateUrl: './inventory.component.html',
        styleUrls: ['./inventory.component.scss']
    })
], InventoryComponent);
export { InventoryComponent };
//# sourceMappingURL=inventory.component.js.map