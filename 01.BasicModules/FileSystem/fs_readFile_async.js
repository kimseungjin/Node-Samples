const fs = require('fs');

const file = './song.txt';

// 파일 읽기 비동기
fs.readFile(file, (err, data) => {
   if ( err ) {
      console.error('File Read Error : ', err);
      return;
   }
   console.log('Read Text File');
   console.log(data);   
});

// 파일 읽기 비동기, with 인코딩
fs.readFile(file, 'UTF-8', (err, data) => {
   if ( err ) {
      console.error('File Read Error : ', err);
      return;
   }
   console.log('Read Text File, UTF-8 Encoding');
   console.log(data);
});