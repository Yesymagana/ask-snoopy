// Prompt for user's name
const userName = prompt('Greetings Friend! What is your name?');

// Alert with greeting and instructions for user
if (userName == null || userName == '') {
  txt = 'Click on the button below to ask me anything';
} else {
  txt = 'Hi ' + userName + '! Click on the button below to ask me anything';
}
alert(txt);

// Initial image with typewriter
const image = document.querySelector('img')

image.src = 'https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2Fe5e9d252-dcbc-11e8-9f04-38d397e6661c?fit=scale-down&source=next&width=700'
 

// Shake function 
function shake() {
  const snoopy = document.getElementById('typewriter')
  const messageText = document.getElementById('message')

  if (messageText != null) {
    messageText.parentNode.removeChild(messageText)
  }

  snoopy.classList.add('shake');

  setTimeout(function(){snoopy.classList.remove('shake');}, 1000);
  setTimeout(function(){getFortune()}, 1000);
}

// Function to retrieve Fortune
function getFortune() {
  const fortunes = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes, definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy, try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Do not count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful']

  let fortune = fortunes[Math.floor(Math.random() * fortunes.length)];

  let parent = document.getElementById("fortune");
  let newMessage = document.createElement("div");
  newMessage.setAttribute('id', "message");
  newMessage.innerHTML = "\"" + fortune + "\"";
  parent.appendChild(newMessage);

  image.src = 'https://media.tenor.com/images/5716480c2f2a80f883a8e20aaef730d9/tenor.png';
}



