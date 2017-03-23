import { POSWEBPage } from './app.po';

describe('posweb App', function() {
  let page: POSWEBPage;

  beforeEach(() => {
    page = new POSWEBPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
