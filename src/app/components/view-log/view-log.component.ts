import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-view-log',
  templateUrl: './view-log.component.html',
  styleUrls: ['./view-log.component.css']
})
export class ViewLogComponent implements OnInit {
  novisit: boolean = true;
  visitors: any;
  constructor(private _data: DataService) { }

  ngOnInit(): void {
    this.visitors = this._data.getAllVisitors();
    if (this.visitors !== null) {
      this.visitors = this.visitors.reverse();
      this.novisit = false;
    }
  }

}
