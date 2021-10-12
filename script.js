function getWord() {

  let str = ' JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. ';
  if (typeof str === 'string' || str instanceof String) {
    console.log('Variable is a string');
  } else {
    console.log('Variable is not a string');
    
  }

  return str.trim().slice(0, 30) + '...';

}

getWord();