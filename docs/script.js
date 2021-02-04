import {challenges} from './data.js';
const mainContent = document.querySelector('main');

/*
  <div class="challenge">
    <img src="https://github.com/andreserudo/articlePreview/blob/master/design/desktop-preview.jpg?raw=true" alt="challenge"/>
    <div class="description">
      <p><span>Tech</span></p>
      <h3>Title</h3>
      <p>Description</p>
      <div class="links">
        <a>Repository</a>
        <a>Challenge</a>        
      </div>
      <a>Live</a>
    </div>
  </div>
*/

const createChallenges = () => {
  challenges.forEach(challenge => {
    const challengeDiv = document.createElement('div');
    challengeDiv.className = 'challenge';    

    const challengeImg = document.createElement('img');
    challengeImg.alt = challenge.name;
    challengeImg.src = challenge.imageSrc;

    const challengeDescriptionDiv = document.createElement('div');
    challengeDescriptionDiv.className = 'description';

    const challengeTitle = document.createElement('h3');
    challengeTitle.textContent = challenge.name;

    challengeDescriptionDiv.appendChild(challengeTitle);
    challengeDiv.appendChild(challengeImg);
    challengeDiv.appendChild(challengeDescriptionDiv);
    mainContent.appendChild(challengeDiv);
  });  
  
}

createChallenges();