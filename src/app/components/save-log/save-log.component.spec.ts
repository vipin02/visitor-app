import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveLogComponent } from './save-log.component';

describe('SaveLogComponent', () => {
  let component: SaveLogComponent;
  let fixture: ComponentFixture<SaveLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
