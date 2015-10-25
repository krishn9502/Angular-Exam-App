(function(ExamApp) {
    ExamApp.controller("page1HeaderCtrl", ["$scope", "utility", function($scope, utility) {
        this.modelPartDetail = utility.getData("modelPartDetail");
    }]);
})(angular.module("ExamApp"));