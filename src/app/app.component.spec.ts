import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
  });

  describe('rendering', () => {
    it(`should have as title 'org'`, () => {
      const component = fixture.componentInstance;
      expect(component.title).toEqual('org');
    });
    
    it('should render title', () => {
      fixture.detectChanges(); // trigger change detection i.e. render the component with its current state
      const compiled = fixture.nativeElement;
      const heading = compiled.querySelector('h1');
      expect(heading.textContent).toContain('Welcome to org!');
    });
  });
});
