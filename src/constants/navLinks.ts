export interface INavLink {
  title: string;
  link: string;
}

export interface INavItem {
  title: string;
  mainLink: string;
  additionalLinks?: Array<INavLink>;
}

export const navLinks: Array<INavItem> = [
  {
    title: "Номера и цены",
    mainLink: "https://zeleniybor.by/rooms",
    additionalLinks: [
      {
        title: "Онлайн-бронирование",
        link: "https://zeleniybor.by/online-booking",
      },
    ],
  },
  {
    title: "Лечение",
    mainLink: "https://zeleniybor.by/treatment",
    additionalLinks: [
      {
        title: "Процедуры по путевке",
        link: "https://zeleniybor.by/treatment/procedures",
      },
      {
        title: "Платные медицинские услуги",
        link: "https://zeleniybor.by/treatment/paid-services",
      },
      {
        title: "Наши врачи",
        link: "https://zeleniybor.by/treatment/doctors",
      },
    ],
  },
  {
    title: "Путевки",
    mainLink: "https://zeleniybor.by/vouchers",
    additionalLinks: [
      {
        title: "Санитарно-курортные",
        link: "https://zeleniybor.by/vouchers/sanitary-resort",
      },
      {
        title: "Оздоровительные",
        link: "https://zeleniybor.by/vouchers/health-improving",
      },
      {
        title: "Проживание",
        link: "https://zeleniybor.by/vouchers/accommodation",
      },
      {
        title: "Путевка выходного дня",
        link: "https://zeleniybor.by/vouchers/weekend",
      },
    ],
  },
  {
    title: "Спорт и доп. услуги",
    mainLink: "https://zeleniybor.by/sport-and-additional-services",
    additionalLinks: [
      {
        title: "Бассейн и сауна",
        link: "https://zeleniybor.by/sport-and-additional-services/pool-and-sauna",
      },
      {
        title: "Спортивные услуги",
        link: "https://zeleniybor.by/sport-and-additional-services/sports-services",
      },
      {
        title: "Прокат инвентаря",
        link: "https://zeleniybor.by/sport-and-additional-services/equipment-rental",
      },
      {
        title: "Автоуслуги и паркинг",
        link: "https://zeleniybor.by/sport-and-additional-services/auto-services-and-parking",
      },
      {
        title: "Прочие услуги",
        link: "https://zeleniybor.by/sport-and-additional-services/other-services",
      },
      {
        title: "Спартакиада",
        link: "https://zeleniybor.by/sport-and-additional-services/spartakiada",
      },
    ],
  },
  {
    title: "Лагерь",
    mainLink: "https://zeleniybor.by/camp",
  },
  {
    title: "Контакты",
    mainLink: "https://zeleniybor.by/contacts",
    additionalLinks: [
      {
        title: "Местоположение",
        link: "https://zeleniybor.by/contacts/location",
      },
      {
        title: "Наши телефоны",
        link: "https://zeleniybor.by/contacts/phones",
      },
    ],
  },
  {
    title: "О санатории",
    mainLink: "https://zeleniybor.by/about",
    additionalLinks: [
      {
        title: "Новости",
        link: "https://zeleniybor.by/about/news",
      },
      {
        title: "Акции и скидки",
        link: "https://zeleniybor.by/about/sales",
      },
      {
        title: "Питание",
        link: "https://zeleniybor.by/about/food",
      },
      {
        title: "Досуг",
        link: "https://zeleniybor.by/about/recreation",
      },
      {
        title: "Вакансии",
        link: "https://zeleniybor.by/about/jobs",
      },
    ],
  },
  {
    title: "Instagram",
    mainLink: "https://www.instagram.com/zeleniybor.by/",
  },
];
