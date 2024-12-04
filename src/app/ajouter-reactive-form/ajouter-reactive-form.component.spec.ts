import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterReactiveFormComponent } from './ajouter-reactive-form.component';

describe('AjouterReactiveFormComponent', () => {
  let component: AjouterReactiveFormComponent;
  let fixture: ComponentFixture<AjouterReactiveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjouterReactiveFormComponent]
    });
    fixture = TestBed.createComponent(AjouterReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
