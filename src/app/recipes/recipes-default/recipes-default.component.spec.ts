import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesDefaultComponent } from './recipes-default.component';

describe('RecipesDefaultComponent', () => {
  let component: RecipesDefaultComponent;
  let fixture: ComponentFixture<RecipesDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
