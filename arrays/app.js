var employees = [
    {firstName: "bunny", lastname: "chinnu", gender: "male", salary: 29000},
            {firstName: "pinky", lastname: "lovely", gender: "female", salary: 28000},     
            {firstName: "chupky", lastname: "bably", gender: "female", salary: 27000},     
            {firstName: "ricky", lastname: "nick", gender: "male", salary: 80000},       
            {firstName: "lucky", lastname: "mikky", gender: "female", salary: 70000}, 
];
$scope.employees = employees;
$scope.sortColumn = "firstName";

$scope.reverseSort = false;