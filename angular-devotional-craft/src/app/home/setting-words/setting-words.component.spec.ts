import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingWordsComponent } from './setting-words.component';

describe('SettingWordsComponent', () => {
  let component: SettingWordsComponent;
  let fixture: ComponentFixture<SettingWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingWordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
