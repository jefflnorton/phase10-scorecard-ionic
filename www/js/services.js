angular.module('phase10-scorecard.services', [])

.factory('ConfigService', ['$http', function($http) {
    var configFile = './config.json';

    $http.get(configFile).then(function(res) {
      console.log(res);
      config = res.data;
    }, function (err) {
      throw err;
    });

    var configService = {};

    configService.get = function() {
      return config;
    };

    return configService;
}])

.factory('LoginService', ['$http', 'ConfigService', function($http, ConfigService) {
  var URI_LOGIN = '/Users/login';

  var loginService = {};

  loginService.login = function(credentials) {
    var config = ConfigService.get();
    return $http.post(config.server.baseUrl + URI_LOGIN, credentials);
  }

  return loginService;
}]);
