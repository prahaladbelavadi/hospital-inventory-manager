import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DataService {
  baseURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

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
    return this.http.post(`${this.baseURL}/login`, { email, password });
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

  // Create User : Center
  addCenter() {
    return this.http.post(`${this.baseURL}/centers/`, {});
  }

  // Create User : Volunteer
  addVolunteer() {
    return this.http.post(`${this.baseURL}/volunteer/`, {});
  }
}
