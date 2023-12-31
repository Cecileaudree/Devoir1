import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfolioComponent } from './profolio.component';

describe('ProfolioComponent', () => {
  let component: ProfolioComponent;
  let fixture: ComponentFixture<ProfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfolioComponent]
    });
    fixture = TestBed.createComponent(ProfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Cecile-Audree'`, () => {
    const fixture = TestBed.createComponent(ProfolioComponent);
    const app = fixture.componentInstance;
    expect(app.Title).toEqual('Cecile-Audree');
  });

  
});
