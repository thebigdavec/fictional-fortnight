var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics () {
  for (var i = 0; i < topics.length; i++) {
    console.log(topics[i]);
  }
}

function selectTopic () {
  if (topics.includes(randomTopic)) {
    console.log(`Let's study ${randomTopic}!`);
  } else {
    console.log(`${randomTopic} is not a topic we learned through Prework. Please try again!`);
  }
}

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();