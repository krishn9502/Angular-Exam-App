(function(ExamApp) {
    ExamApp.controller("page1SidebarCtrl", ["utility", "$stateParams", "$location", function(utility, $stateParams, $location) {
        this.gotoSelectedQuestion = function(questionNo) {
            $location.path("/questions/" + utility.findSelectedSection(questionNo) + "/" + questionNo);
        };
        this.getSelectedClass = function(selectedPartName) {
            return selectedPartName === $stateParams.partName;
        };
    }]);
})(angular.module("ExamApp"));