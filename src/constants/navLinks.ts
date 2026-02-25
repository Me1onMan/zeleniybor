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
    mainLink: "/rooms",
    additionalLinks: [
      {
        title: "Онлайн-бронирование",
        link: "/online-booking",
      },
    ],
  },
  {
    title: "Лечение",
    mainLink: "/treatment",
    additionalLinks: [
      {
        title: "Процедуры по путевке",
        link: "/treatment/procedures",
      },
      {
        title: "Платные медицинские услуги",
        link: "/treatment/paid-services",
      },
      {
        title: "Наши врачи",
        link: "/treatment/doctors",
      },
    ],
  },
  {
    title: "Путевки",
    mainLink: "/vouchers",
    additionalLinks: [
      {
        title: "Санитарно-курортные",
        link: "/vouchers/sanitary-resort",
      },
      {
        title: "Оздоровительные",
        link: "/vouchers/health-improving",
      },
      {
        title: "Проживание",
        link: "/vouchers/accommodation",
      },
      {
        title: "Путевка выходного дня",
        link: "/vouchers/weekend",
      },
    ],
  },
  {
    title: "Спорт и доп. услуги",
    mainLink: "/sport-and-additional-services",
    additionalLinks: [
      {
        title: "Бассейн и сауна",
        link: "/sport-and-additional-services/pool-and-sauna",
      },
      {
        title: "Спортивные услуги",
        link: "/sport-and-additional-services/sports-services",
      },
      {
        title: "Прокат инвентаря",
        link: "/sport-and-additional-services/equipment-rental",
      },
      {
        title: "Автоуслуги и паркинг",
        link: "/sport-and-additional-services/auto-services-and-parking",
      },
      {
        title: "Прочие услуги",
        link: "/sport-and-additional-services/other-services",
      },
      {
        title: "Спартакиада",
        link: "/sport-and-additional-services/spartakiada",
      },
    ],
  },
  {
    title: "Лагерь",
    mainLink: "/camp",
  },
  {
    title: "Контакты",
    mainLink: "/contacts",
    additionalLinks: [
      {
        title: "Местоположение",
        link: "/contacts/location",
      },
      {
        title: "Наши телефоны",
        link: "/contacts/phones",
      },
    ],
  },
  {
    title: "О санатории",
    mainLink: "/about",
    additionalLinks: [
      {
        title: "Новости",
        link: "/about/news",
      },
      {
        title: "Акции и скидки",
        link: "/about/sales",
      },
      {
        title: "Питание",
        link: "/about/food",
      },
      {
        title: "Досуг",
        link: "/about/recreation",
      },
      {
        title: "Вакансии",
        link: "/about/jobs",
      },
    ],
  },
  {
    title: "Instagram",
    mainLink: "https://www.instagram.com/zeleniybor.by/",
  },
];
