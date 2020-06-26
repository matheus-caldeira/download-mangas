const folder = require('./Controllers/FolderController')
const mangaSee = require('./Controllers/MangaSeeController')
const fs = require('fs')
const path = require('path')

const {url, name, chapterMin, chapterMax, type} = JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, '..', 'data.json'), 'utf8'))

folder.createFolder(name, chapterMin, chapterMax)

if(type === 'MangaSee'){
  mangaSee.getURLS(url, chapterMin, chapterMax).then(urls => {
    urls.map((url, index) => {
      mangaSee.save(name, (index+1), url).then(res => {
        console.log(res)
      })
    })
  })
  return console.log('Download em andamento.')
}else{
  return console.log('Não foi possivel fazer o download.')
}