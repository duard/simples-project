import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibsNgSharedUiComponent } from './libs-ng-shared-ui.component';

describe('LibsNgSharedUiComponent', () => {
  let component: LibsNgSharedUiComponent;
  let fixture: ComponentFixture<LibsNgSharedUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibsNgSharedUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LibsNgSharedUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
