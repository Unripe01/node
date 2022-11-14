import http from 'http'
import fs from 'fs'

const myReadStream = fs.createReadStream(__dirname + '/readme.txt','utf8')

myReadStream.on('data', (chunk)=> {
  console.log('new chunk received:',chunk);
})


// const server = http.createServer((req, res) =>{
//   console.log('request was made: ' + req.url)
//   res.writeHead(200, {'Content-Type': 'text/plain'})
//   res.write('res.write')
//   res.end()
// })

// server.listen(3000,'127.0.0.1')
// console.log('hi take, now listening to port 3000')