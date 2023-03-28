(() => {
  const data = [
    {
      id: '1',
      image: {
        desk1: './images/desktop/portfolio/technokryak-desktop.jpg',
        desk2: './images/desktop/portfolio/technokryak-desktop@2x.jpg',
        tab1: './images/tablet/portfolio/technokryak-tablet.jpg',
        tab2: './images/tablet/portfolio/technokryak-tablet@2x.jpg',
        mob1: './images/mob/portfolio/technokryak-mob.jpg',
        mob2: './images/mob/portfolio/technokryak-mob@2x.jpg',
      },
      text: 'Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.',
      title: 'Технокряк',
      category: 'Веб-сайт',
    },
    {
      id: '2',
      image: {
        desk1: './images/desktop/portfolio/neworlean-desktop.jpg',
        desk2: './images/desktop/portfolio/neworlean-desktop@2x.jpg',
        tab1: './images/tablet/portfolio/neworlean-tablet.jpg',
        tab2: './images/tablet/portfolio/neworlean-tablet@2x.jpg',
        mob1: './images/mob/portfolio/neworlean-mob.jpg',
        mob2: './images/mob/portfolio/neworlean-mob@2x.jpg',
      },
      text: 'Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.',
      title: 'Постер New Orlean vs Golden Star',
      category: 'Дизайн',
    },
    {
      id: '1',
      image: {
        desk1: './images/desktop/portfolio/seafood-desktop.jpg',
        desk2: './images/desktop/portfolio/seafood-desktop@2x.jpg',
        tab1: './images/tablet/portfolio/seafood-tablet.jpg',
        tab2: './images/tablet/portfolio/seafood-tablet@2x.jpg',
        mob1: './images/mob/portfolio/seafood-mob.jpg',
        mob2: './images/mob/portfolio/seafood-mob@2x.jpg',
      },
      text: 'Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.',
      title: 'Ресторан Seafood',
      category: 'Додаток',
    },
    {
      id: '1',
      image: {
        desk1: './images/desktop/portfolio/prime-desktop.jpg',
        desk2: './images/desktop/portfolio/prime-desktop@2x.jpg',
        tab1: './images/tablet/portfolio/prime-tablet.jpg',
        tab2: './images/tablet/portfolio/prime-tablet@2x.jpg',
        mob1: './images/mob/portfolio/prime-mob.jpg',
        mob2: './images/mob/portfolio/prime-mob@2x.jpg',
      },
      text: 'Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.',
      title: 'Проєкт Prime',
      category: 'Маркетинг',
    },
    {
      id: '1',
      image: {
        desk1: './images/desktop/portfolio/boxes-desktop.jpg',
        desk2: './images/desktop/portfolio/boxes-desktop@2x.jpg',
        tab1: './images/tablet/portfolio/boxes-tablet.jpg',
        tab2: './images/tablet/portfolio/boxes-tablet@2x.jpg',
        mob1: './images/mob/portfolio/boxes-mob.jpg',
        mob2: './images/mob/portfolio/boxes-mob@2x.jpg',
      },
      text: 'Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.',
      title: 'Проєкт Boxes',
      category: 'Додаток',
    },
    {
      id: '1',
      image: {
        desk1: './images/desktop/portfolio/inspiration-desktop.jpg',
        desk2: './images/desktop/portfolio/inspiration-desktop@2x.jpg',
        tab1: './images/tablet/portfolio/inspiration-tablet.jpg',
        tab2: './images/tablet/portfolio/inspiration-tablet@2x.jpg',
        mob1: './images/mob/portfolio/inspiration-mob.jpg',
        mob2: './images/mob/portfolio/inspiration-mob@2x.jpg',
      },
      text: 'Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.',
      title: 'Inspiration has no Borders',
      category: 'Веб-сайт',
    },
    {
      id: '1',
      image: {
        desk1: './images/desktop/portfolio/limitededition-desktop.jpg',
        desk2: './images/desktop/portfolio/limitededition-desktop@2x.jpg',
        tab1: './images/tablet/portfolio/limitededition-tablet.jpg',
        tab2: './images/tablet/portfolio/limitededition-tablet@2x.jpg',
        mob1: './images/mob/portfolio/limitededition-mob.jpg',
        mob2: './images/mob/portfolio/limitededition-mob@2x.jpg',
      },
      text: 'Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.',
      title: 'Видання Limited Edition',
      category: 'Дизайн',
    },
    {
      id: '1',
      image: {
        desk1: './images/desktop/portfolio/lab-desktop.jpg',
        desk2: './images/desktop/portfolio/lab-desktop@2x.jpg',
        tab1: './images/tablet/portfolio/lab-tablet.jpg',
        tab2: './images/tablet/portfolio/lab-tablet@2x.jpg',
        mob1: './images/mob/portfolio/lab-mob.jpg',
        mob2: './images/mob/portfolio/lab-mob@2x.jpg',
      },
      text: 'Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.',
      title: 'Проект LAB',
      category: 'Маркетинг',
    },
    {
      id: '1',
      image: {
        desk1: './images/desktop/portfolio/growingbusiness-desktop.jpg',
        desk2: './images/desktop/portfolio/growingbusiness-desktop@2x.jpg',
        tab1: './images/tablet/portfolio/growingbusiness-tablet.jpg',
        tab2: './images/tablet/portfolio/growingbusiness-tablet@2x.jpg',
        mob1: './images/mob/portfolio/growingbusiness-mob.jpg',
        mob2: './images/mob/portfolio/growingbusiness-mob@2x.jpg',
      },
      text: 'Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.',
      title: 'rowing Busines',
      category: 'Додаток',
    },
  ];
  console.log(data);
  const refs = {
    collection: document.querySelector('.portfolio'),
    list: document.querySelectorAll('.portfolio__item'),
    filterBtn: document.querySelector('.applications'),
    allBtn: document.querySelector('.filter'),
  };

  refs.allBtn.addEventListener('click', allBtnClick);

  function allBtnClick(event) {
    if (event.target !== event.currentTarget) {
      switch (event.target.textContent) {
        case 'Всі':
          filterMarkup(data);
          return;
        case 'Додатки':
          filterMarkup(data.filter(item => item.category === 'Додаток'));
          return;
        case 'Веб-сайти':
          filterMarkup(data.filter(item => item.category === 'Веб-сайт'));
          return;
        case 'Дизайн':
          filterMarkup(data.filter(item => item.category === 'Дизайн'));
          return;
        case 'Маркетинг':
          filterMarkup(data.filter(item => item.category === 'Маркетинг'));
          return;
        default:
          break;
      }
    }
  }

  const filterMarkup = filter => {
    const markup = filter
      .map(
        item => `<li class="portfolio__item">
              <a href="#" class="portfolio__link"
                ><div class="portfolio-overlay">
                  <picture>
                    <source
                      srcset="
                        ${item.image.desk1} 1x, ${item.image.desk2} 2x     
                      "
                      media="(min-width:1200px)"
                    />
                    <source
                      srcset="
                        ${item.image.tab1} 1x, ${item.image.tab2} 2x
                      "
                      media="(min-width:768px)"
                    />
                    <source
                      srcset="${item.image.mob1} 1x, ${item.image.mob2} 2x
                      "
                      media="(max-width:767px)"
                    />
                    <img
                      src=${item.image.mob1}
                      alt=${item.title}
                      width="450"
                    />
                  </picture>
                  <p class="porfolio__text">
                    ${item.text}
                  </p>
                </div>
                <div class="card">
                  <h2 class="card__title title__accent">${item.title}</h2>
                  <p class="card__category">${item.category}</p>
                </div>
              </a>
            </li>`
      )
      .join('');

    refs.collection.innerHTML = markup;
  };

  filterMarkup(data);
})();
