/**
 * Created by Ethan on 22/12/2015.
 */

describe('todo apps test', function() {

  describe('todo service', function() {

    var todoService;
    var $httpBackend;

    beforeEach(function() {
      module('todo');
      inject(function($injector) {
        todoService = $injector.get("todoService");
        $httpBackend = $injector.get("$httpBackend");
      });
    });

    it('should return a array of todos', function(done) {
      todoService.load();
      done(function() {
        console.log(todoService);
        expect(todoService.todos.length).toBe(3);
      });
    });

    it('should return a array from mock', function() {
      $httpBackend.expectGET('http://192.168.245.253:9091/todos').respond(200, []);
      todoService.load();
      expect(todoService.todos.length).toBe(0);
    });

  });

  it('should return', function() {
    expect(true).toBe(true);
  });
});










