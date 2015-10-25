(function(ExamApp) {
    ExamApp.controller("globalExamStatusCtrl", ["$scope", "utility", "$location", function($scope, utility, $location) {
        this.selectedQuestionSection = utility.getData("modelPartDetail");
        this.examStatusDetail = utility.getData("examStatusDetail");
        this.allQuestions = utility.getData("allQuestions").slice(0, this.examStatusDetail.totalQuestion);
        this.getSectionFirstQuestion = function(partName) {
            $location.path("/questions/" + partName + "/" + this.selectedQuestionSection[partName].questionStartNo);
        };
        $scope.$watch(function() {
            return utility.getData("examStatusDetail");
        }, function() {
            this.examStatusDetail = utility.getData("examStatusDetail");
        });
        angular.element(document).ready(function() {
            $(document).on("click", ".sidebar-buttons-lists li[ng-repeat]", function(element) {
                utility.resetButtonVisibility(this);
            });
        });
        (!$location.path() || $location.path() === "/") && $location.path("/questions/PartA/1");
    }]);
})(angular.module("ExamApp"));