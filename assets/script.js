var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
// var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function list (array = []) {
  if (!array.length) return console.log('No items in array');

  for (var item = 0; item < array.length; item++) {
    console.log(array[item]);
  }
}

function selectRandomFrom (array = [], message = 'Selected') {
  if (!array.length) return console.log('No items in array');

  const randomSelection = array[Math.floor(Math.random() * array.length)];
  console.log(`${message} ${randomSelection}.`);
}

console.log('Here are the topics we learned through Prework:');
list(topics);
console.log('Which topic should we study first?');
selectRandomFrom(topics, "Let's study");