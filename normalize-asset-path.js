const path = require('path')
const fs = require('fs')
const walk = function (dir, done) {
  let results = []
  fs.readdir(dir, function (err, list) {
    if (err) return done(err)
    let pending = list.length
    if (!pending) return done(null, results)
    list.forEach(function (file) {
      file = path.resolve(dir, file)
      fs.stat(file, function (err, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function (err, res) {
            results = results.concat(res)
            if (!--pending) done(null, results)
          })
        } else {
          results.push(file)
          if (!--pending) done(null, results)
        }
      })
    })
  })
}
async function run() {
  const dirPath = path.resolve(__dirname, './out')
  walk(dirPath, function (err, results) {
    if (err) throw err
    results.forEach(file => {
      if (file.endsWith('.html')) {
        fs.readFile(file, 'utf8', function (err, data) {
          if (err) {
            return console.log(err)
          }
          const result = data.replace(/%5Blocale%5D/g, '[locale]')

          fs.writeFile(file, result, 'utf8', function (err) {
            if (err) return console.log(err)
          })
        })
      }
    })
  })
}

run()
