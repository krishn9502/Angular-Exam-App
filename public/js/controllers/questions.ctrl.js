(function(ExamApp) {
    ExamApp.controller("questionsCtrl", ["utility", "$stateParams", "$location", function(utility, $stateParams, $location) {
        this.questionNo = +$stateParams.questionNo;
        this.selectedQuestionSection = utility.getData("modelPartDetail");
        this.selectedPart = this.selectedQuestionSection[utility.findSelectedSection(this.questionNo)];
        this.selectedQuestion = utility.getData("allQuestions")[$stateParams && this.questionNo - 1];
        this.examStatusDetail = utility.getData("examStatusDetail");
        this.getSelectedClass = function(selectedPartName) {
            return selectedPartName === $stateParams.partName;
        };
        this.modifyQuestionDetails = function(property, answer) {
            if (this.answerNotAllworedAfterMaxAttempt()) {
                return;
            }
            utility.modifyQuestionDetails($stateParams, property, function(selectedAnswerModel) {
                if (!selectedAnswerModel.answerEntered) {
                    utility.modifyTotalAnswered();
                    utility.modifyTotalNotAnswered();
                }
                utility.storeSelectedAnswer(answer);
            });
            if (!this.selectedQuestion.isCompleteDone && this.selectedQuestion.isComplete) {
                this.selectedQuestion.isCompleteDone = true;
                this.selectedPart.totalPartAnswered++;
                this.selectedPart.totalPartNotAnswered--;
            }
        };
        this.answerNotAllworedAfterMaxAttempt = function() {
            return this.selectedPart.totalPartAnswered + this.selectedPart.totalPartMarkReview >= this.selectedPart.maxAttemptQuestion || this.examStatusDetail.totalMaxAttempt <= this.examStatusDetail.totalAnswered + this.examStatusDetail.totalMarkedReview;
        };
        utility.modifyQuestionDetails($stateParams, "isVisited");
        utility.setData("isQuestionDisabled", this.answerNotAllworedAfterMaxAttempt());
    }]);
})(angular.module("ExamApp"));