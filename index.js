const puppeteer = require("puppeteer");

(async () =>  {

  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage()
  await page.goto("https://anthonyme0328.github.io/Rock_Paper_Scissors_Game/")

  // await page.screenshot({path:"https://anthonyme0328.github.io/to-do-list/"})

  const grabPara = await page.evaluate(() => {
    const pgTag = document.querySelectorAll(".scoreboard")
    return pgTag.innerText
  })


  console.log(grabPara)


  await browser.close()
})();