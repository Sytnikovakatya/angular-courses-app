import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Store, StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

import { AppState } from '@store/app.state';
import * as AuthActions from '@store/authentication/auth.actions';
import * as CoursesActions from '@store/courses/courses.actions';

import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-logo',
  template: '<div class="logo">Mock Logo Component</div>',
})
class MockLogoComponent {}
@Component({
  selector: 'app-button',
  template: '<div>Mock Button Component</div>',
})
class MockButtonComponent {
  @Input() text: string;
  @Input() fontawesome: string;
  @Input() class: string;
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StoreModule.forRoot(provideMockStore)],
      declarations: [HeaderComponent, MockLogoComponent, MockButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch logout action when logout is called', () => {
    spyOn(store, 'dispatch');

    component.logout();

    expect(store.dispatch).toHaveBeenCalledWith(AuthActions.logout());
    expect(store.dispatch).toHaveBeenCalledWith(CoursesActions.resetCourses());
  });
});
