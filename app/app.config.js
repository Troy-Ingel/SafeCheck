angular
.module('mainApp')
.config(configSettings);

configSettings.$inject = ['$httpProvider'];

function configSettings($httpProvider){
    $httpProvider.defaults.transformRequest = function(data){
        if (data === undefined){
            return data;
        }
        return $.param(data);
    }
}
