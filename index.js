const puppeteer = require("puppeteer");

(async () =>  {

  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage()
  await page.goto("https://quotes.toscrape.com/")

  const grabQuotes = await page.evaluate(() => {
    const quotes = document.querySelectorAll(".quote")

    let quotesArr = []
    quotes.forEach((quoteTag) => {
      const quoteInfo = quoteTag.querySelectorAll("span")
      const actQuote = quoteInfo[0]
      const actAuthor = quoteInfo[1]

      const authorName = actAuthor.querySelector("small")

      quotesArr.push({quote: actQuote.innerText, author: authorName.innerText})

    })
    return quotesArr
  })

  console.log(grabQuotes)



  await browser.close()
})();

(async () =>  {

  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage()
  await page.goto("https://quotes.toscrape.com/")

  await page.click("a[href='/login']")

  await page.type("#username", "Anthony")
  await page.type("#password", "test")

  await page.click("input[value='Login']")

  
  // await browser.close()
})();