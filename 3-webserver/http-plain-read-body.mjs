import http from 'http'

const server = http.createServer(function (req, res) {
    console.log(req.method, req.url)

    req.on('data', d => {
        console.log(d)
    })
    req.on('end', () => {
        res.end()
        console.log('END')
    })
})

server.listen(3000)
