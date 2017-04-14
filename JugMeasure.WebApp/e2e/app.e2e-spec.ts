import { JugMeasure.WebAppPage } from './app.po';

describe('jug-measure.web-app App', () => {
  let page: JugMeasure.WebAppPage;

  beforeEach(() => {
    page = new JugMeasure.WebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
