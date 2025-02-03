const images = [
  'images/img1.jpg',
  'images/img4.jpg',
  'images/img5.jpg'
];
const bigTexts = [
  'God loves you',
  'God is with you',
  'God cares for you'
];
const smallTexts = [
  'The love of God is unfathomable',
  'Trust in His plan',
  'You are never alone'
];

let currentIndex = 0;
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  const zoomImage = document.getElementById('zoomImage');
  const bigTextElement = document.getElementById('bigText');
  const smallTextElement = document.getElementById('smallText');

  zoomImage.style.animation = 'none';
  zoomImage.offsetHeight;
  zoomImage.src = images[currentIndex];
  zoomImage.style.animation = 'zoomIn 15s forwards';

  bigTextElement.style.animation = 'none';
  bigTextElement.offsetHeight;
  bigTextElement.textContent = bigTexts[currentIndex];
  bigTextElement.style.animation = 'slideInFromTop 2s forwards';

  smallTextElement.style.animation = 'none';
  smallTextElement.offsetHeight;
  smallTextElement.textContent = smallTexts[currentIndex];
  smallTextElement.style.animation = 'slideInFromBottom 2s forwards';
}, 15000);
