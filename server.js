const express = require('express')
// const nunjucks = require('nunjucks')

const folder = require('./FolderController')
const download = require('./DownloadController')

const server = express()
server.use(express.json)

server.set("view engine", "njk")

// nunjucks.configure("./src/views", {
//   express:server,
//   autoescape: false,
//   noCache: true
// })

server.post('/', (req, res) => {
  const { url, name, chapterMin, chapterMax } = req.body.name
  console.log(name)

  // folder.createFolder(name, chapterMin, chapterMax)

  // download.getURLS(url, 1, 5).then(urls => {
  //   urls.map((url, index) => {
  //     download.save(name, (index+1), url).then(res => {
  //       console.log(res)
  //     })
  //   })
  // })
  
  return res.send("Download em andamento")
})

server.listen(5000, () => {
  console.log("server is running")
})