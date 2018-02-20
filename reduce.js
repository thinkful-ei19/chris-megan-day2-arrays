'use strict';

function reducer(str){
  let arr = str.split(' ');
  let result = arr.reduce((acc, word) =>{
    if (word.length === 3){
      return acc+' ';
    }
    else {
      return acc+word[word.length-1].toUpperCase();
    }
        
  }, '');
  console.log(result);
}

reducer('noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest');