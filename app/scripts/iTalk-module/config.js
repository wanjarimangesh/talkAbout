  'use strict';
  angular.module('iTalkApp.config', [])
   .config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
     .state('signup', {
        url: '/signup',
        templateUrl: 'scripts/iTalk-module/views/signup.html',
        controller: 'signUpController'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'scripts/iTalk-module/views/about.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'scripts/iTalk-module/views/contact.html'
      })
      .state('itags_view', {
        url: '/itags_view',
        templateUrl: 'scripts/iTalk-module/views/itags_view.html'
      })
      .state('mailNotifyFollow', {
        url: '/mailNotifyFollow',
        templateUrl: 'scripts/iTalk-module/views/mail_notify_follow.html'
      })
     .state('mailNotifyTags', {
        url: '/mailNotifyTags',
        templateUrl: 'scripts/iTalk-module/views/mail_notify_tags.html'
      })
    .state('newTagDisplay', {
        url: '/newTagDisplay',
        templateUrl: 'scripts/iTalk-module/views/new_tag_display.html'
      })
    .state('newsletter', {
        url: '/newsletter',
        templateUrl: 'scripts/iTalk-module/views/newsletter.html'
      })
    .state('terms_privacy', {
        url: '/terms_privacy',
        templateUrl: 'scripts/iTalk-module/views/terms_privacy.html'
      })
    .state('userProfileEdit', {
        url: '/userProfileEdit',
        templateUrl: 'scripts/iTalk-module/views/user_profile-edit.html'
      })
    .state('userProfile', {
        url: '/userProfile',
        templateUrl: 'scripts/iTalk-module/views/user_profile.html'
      })
    .state('userHomeIndividualItag', {
        url: '/userHomeIndividualItag',
        templateUrl: 'scripts/iTalk-module/views/userhome_individual_itag.html'
      })
    .state('userHomeTagCreation', {
        url: '/userHomeTagCreation',
        templateUrl: 'scripts/iTalk-module/views/userhome_tag_creation.html'
      })
    
    
    
	$urlRouterProvider.otherwise('/signup');
  })
  .constant('URL_CONST', {
    /* BASE URL constants 
    'GET_REQUEST_BASE_URL': 'http://ergast.com/api/f1/2014/',
    'GET_REQUEST_FILE_NAME': 'driverStandings.json',
    'GET_REQUEST_BASE_URL_WITH_QUERY': 'http://weather.yahooapis.com',
    'GET_REQUEST_BASE_URL_WITH_QUERY_PARAM_FILE_NAME': 'forecastrss',
    'GET_REQUEST_BASE_URL_WITH_PARAM_FILE_NAME': 'drivers/{id}/driverStandings.json',
    'POST_REQUEST_BASE_URL': 'http://posttestserver.com/',
    'POST_REQUEST_FILE_NAME': 'post.php',
    'BASE_URL':'http://mangeshwanjari-test.apigee.net/v1/sortedData',
    'EARLIER_DATES_FIRST':'earlierDatesFirst',
    'HIGH_TO_LOW':'hightoLow',
    'LATER_DATES_FIRST':'laterDatesFirst',
    'LOW_TO_HIGH':'lowToHigh'*/
});
