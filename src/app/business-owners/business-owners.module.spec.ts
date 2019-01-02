import { BusinessOwnersModule } from './business-owners.module';

describe('BusinessOwnersModule', () => {
  let businessOwnersModule: BusinessOwnersModule;

  beforeEach(() => {
    businessOwnersModule = new BusinessOwnersModule();
  });

  it('should create an instance', () => {
    expect(businessOwnersModule).toBeTruthy();
  });
});
