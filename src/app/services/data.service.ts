import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DataService {
  baseURL = '';

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
    return this.http.post(this.baseURL, { email, password });
  }

  fetchAllCenterInfo() {
    return this.http.get(`${this.baseURL}/center/`);
  }

  fetchCenterInfo(centerId) {
    return this.http.get(`${this.baseURL}/center/${centerId}`, {});
  }

  updateCenterInfo(centerId) {
    return this.http.put(`${this.baseURL}/center/${centerId}`, {});
  }

  addCenter() {
    return this.http.post(`${this.baseURL}/center/`, {});
  }

  addVolunteer() {
    return this.http.post(`${this.baseURL}/center/`, {});
  }
}
