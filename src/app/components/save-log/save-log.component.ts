import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-save-log',
  templateUrl: './save-log.component.html',
  styleUrls: ['./save-log.component.css']
})
export class SaveLogComponent implements OnInit {
  form: FormGroup;
  currentDate: String = '';
  constructor(private _fb: FormBuilder, private _data: DataService) { }

  ngOnInit(): void {
    const date = new Date();
    this.currentDate = date.toUTCString().split('').slice(0,12).join('').trim();
    this.form = this._fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required]),
      person: new FormControl('', []),
      visitType: new FormControl('', [Validators.required]),
      date: new FormControl(this.currentDate,[]),
      entryTime: new FormControl('', [Validators.required]),
      exitTime: new FormControl('', [Validators.required])
    });
  }
  onSubmit(value: any) {
    this._data.saveVisitor(value);
    this.ngOnInit();
  }
}
