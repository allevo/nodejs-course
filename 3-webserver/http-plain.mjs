import http from 'http'

const server = http.createServer(function (req, res) {
    console.log(req.method, req.url)

    res.write('WOOW!!\n')
    res.end()
})

server.listen(3000)
