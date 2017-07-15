import { ReceptarAppPage } from './app.po';

describe('receptar-app App', function() {
  let page: ReceptarAppPage;

  beforeEach(() => {
    page = new ReceptarAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
