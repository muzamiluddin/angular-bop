import { EligibilityModule } from './eligibility.module';

describe('EligibilityModule', () => {
  let eligibilityModule: EligibilityModule;

  beforeEach(() => {
    eligibilityModule = new EligibilityModule();
  });

  it('should create an instance', () => {
    expect(eligibilityModule).toBeTruthy();
  });
});
