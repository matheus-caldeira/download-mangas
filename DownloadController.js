const puppeteer = require('puppeteer')
const download = require('image-downloader')
const path = require ('path')

module.exports = {
  async save (folder, chapter, initialURL) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({width: 1200, height: 1200})
    await page.goto(initialURL, {waitUntil: 'load'});
    
    await page.evaluate(() => {
      let text = document.querySelector('.wholeChapter')

      if(text.innerText !== " Single Page")
        text.click()
    })

    const pagesIMG = await page.evaluate(() => 
      document.querySelectorAll('.image-container-manga > .fullchapimage > img').length
    )  

    for (let contador = 0; contador < pagesIMG; contador++) {
      const url = await page.evaluate(() => {
        const element = document.querySelector('.image-container-manga > .fullchapimage > img')
        const url = element.getAttribute('src')

        element.parentElement.removeChild(element)

        return url
      })

      const options = {
        url: url,
        dest: path.resolve(__dirname, 'Mangas',
                    folder, `Chapter-${('000' + (chapter)).slice(-3)}`,
                    `Page-${('000' + (contador+1)).slice(-3)}.png`,),
        extractFilename: false
      } 

      download.image(options)
    }

    await browser.close()
    return (`Chapter-${('000' + (chapter)).slice(-3)} OK with ${pagesIMG} Pages.`)
  },

  async getURLS (initialURL, chapterMin, chapterMax) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({width: 1200, height: 1200})
    await page.goto(initialURL, {waitUntil: 'load'});
    const navigationPromise = page.waitForNavigation() //apenas pq usar a funcao direito da erro

    await page.evaluate(() => {
      let text = document.querySelector('.wholeChapter')

      if(text.innerText !== " Single Page")
        text.click()
    })

    const urls = [initialURL];
    
    for (let contador = chapterMin; contador < chapterMax; contador++) {
      await page.evaluate(() => 
        document.querySelector('button.nextBtn').click()
      )
      await navigationPromise
      await page.waitFor(500)
      
      const currentURL = await page.url()
      urls.push(currentURL)
    }

    await browser.close();

    return urls
  }
}