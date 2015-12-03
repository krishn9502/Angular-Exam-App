(function(app) {
    app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider.state("home", {
            url: "/",
            views: {
                "header": {
                    controller: "page1HeaderCtrl",
                    controllerAs: "page1Header",
                    templateUrl: "views/header/header.tpl.html"
                },
                "main": {
                    controller: "page1MainCtrl",
                    controllerAs: "page1Main",
                    templateUrl: "views/page1/page1.tpl.html"
                },
                "sidebar": {
                    controller: "page1SidebarCtrl",
                    controllerAs: "page1Sidebar",
                    templateUrl: "views/sidebar/sidebar.tpl.html"
                },
                "footer": {
                    controller: "page1FooterCtrl",
                    controllerAs: "page1Footer",
                    templateUrl: "views/footer/footer.tpl.html"
                }
            },
            data: {
                pageTitle: "Home Page"
            }
        }).state("/questions/:partName/:questionNo", {
            url: "/questions/:partName/:questionNo",
            views: {
                "header": {
                    controller: "page1HeaderCtrl",
                    controllerAs: "page1Header",
                    templateUrl: "views/header/header.tpl.html"
                },
                "main": {
                    controller: "questionsCtrl",
                    controllerAs: "questionsCtrl",
                    templateUrl: "views/page1/questions.tpl.html"
                },
                "sidebar": {
                    controller: "page1SidebarCtrl",
                    controllerAs: "page1Sidebar",
                    templateUrl: "views/sidebar/sidebar.tpl.html"
                },
                "footer": {
                    controller: "page1FooterCtrl",
                    controllerAs: "page1Footer",
                    templateUrl: "views/footer/footer.tpl.html"
                }
            },
            data: {
                pageTitle: "Questions"
            }
        }).state("/completeQuestionPaper", {
            url: "/completeQuestionPaper",
            views: {
                "header": {
                    controller: "page1HeaderCtrl",
                    controllerAs: "page1Header",
                    templateUrl: "views/header/header.tpl.html"
                },
                "main": {
                    controller: "completeQuestionPaperCtrl",
                    controllerAs: "completeQuestionPaperCtrl",
                    templateUrl: "views/page2/complete-question-paper.tpl.html"
                },
                "sidebar": {
                    controller: "page1SidebarCtrl",
                    controllerAs: "page1Sidebar",
                    templateUrl: "views/sidebar/sidebar.tpl.html"
                },
                "footer": {
                    controller: "page1FooterCtrl",
                    controllerAs: "page1Footer",
                    templateUrl: "views/footer/complete-paper-footer.tpl.html"
                }
            },
            data: {
                pageTitle: "complete Question Paper"
            }
        }).state("/submit", {
            url: "/submit",
            views: {
                "header": {
                    controller: "page1HeaderCtrl",
                    controllerAs: "page1Header",
                    templateUrl: "views/header/header.tpl.html"
                },
                "fullView": {
                    controller: "page1SidebarCtrl",
                    controllerAs: "page1Sidebar",
                    templateUrl: "views/page1/page1.tpl.html"
                },
                "footer": {
                    controller: "page1FooterCtrl",
                    controllerAs: "page1Footer",
                    templateUrl: "views/footer/submit-footer.tpl.html"
                }
            },
            data: {
                pageTitle: "complete Question Paper"
            }
        }).state("/reviewnotanswered", {
            url: "/reviewnotanswered",
            views: {
                "header": {
                    controller: "page1HeaderCtrl",
                    controllerAs: "page1Header",
                    templateUrl: "views/header/header.tpl.html"
                },
                "fullView": {
                    controller: "reviewAnswersCntrl",
                    controllerAs: "reviewAnswers",
                    templateUrl: "views/page2/review-not-answers.tpl.html"
                },
                "footer": {
                    controller: "page1FooterCtrl",
                    controllerAs: "page1Footer",
                    templateUrl: "views/footer/submit-footer.tpl.html"
                }
            },
            data: {
                pageTitle: "Review Answers"
            }
        }).state("/reviewall", {
            url: "/reviewall",
            views: {
                "header": {
                    controller: "page1HeaderCtrl",
                    controllerAs: "page1Header",
                    templateUrl: "views/header/header.tpl.html"
                },
                "fullView": {
                    controller: "reviewAnswersCntrl",
                    controllerAs: "reviewAnswers",
                    templateUrl: "views/page2/review-all-answers.tpl.html"
                },
                "footer": {
                    controller: "page1FooterCtrl",
                    controllerAs: "page1Footer",
                    templateUrl: "views/footer/submit-footer.tpl.html"
                }
            },
            data: {
                pageTitle: "Review Answers"
            }
        }).state("/examend", {
            url: "/examend",
            views: {
                "header": {
                    controller: "page1HeaderCtrl",
                    controllerAs: "page1Header",
                    templateUrl: "views/header/header.tpl.html"
                },
                "fullView": {
                    controller: "examEndCtrl",
                    controllerAs: "examEndCtrl",
                    templateUrl: "views/page2/exam-end.tpl.html"
                },
                "footer": {
                    controller: "page1FooterCtrl",
                    controllerAs: "page1Footer",
                    templateUrl: "views/footer/submit-footer.tpl.html"
                }
            },
            data: {
                pageTitle: "Review Answers"
            }
        });
    }]);
})(angular.module("ExamApp"));
