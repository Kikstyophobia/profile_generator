const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  
  rl.question('Do you have any hobbies? ', (hobbies) => {

    rl.question('What kind of music do you like? ', (music) => {
  
      rl.question('What sports do you play? ', (sports) => {
        
        rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {
         
          rl.question('What did you study in school? ', (school) => {
            console.log(`I am ${name}, I enjoy ${hobbies}. I like listening to ${music} and enjoy playing ${sports}. My superpower is ${superpower} and I studied ${school}.`);

            rl.close();
          })
          
        })
        
      })

    })

  })
    
});