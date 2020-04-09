import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.baseURL = '';
    }
    // Frontend Operations
    storeLoggedStatus(state, user, auth) {
        if (state === 'Login') {
            localStorage.setItem('credentials', JSON.stringify(user));
            localStorage.setItem('auth', auth);
        }
        if (state === 'Logout') {
            localStorage.removeItem('credentials');
            localStorage.removeItem('auth');
        }
    }
    fetchLoggedStatus() {
        const user = localStorage.getItem('credentials');
        return JSON.parse(user);
    }
    // Backend Operations
    login(email, password) {
        return this.http.post(this.baseURL, { email, password });
    }
    fetchAllCenterInfo() {
        return this.http.get(`${this.baseURL}/centers/`);
    }
    fetchCenterInfo(centerId) {
        return this.http.get(`${this.baseURL}/centers/${centerId}`, {});
    }
    updateCenterInfo(centerId) {
        return this.http.put(`${this.baseURL}/centers/${centerId}`, {});
    }
    addCenter() {
        return this.http.post(`${this.baseURL}/centers/`, {});
    }
    addVolunteer() {
        return this.http.post(`${this.baseURL}/volunteer/`, {});
    }
};
DataService = __decorate([
    Injectable({ providedIn: 'root' })
], DataService);
export { DataService };
//# sourceMappingURL=data.service.js.map