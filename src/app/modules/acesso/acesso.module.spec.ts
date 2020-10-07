import { AcessoModule } from './acesso.module';

describe('AcessoModule', () => {
  let acessoModule: AcessoModule;

  beforeEach(() => {
    acessoModule = new AcessoModule();
  });

  it('should create an instance', () => {
    expect(acessoModule).toBeTruthy();
  });
});
