const scienceInfoButton = document.querySelector(
  '.article__info-button_science'
);
const nobelInfoButton = document.querySelector('.article__info-button_nobel');

const scienceInfoBlock = document.querySelector('.article__info_science');
const nobelInfoBlock = document.querySelector('.article__info_nobel');

const showInfo = (div, button) => {
  div.classList.toggle('article__info_showed');
  button.classList.toggle('article__info-button_showed');
};

scienceInfoButton.addEventListener('click', () => {
  showInfo(scienceInfoBlock, scienceInfoButton);
});

nobelInfoButton.addEventListener('click', () => {
  showInfo(nobelInfoBlock, nobelInfoButton);
});
