/* Temporary diagnostic: open the mobile menu, dump panel state. */
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });
  const errors = [];
  page.on('console', (m) => {
    if (m.type() === 'error' || m.type() === 'warning') errors.push(m.text());
  });
  await page.goto('http://localhost:4321', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);
  await page.click('.menu-button');
  await page.waitForTimeout(400);
  const info = await page.evaluate(() => {
    const panel = document.querySelector('.menu-panel');
    const link = document.querySelector('.menu-link');
    const nav = panel.querySelector('nav');
    const pb = panel.getBoundingClientRect();
    const lb = link ? link.getBoundingClientRect() : null;
    const cs = getComputedStyle(panel);
    const lcs = link ? getComputedStyle(link) : null;
    return {
      open: document.querySelector('.menu').open,
      panelRect: { x: pb.x, y: pb.y, w: pb.width, h: pb.height },
      linkRect: lb ? { x: lb.x, y: lb.y, w: lb.width, h: lb.height } : null,
      panelOpacity: cs.opacity,
      panelBackdrop: cs.backdropFilter || cs.webkitBackdropFilter,
      panelColor: cs.color,
      linkColor: lcs ? lcs.color : null,
      linkFontSize: lcs ? lcs.fontSize : null,
      navHeight: nav.getBoundingClientRect().height,
      linksCount: panel.querySelectorAll('.menu-link').length,
    };
  });
  console.log(JSON.stringify(info, null, 1));
  console.log('CONSOLE:', errors.length ? errors : 'clean');
  await page.screenshot({
    path: 'C:/Users/Hendrix Msiska/AppData/Local/Temp/opencode/menu-open-full.png',
  });
  await browser.close();
})();
