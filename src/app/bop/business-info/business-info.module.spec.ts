import { BusinessInfoModule } from './business-info.module';

describe('BusinessInfoModule', () => {
  let businessInfoModule: BusinessInfoModule;

  beforeEach(() => {
    businessInfoModule = new BusinessInfoModule();
  });

  it('should create an instance', () => {
    expect(businessInfoModule).toBeTruthy();
  });
});
