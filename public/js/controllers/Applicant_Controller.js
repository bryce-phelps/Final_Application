ApplicationApp.controller('ApplicantsCtrl', function($scope, Applicant){
  $scope.Applicant = new Applicant();

  $scope.add = function(applicant){
    Applicant.save(applicant)
  }
})
