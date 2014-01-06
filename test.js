var fs = require('fs')

require('markdown-code-blocks')('javascript')
  .on('data', function (block) {
    eval(block)
  })
  .write(fs.readFileSync(__dirname + '/README.md'))
