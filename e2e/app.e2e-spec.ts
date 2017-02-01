import { GetpaidDashPage } from './app.po';

describe('getpaid-dash App', function() {
  let page: GetpaidDashPage;

  beforeEach(() => {
    page = new GetpaidDashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
