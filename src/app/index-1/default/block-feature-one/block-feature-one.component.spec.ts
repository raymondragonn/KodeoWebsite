import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockFeatureOneComponent } from './block-feature-one.component';

describe('BlockFeatureOneComponent', () => {
  let component: BlockFeatureOneComponent;
  let fixture: ComponentFixture<BlockFeatureOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockFeatureOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockFeatureOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
