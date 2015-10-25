(function(ExamApp) {
    ExamApp.controller("page1FooterCtrl", ["$stateParams", "$location", "utility", function($stateParams, $location, utility) {
        this.questionNo = +$stateParams.questionNo;
        this.isFirstQuestionShowing = this.questionNo === 1 || false;
        this.examStatusDetail = utility.getData("examStatusDetail");
        this.isLastQuestionShowing = this.questionNo === utility.getData("allQuestions").slice(0, this.examStatusDetail.totalQuestion).length || false;
        this.showPrevQuestion = function() {
            $location.path("/questions/" + utility.findSelectedSection(this.questionNo - 1) + "/" + (this.questionNo - 1));
        };
        this.showNextQuestion = function() {
            $location.path("/questions/" + utility.findSelectedSection(this.questionNo + 1) + "/" + (this.questionNo + 1));
        };
        this.modifyQuestionDetails = function(property) {
            if (!utility.getData("isQuestionDisabled")) {
                utility.modifyQuestionDetails($stateParams, property);
                utility.modifyMakredForReview(utility.findSelectedSection(this.questionNo));
            }
        };
        this.goBack = function() {
            history.back();
        };
    }]);
})(angular.module("ExamApp"));