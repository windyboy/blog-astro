export default {
  siteTitle: "后花园",
  siteDescription: "糖醋小排的后花园",
  favicon: "/favicon.ico",
  siteImagePath: "/images/sarissa.png",
  footer: "© 2016-2022 糖醋小排 版权所有",
  dateFormat: "dd.MM.yyyy HH:mm",
  socialMedia: {
    facebook: "ozcelikismail",
    twitter: "ismailozcelik",
    linkedin: "ismail-özçelik",
    github: "iozcelik",
  },
  pageSize: 5,
  categories: [
    {
      name: "theme",
      color: "btn-warning",
      image: "/images/theme.jpg",
      order: 1,
    },
  ],
  categorySettings: {
    order: "name", // name | count
    layout: "card", //button | card
    image: "",
    color: "btn-primary",
    countVisibility: true,
  },
  searchOptions: {
    includeScore: true,
    includeMatches: true,
    keys: [
      { name: "title", weight: 3 },
      { name: "description", weight: 2 },
    ],
  },
  i18n: {
    search: {
      placeholder: "Search post title and description...",
    },
    archive: {
      select: "Select Year",
    },
    page: "Page",
    resultFound: " result(s) found",
  },
};
