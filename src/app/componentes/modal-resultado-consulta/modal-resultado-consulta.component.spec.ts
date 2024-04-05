import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalResultadoConsultaComponent } from './modal-resultado-consulta.component';

describe('ModalResultadoConsultaComponent', () => {
  let component: ModalResultadoConsultaComponent;
  let fixture: ComponentFixture<ModalResultadoConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalResultadoConsultaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalResultadoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    const element : HTMLSelectElement = fixture.debugElement.nativeElement

    expect(component).toBeTruthy();
  });
});
