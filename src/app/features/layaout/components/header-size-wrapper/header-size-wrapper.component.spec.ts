import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSizeWrapperComponent } from './header-size-wrapper.component';

describe('HeaderSizeWrapperComponent', () => {
  let component: HeaderSizeWrapperComponent;
  let fixture: ComponentFixture<HeaderSizeWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderSizeWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSizeWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
