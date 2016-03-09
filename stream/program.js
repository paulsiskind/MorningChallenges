// console.log("beep boop");

 var fs = require('fs');
 var through = require('through2');
 var stream = through(write, end);
    // fs.createReadStream(process.argv[2]).pipe(process.stdout);

     // process.stdin.pipe(process.stdout);

       function write (buffer, encoding, next) {
        this.push(buffer.toString().toUpperCase);
        next();
    }
      function end (done) {
        process.stdin.pipe(tr).pipe(process.stdout);
        done();
    }

  //   fs.createReadStream(process.stdin)
  // .pipe(through(function (chunk, enc, callback) {
    

  //   this.push(chunk.toUpperCase())

  //   callback()
  //  }))
  // .pipe(fs.createWriteStream(process.stdout))