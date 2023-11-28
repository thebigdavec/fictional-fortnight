var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
// var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics () {
  for (var i = 0; i < topics.length; i++) {
    console.log(topics[i]);
  }
}

function selectRandomFrom (array, message = 'Selected') {
  const randomSelection = array[Math.floor(Math.random() * array.length)];
  console.log(`${message} ${randomSelection}.`)``;
}

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectRandomFrom(topics, "Let's study");