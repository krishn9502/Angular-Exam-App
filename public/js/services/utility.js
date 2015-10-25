(function(ExamApp) {
    ExamApp.factory("utility", ["DATABASE", "$stateParams", function(db, $stateParams) {
        var _pvtVars = {};
        _pvtVars.modelPartDetail = db.modelExamDetail.NET_LS.modelPartDetail;
        _pvtVars.examStatusDetail = db.examStatusDetail;
        _pvtVars.allQuestions = db.lstQuestion;
        var _utility = {
            getDB: function(original) {
                return original ? db : angular.copy(db);
            },
            setData: function(name, value) {
                _pvtVars[name] = value;
            },
            getData: function(name) {
                return _pvtVars[name];
            },
            modifyTotalAnswered: function(selectedAnswerModel) {
                var examStatusDetail = _utility.getData("examStatusDetail");
                examStatusDetail.totalAnswered++;
            },
            modifyTotalNotAnswered: function(selectedAnswerModel) {
                var examStatusDetail = _utility.getData("examStatusDetail");
                examStatusDetail.totalNotAnswered--;
            },
            modifyMakredForReview: function(selectedAnswerModel) {
                var examStatusDetail = _utility.getData("examStatusDetail");
                examStatusDetail.totalMarkedReview++;
            },
            storeSelectedAnswer: function(answer) {
                var model = _utility.getData("allQuestions")[$stateParams.questionNo - 1];
                model.answerEntered = answer.key;
            },
            findSelectedSection: function(questionNo) {
                var modelPartDetail = _utility.getData("modelPartDetail"),
                    questionStartNo = 0,
                    totalPartQuestion = _utility.getData("allQuestions").length,
                    modelPartName;
                for (modelPartName in modelPartDetail) {
                    if (totalPartQuestion = modelPartDetail[modelPartName], 
                        questionStartNo = totalPartQuestion.questionStartNo, 
                        totalPartQuestion = questionStartNo - 1 + totalPartQuestion.totalPartQuestion, 
                        questionNo >= questionStartNo && questionNo <= totalPartQuestion) {
                        return modelPartName;
                    }
                }
            },
            modifyQuestionDetails: function(stateParams, property, additional) {
                (stateParams = _utility.getData("allQuestions")[stateParams.questionNo - 1]) 
                    && (stateParams[property] = true, additional && additional(stateParams));
            },
            resetButtonVisibility: function(button) {
                var sidebarList = $(".sidebar-buttons-lists");
                sidebarList.animate({
                    scrollTop: sidebarList.find("li:eq(" + ($(button).text() - 1) + ")").offset().top - sidebarList.offset().top
                });
            }
        };
        return _utility;
    }]);
})(angular.module("ExamApp"));