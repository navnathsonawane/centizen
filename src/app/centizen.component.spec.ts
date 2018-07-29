import { TestBed, async } from '@angular/core/testing';
import { CentizenComponent } from './centizen.component';
describe('CentizenComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CentizenComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(CentizenComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Centizen'`, async(() => {
    const fixture = TestBed.createComponent(CentizenComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Centizen');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(CentizenComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Centizen!');
  }));
});
