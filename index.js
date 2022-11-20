const http = require('http');
const fs = require('fs');
const isPrime = require('prime-number');
const factor = require('./factorial.js')

const server = http.createServer((req, res) => {
    // Home:

    if (req.url === '/') {
        fs.readFile('./home.html', (err, data) => {
            if (err) {
                throw err
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
            return
        })

    }
    // Pages

    if (req.url === '/pages') {
        fs.readFile('./pages.html', (err, data) => {
            if (err) {
                throw err
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data)
        })
    }
    // Pages/About

    if (req.url === '/pages/about') {
        fs.readFile('./about.html', (err, data) => {
            if (err) {
                throw err
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
            return
        })
    }
    // Pages/Sports

    if (req.url === '/pages/sports') {
        fs.readFile('./sports.html', (err, data) => {
            if (err) {
                throw err
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
            return
        })

    }
    // Files

    if (req.url === '/files') {
        fs.readFile('./files.html', (err, data) => {
            if (err) {
                throw err
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data)
        })

    }
    // Files/Shops

    if (req.url === '/files/shops') {
        fs.readFile('./shops.txt', (err, data) => {
            if (err) {
                throw err
            }
            res.writeHead(200, { 'Content-Type': 'text' });
            res.end(data);
            return
        })

    }
    // Files/People

    if (req.url === '/files/people') {
        fs.readFile('./people.txt', (err, data) => {
            if (err) {
                throw err
            }
            res.writeHead(200, { 'Content-Type': 'text' });
            res.end(data);
            return
        })

    }
    // Contacts

    if (req.url === '/contacts') {
        fs.readFile('./contacts.json', (err, data) => {
            if (err) {
                throw err
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data)
        })
    }
    if (req.url.startsWith('/contacts/')) {
        let num = req.url.split('/')[2]
        fs.readFile('./contacts.json', (err, data) => {
            if (err) {
                throw err
            }
            if (!JSON.parse(data)[num - 1]) {
                res.end('<h1>Not found<h1/>')
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(JSON.parse(data)[num - 1]));

        })
    }
    // Comps

    if (req.url === '/comps') {
        fs.readFile('./comps.html', (err, data) => {
            if (err) {
                throw err
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data)
        })
    }
    // Comps/Primes
    if (req.url === '/comps/primes') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Hello<h1/>')
    }

    // Comps/Primes/N

    if (req.url.startsWith('/comps/primes/')) {
        let num = req.url.split('/')[3];
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(isPrime(num) ? `${num} is a prime number` : `${num} is not a prime number`)
        res.end()
    }
    // Comps/Factory
    if (req.url === '/comps/factory') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Hello factor<h1/>')
    }
    // Comps/Factory/N
    if (req.url.startsWith('/comps/factory')){
        let num = req.url.split('/')[3];
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(factor.factorial(num));
        res.end()
    }


}).listen(3006)
