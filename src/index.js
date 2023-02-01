import './style.css';
import displayHtml from './pageUI.js';
import { iD } from './api/consumeGameID.js';

import postScore from './api/postScore.js';
import getUsersScores from './api/getUsersScores.js';

const appContainer = document.querySelector('.app_container');

const loadHtml = () => {
  appContainer.innerHTML = displayHtml();
};

loadHtml();

const name = document.querySelector('.nameInput');
const score = document.querySelector('.scoreInput');
const refreshBtn = document.querySelector('.refreshBtn');
const form = document.querySelector('.form');

const clearFormInput = () => {
  name.value = '';
  score.value = '';
};

const displayScores = async () => {
  const scoresArray = (await getUsersScores(iD)).result;
  const scoreArticle = document.querySelector('.score_section_article');
  let eachList = '';
  for (let i = 0; i < scoresArray.length; i += 1) {
    eachList += `
    <li>
      <span>${scoresArray[i].user}</span>:<span>${scoresArray[i].score}</span>
    </li>
    `;
  }
  scoreArticle.innerHTML = eachList;
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  await postScore(name.value, score.value, iD);
  clearFormInput();
  await displayScores();
});

refreshBtn.addEventListener('click', async () => {
  await displayScores();
});

window.addEventListener('load', async () => {
  await displayScores();
});