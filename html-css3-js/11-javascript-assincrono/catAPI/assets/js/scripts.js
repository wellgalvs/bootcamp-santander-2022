const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getCats = async () => {
  try {
    const data = await fetch(BASE_URL);
    const json = await data.json();

    return json.webpurl;
  } catch (e) {
    console.log(e.message);
  }
};

const loadImg = async () => {
  catImg.src = await getCats();
};

loadImg();

catBtn.addEventListener('click', loadImg);

/**
 * --> Outra forma de resolver <--
 * const getCats = async () => {
 *  const data = await fetch(BASE_URL)
 *    .then((result) => result.json())
 *    .catch((err) => console.log(err));
 * 
 *  return data.webpurl;
 * };
 */