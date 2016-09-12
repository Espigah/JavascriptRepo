import { Casework5CliPage } from './app.po';

describe('casework-5-cli App', function() {
  let page: Casework5CliPage;

  beforeEach(() => {
    page = new Casework5CliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
