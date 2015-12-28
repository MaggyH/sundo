/**
 * Created by Ethan on 22/12/2015.
 */

var app = angular.module('todo', ['ui.bootstrap']);
app.controller('todoController', function(todoService) {
  todoService.load();
});

app.service('todoService', function($http) {
  var vm = this;
  vm.todos = [];

  vm.load = function() {
    $http.get('http://192.168.245.253:8081/todos', function(res) {
      vm.todos = res.data;
    });
  };
});
