import menuData from '../data/products.json' assert {type: 'json'};
const formCategories = document.forms.menuControls;
console.log(menuData);
let menuGrid = document.querySelector('.menu__grid');


const categoryChange = (event) => event.target.attributes.id.value;

function resetMenu () {
  const menu = document.querySelector('.menu');
  menuGrid.remove();
  menuGrid = document.createElement('div');
  menuGrid.classList.add('menu__grid');
  menuGrid.classList.add('opacity');
  menu.append(menuGrid);
}

function createMenuCard (item, index) {
  const menuCard = document.createElement('div');
  menuCard.classList.add('menu-card');
  menuCard.tabIndex = '0';
  menuGrid.append(menuCard);

  // create image
  const imgWrap = document.createElement('div');
  imgWrap.classList.add('menu-card__img-wrap');
  menuCard.append(imgWrap);
  const menuImg = document.createElement('img');
  menuImg.classList.add('menu-card__img');
  menuImg.src = './data/img/' + item.category + '-' + (index + 1) + '.jpg';
  imgWrap.append(menuImg);

  // create description
  const descWrap = document.createElement('div');
  descWrap.classList.add('menu-card__desc-wrap');
  menuCard.append(descWrap);
  const cardTitle = document.createElement('h3');
  cardTitle.classList.add('menu-card__title');
  cardTitle.innerHTML = item.name;
  descWrap.append(cardTitle);
  const cardDesc = document.createElement('p');
  cardDesc.classList.add('menu-card__desc');
  cardDesc.innerHTML = item.description;
  descWrap.append(cardDesc);
  const price = document.createElement('p');
  price.classList.add('menu-card__price');
  price.innerHTML = '$' + item.price;
  descWrap.append(price);
}

function filterData (category) {
  return menuData.filter((item) => item.category === category);
}

formCategories.addEventListener('change', (event) => {
  menuGrid.classList.add('opacity');
  menuGrid.addEventListener('transitionend', () => {
    resetMenu();
    filterData(categoryChange(event)).forEach((item, index) => {
      createMenuCard(item, index);
    });
    setTimeout(() => {
      menuGrid.classList.remove('opacity')
    }, 0);
  }, {once: true});
});

filterData('coffee').forEach((item, index) => {
  createMenuCard(item, index);
});
