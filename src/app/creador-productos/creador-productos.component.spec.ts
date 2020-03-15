import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreadorProductosComponent} from './creador-productos.component';

describe('CreadorProductosComponent', () => {
  let component: CreadorProductosComponent;
  let fixture: ComponentFixture<CreadorProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreadorProductosComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreadorProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
