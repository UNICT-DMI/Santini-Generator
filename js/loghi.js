(function () {
  'use strict';

  let app = angular.module('SantiniGenerator', ['ngSanitize', 'ui.select', 'ui.bootstrap']);

  app.loghi = [
    { name: "Logo vuoto", url: "img/fake_logo.png" },
    { name: "DMI Insider", url: "img/DMI_Insider.png" },
    { name: "Futura Sanità", url: "img/Futura_Sanità.png" },
    { name: "CITING", url: "img/CITING.png" },
    { name: "Libertas", url: "img/Libertas.png" },
    { name: "Actea", url: "img/Actea.png" },
    { name: "Sovranisti e Popolari", url: "img/p.png" },
  ];

}());
