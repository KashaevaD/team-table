import { TeamTablePage } from './app.po';

describe('team-table App', function() {
  let page: TeamTablePage;

  beforeEach(() => {
    page = new TeamTablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
