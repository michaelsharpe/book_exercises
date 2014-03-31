function ToDoController($scope){
  $scope.formData = {};

  $scope.toDoArray = [
    {content: "Make a basic Angular MVC", done: false},
    {content: "Take over the world", done: false}
  ];

  $scope.remove = function(index){
    $scope.toDoArray.splice(index, 1);
  };

  $scope.add = function(newTodo){
    var newTodo = {
      content: $scope.formData.content,
      done: false
    }
    
    $scope.toDoArray.push(newTodo);
  };
}