import menuData from '../data/products.json' assert {type: 'json'};


function openingModal() {
  const modal = document.querySelector('.backdrop');
  modal.classList.add('backdrop_visible');
  const body = document.querySelector('.body');
  body.classList.add('body_noscroll');

  // Сброс форм
  const formSize = document.forms.modalFormSize,
  formAdditive = document.forms.modalFormAdditives;
  [formAdditive, formSize].forEach( item => modalFormReset(item));
  formSize.size_s.checked = true;
}

function fillingModal(event) {
  const nameCoffee = event.currentTarget.outerText.split('\n')[0];
  // Выбранная карточка
  const menuItemCurrent = menuData.find(item => item.name === nameCoffee);

  // Список элементов выбранной категории для получения индекса картинки
  const categoryItems = menuData.filter(item => item.category === menuItemCurrent.category);
  const indexCurrent = categoryItems.findIndex(item => item.name === nameCoffee);
  const pic = document.querySelector('.modal__pic');
  pic.src = `./data/img/${menuItemCurrent.category}-${indexCurrent + 1}.jpg`;
  pic.alt = nameCoffee;

  // Добавляем описание товара
  const title = document.querySelector('.modal__coffee-title');
  title.innerHTML = menuItemCurrent.name;
  const desc = document.querySelector('.modal__coffee-desc');
  desc.innerHTML = menuItemCurrent.description;

  const productVariations = document.querySelectorAll('.modal-form__text');
  productVariations[0].innerHTML = menuItemCurrent.sizes.s.size;
  productVariations[1].innerHTML = menuItemCurrent.sizes.m.size;
  productVariations[2].innerHTML = menuItemCurrent.sizes.l.size;

  productVariations[3].innerHTML = menuItemCurrent.additives[0].name;
  productVariations[4].innerHTML = menuItemCurrent.additives[1].name;
  productVariations[5].innerHTML = menuItemCurrent.additives[2].name;

  const price = document.querySelector('.cost-wrap__value');
  price.innerHTML = `$${menuItemCurrent.price}`;

  costCalculation(menuItemCurrent);
}

function closingModal(event) {
  const backdrop = document.querySelector('.backdrop');
  const closeBtn = document.querySelector('.modal__btn-close');
  if (event.target === backdrop || event.target === closeBtn) {
    const modal = document.querySelector('.backdrop');
    modal.classList.remove('backdrop_visible');
    const body = document.querySelector('.body');
    body.classList.remove('body_noscroll')
  }
}

function initialMenuCards() {
  const menuCards = document.querySelectorAll('.menu-card')
  menuCards.forEach((item) => 
    item.addEventListener('click', (event) => {
      openingModal();
      fillingModal(event);
    })
  )
}

function initialModal() {
  initialMenuCards();
  const backdrop = document.querySelector('.backdrop');
  backdrop.addEventListener('click', closingModal);
  const menu = document.querySelector('.menu');

  //Отслеживаем изменения в дереве DOM элемента '.menu'
  // вешаем addEventListener на '.menu-card'
  let observer = new MutationObserver(initialMenuCards);
  observer.observe(menu, {
    childList: true
  });
}

function costCalculation(dataItem) {
  let costAdditive = 0,
      price = +dataItem.price;

  const formSize = document.forms.modalFormSize,
        formAdditive = document.forms.modalFormAdditives,
        costElem  = document.querySelector('.cost-wrap__value');

  formSize.addEventListener('change', (event) => {
    switch (event.target.id) {
      case 'size_s': price = +dataItem.price + +dataItem.sizes.s['add-price'];
        break;
      case 'size_m': price = +dataItem.price + +dataItem.sizes.m['add-price'];
        break;
      case 'size_l': price = +dataItem.price + +dataItem.sizes.l['add-price'];
        break;
    }
    costElem.innerHTML = `$${(price + costAdditive).toFixed(2)}`;
  })

  formAdditive.addEventListener('change', (event) => {
    costAdditive = 0;
    let index;
    for (let item of formAdditive) {
      if (item.checked) {
        index = +item.id.split('_')[1] - 1;
        costAdditive += +dataItem.additives[index]['add-price'];
      }
    }
    costElem.innerHTML = `$${(price + costAdditive).toFixed(2)}`;
  })
}

function modalFormReset(form) {
  for (let item of form) {
    item.checked = false;
  }
}

initialModal();
