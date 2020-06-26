const fs = require('fs')
const path = require('path')

module.exports = {
  createFolder (folder, chapterMin, chapterMax) {
    if(!fs.existsSync(path.resolve(__dirname, '..', '..', 'Mangas')))
      fs.mkdirSync(path.resolve(__dirname, '..', '..', 'Mangas'))

    if(!fs.existsSync(path.resolve(__dirname, '..', '..', 'Mangas', folder)))
      fs.mkdirSync(path.resolve(__dirname, '..', '..', 'Mangas', folder))

    for (let i = chapterMin; i <= chapterMax; i++)
      if(!fs.existsSync(path.resolve(__dirname, '..', '..', 'Mangas', folder, `Chapter-${('000' + (i)).slice(-3)}`)))
        fs.mkdirSync(path.resolve(__dirname, '..', '..', 'Mangas', folder, `Chapter-${('000' + (i)).slice(-3)}`))
  },
}