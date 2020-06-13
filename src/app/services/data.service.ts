import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getAllVisitors() {
    return JSON.parse(localStorage.getItem('visitors'));
  }
  saveVisitor(visitor: any) {
    const visitors = this.getAllVisitors();
    if (visitors !== null) {
      visitors.push(visitor);
      localStorage.setItem('visitors', JSON.stringify(visitors));
    } else {
      localStorage.setItem('visitors', JSON.stringify([visitor]));
    }
  }
}
