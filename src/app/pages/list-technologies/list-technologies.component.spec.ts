import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTechnologiesComponent } from './list-technologies.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListTechnologiesService } from '../../services/list-technologies/list-technologies.service';

describe('ListTechnologiesComponent', () => {
  let component: ListTechnologiesComponent;
  let fixture: ComponentFixture<ListTechnologiesComponent>;
  let service: ListTechnologiesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ListTechnologiesComponent ],
      providers: [ListTechnologiesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTechnologiesComponent);
    service = TestBed.inject(ListTechnologiesService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
