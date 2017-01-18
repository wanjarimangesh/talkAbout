  'use strict';
  angular.module('iTalkApp', ['ui.router',
                               'iTalkApp.config',
                               'iTalkApp.controllers',
                               'iTalkApp.services',
                               'iTalkApp.emailValidation',
                               'iTalkApp.telephoneValidation',
                               'iTalkApp.zipCodeValidation',
                               'iTalkApp.capitalizeFilter',
                               'iTalkApp.formatMDNFilter',
                               'iTalkApp.commonUtil',
                               'iTalkApp.urlUtils',
                               'iTalkApp.factory',
                               'iTalkApp.apiFactory',
                               'iTalkApp.searchFactory',
                               'iTalkApp.exceptionFactory'
                            ]);
