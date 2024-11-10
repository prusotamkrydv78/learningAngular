import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtocartbuttonComponent } from './addtocartbutton.component';

describe('AddtocartbuttonComponent', () => {
  let component: AddtocartbuttonComponent;
  let fixture: ComponentFixture<AddtocartbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtocartbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtocartbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
