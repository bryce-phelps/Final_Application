var ApplicationApp = angular.module('ApplicationApp', ['ui.bootstrap', 'ngAnimate', 'ui.router', 'ngResource']);

ApplicationApp.config(function($stateProvider, $urlRouterProvider) {

    //$urlRouterProvider.otherwise('/');
    $stateProvider
        .state('/', {
            url: '/',
            templateUrl: 'index.html'

        })
})

ApplicationApp.controller('tabSetUp', function($scope, $rootScope, $state, $resource, $http) {
    //$scope.BasicHTML = true;

    $scope.oneAtATime = true;
    $scope.applicant = {
        BasicInfo: {
            BirthDate: " ",
            LastName: undefined,
            FirstName: undefined,
            Address: undefined,
            AppSuite: " ",
            City: undefined,
            State: undefined,
            Zip: undefined,
            TimeAddress: " ",
            Phone: undefined,
            Email: undefined
        },
        LegalInfo: {
            eightyes: false,
            eightno: false,
            proofyes: false,
            proofno: false,
            legalyes: false,
            legalno: false
        },
        PositionInfo: {
            Referral: " ",
            Position: undefined,
            Wage: " ",
            Start: undefined,
            Hours: " ",
            Start: " ",
            Hours: " ",
            Fulltime: false,
            Parttime: false,
            Resume: {}
        },
        EducationInfo: {
            HSinfo: {
                HSname: undefined,
                HSlocation: undefined,
                HScomplete: undefined,
                HSGrad: " "
            },
            CLinfo: {
                CLname: " ",
                CLlocation: " ",
                CLcomplete: " ",
                CLmajor: " "
            },
            BUinfo: {
                BUname: " ",
                BUlocation: " ",
                BUcomplete: " ",
                BUmajor: " "
            },
            Proinfo: {
                Proname: " ",
                Prolocation: " ",
                Procomplete: " ",
                Promajor: " "
            }
        },
        MoreInfo: {
            CurrMilNo: false,
            CurrMilYes: false,
            CrimeYes: false,
            CrimeNo: false,
            CrimeInfo: undefined,
            drugNo: false,
            drugYes: false,
            MilStart: "",
            MilEnd: "",
            Speciality: " ",
            PastMilNo: false,
            PastMilYes: false,
            CrimeInfo: undefined
        },
        WorkInfo: {
            Emp1: {
                EmpName: " ",
                EmpSup: " ",
                EmpAdd: " ",
                EmpSuite: " ",
                EmpCity: " ",
                EmpState: " ",
                EmpZip: " ",
                EmpPhone: " ",
                EmpJobTitle: " ",
                EmpStart: " ",
                EmpEnd: " ",
                EmpStartSal: " ",
                EmpEndSal: " "
            },
            Emp2: {
                Emp2Name: " ",
                Emp2Sup: " ",
                Emp2Add: " ",
                Emp2Suite: " ",
                Emp2City: " ",
                Emp2State: " ",
                Emp2Zip: " ",
                Emp2Phone: " ",
                Emp2JobTitle: " ",
                Emp2Start: " ",
                Emp2End: " ",
                Emp2StartSal: " ",
                Emp2EndSal: " "
            },
            Emp3: {
                Emp3Name: " ",
                Emp3Sup: " ",
                Emp3Add: " ",
                Emp3Suite: " ",
                Emp3City: " ",
                Emp3State: " ",
                Emp3Zip: " ",
                Emp3Phone: " ",
                Emp3JobTitle: " ",
                Emp3Start: " ",
                Emp3End: " ",
                Emp3StartSal: " ",
                Emp3EndSal: " "
            },
            EmpContactYes: false,
            EmpContactNo: false
        },
        FinalInfo: {
            Signature: undefined,
            PrintName: undefined,
            SignDate: "",
            extraNotes: " "
        }
    }

    // $scope.resume = function() {
    //     //$scope.hasResume = true;
    // }

    $scope.filesChanged = function(elm){
      $scope.resume = elm.files[0];
      if ($scope.resume == undefined){
        $scope.hasResume = false;
      }
      else{
        $scope.hasResume = true;
      }
      $scope.$apply();
    }

    $scope.register = function(form, user) {
        //Check for Basic
        // if (form.$invalid) {
        //     alert("Please fill out all required information.")
        // }
        $scope.submitted = true;
        //console.log(JSON.stringify(user))
        if ($scope.MoreDone == true && $scope.BasicDone == true && form.$invalid == false) {
            console.log("All Good")
            $http({
                method: 'POST',
                url: '/applicant',
                data: user
            }).success(function(data) {
                console.log("Posted Successfully")
            }).error(function(data) {
                console.error("Error in Posting")
            })
        }
    }

    $scope.setUp = function() {
        $scope.heading1 = true;
        $scope.heading2 = false;
        $scope.heading3 = false;
        $scope.heading4 = false;
        $scope.heading5 = false;

    }

    $scope.taboneNext = function(formone, user) {
        //console.log(user.resume)
        console.log($scope.resume)
        //user.PositionInfo.Resume = $scope.resume
        //console.log(user.PositionInfo.Resume)
        // console.log(user)
        $scope.submittedBasic = true;
        if (user.PositionInfo.employmenttype == "Part-Time") {
            $scope.Parttime = true;
            $scope.Fulltime = false;
        } else {
            $scope.Partime = false;
            $scope.Fulltime = true;
        }

        if (user.LegalInfo.eighteen == undefined) {
            $scope.eightblank = true;
        } else if (user.LegalInfo.eighteen == "yes") {
            user.LegalInfo.eightyes = true;
        } else {
            user.LegalInfo.eightno = true;
        }

        if (user.LegalInfo.proofeight == undefined) {
            //$scope.eightblank == true;
            user.LegalInfo.proofyes = false;
            user.LegalInfo.proofno = false;
        } else if (user.LegalInfo.proofeight == "yes") {
            user.LegalInfo.proofyes = true
        } else {
            user.LegalInfo.proofno = true
        }
        if ((user.LegalInfo.eightno == false && user.LegalInfo.eightyes == false)) {
            $scope.eightblank = true;
            $scope.eightgood = false;
            //formone.$invalid = true;
        } else if (user.LegalInfo.eightyes == true && (user.LegalInfo.proofyes == false && user.LegalInfo.proofno == false)) {
            $scope.proofReq = true;
            $scope.proofgood = false;
            $scope.showeight = true;
            $scope.eightblank = false;
            //formone.$invalid = true;
            //console.log($scope.showeight)
        } else if (user.LegalInfo.eightyes == true && user.LegalInfo.proofyes == true) {
            $scope.proofReq = false;
            $scope.eightblank = false;
            $scope.proofReq = false;
            $scope.eightgood = true;
            $scope.proofgood = true;
        } else {
            $scope.eightblank = false;
            $scope.proofReq = false;
            $scope.eightgood = true;
            $scope.proofgood = true;
            //form.$invalid = false;
        }
        //Code for US citizen check
        if (user.LegalInfo.legalforWork == undefined) {
            user.LegalInfo.legalno == false;
            user.LegalInfo.legalyes = false;
        } else if (user.LegalInfo.legalforWork == "yes") {
            user.LegalInfo.legalyes = true;
            user.LegalInfo.legalno = false;
        } else {
            user.LegalInfo.legalno = true;
            user.LegalInfo.legalyes = false;
        }
        if ((user.LegalInfo.legalno == false && user.LegalInfo.legalyes == false)) {
            //alert("Please selected yes/no if you are authorized to work in the United States")
            $scope.legalblank = true;
            $scope.legalgood = false;
        } else {
            $scope.legalblank = false;
            $scope.legalgood = true;
            //formone.$invalid = false;

        }
        //Code for Form check
        if ($scope.proofgood == false || $scope.eightgood == false || $scope.legalgood == false) {
            $scope.submittedBasic = true;
            formone.$invalid = true;
        } else {
            //$scope.submittedBasic = true;
            $scope.BasicDone = true;
            formone.$invalid = false;
            $scope.heading1 = false;
            $scope.heading2 = !$scope.heading2;
            $scope.heading3 = false;
            $scope.heading4 = false;
            $scope.heading5 = false;
        }
        //console.log(JSON.stringify(user))
    }

    $scope.tabtwoNext = function(Edform, user) {
        $scope.twoSubmitted = true;
        if (user.EducationInfo.HSinfo.HSname == undefined || user.EducationInfo.HSinfo.HScomplete == undefined || user.EducationInfo.HSinfo.HSlocation == undefined) {
            Edform.$invalid = true;
        } else {
            $scope.heading1 = false;
            $scope.heading2 = false;
            $scope.heading3 = !$scope.heading3;
            $scope.heading4 = false;
            $scope.heading5 = false;
            $scope.twoSubmitted = true;
        }
        //console.log(JSON.stringify(user))
    }

    $scope.tabtwoPrev = function() {
        $scope.heading1 = !$scope.heading1;
        $scope.heading2 = false;
        $scope.heading3 = false;
        $scope.heading4 = false;
        $scope.heading5 = false;
    }


    $scope.tabthreeNext = function(formMore, user) {
        //Check for more info
        $scope.submittedMore = true;
        if (user.MoreInfo.crime == undefined) {
            user.MoreInfo.CrimeYes = false;
            user.MoreInfo.CrimeNo = false;
        } else if (user.MoreInfo.crime == "yes") {
            user.MoreInfo.CrimeYes = true;
        } else {
            user.MoreInfo.CrimeNo = true;
        }
        if (user == undefined || (user.MoreInfo.CrimeYes == undefined && user.MoreInfo.CrimeNo == false) || (user.MoreInfo.CrimeYes == false && user.MoreInfo.CrimeNo == undefined) || (user.MoreInfo.CrimeYes == false && user.MoreInfo.CrimeNo == false)) {
            //alert('You must choose one.')
            $scope.CrimeReq = true;
            //formMore.$invalid = true;
            $scope.Crimegood = false;
            formMore.$invalid = true;
        } else if (user.MoreInfo.CrimeYes == true && user.MoreInfo.CrimeInfo == undefined) {
            //alert('Please List Convictions')
            $scope.showList = true;
            $scope.ConvicReq = true;
            formMore.$invalid = true;
            //formMore.$invalid = true;
            $scope.CrimeListGood = false;
        } else {
            $scope.ConvicReq = false;
            $scope.CrimeReq = false;
            $scope.CrimeListGood = true;
            $scope.Crimegood = true;
        }

        if (user.MoreInfo.drugTest == undefined) {
            user.MoreInfo.drugNo == false;
            user.MoreInfo.drugYes == false;
        } else if (user.MoreInfo.drugTest == "yes") {
            user.MoreInfo.drugYes = true;
        } else {
            user.MoreInfo.drugNo = true;
        }
        if (user == undefined || (user.MoreInfo.drugNo == false && user.MoreInfo.drugYes == false) || (user.MoreInfo.drugNo == false && user.MoreInfo.drugYes == undefined) || (user.MoreInfo.drugNo == undefined && user.MoreInfo.drugYes == false)) {
            $scope.drugReq = true;
            //formMore.$invalid = true;
            $scope.DrugGood = false;
            formMore.$invalid = true;
        } else {
            $scope.drugReq = false;
            $scope.DrugGood = true;
            formMore.$invalid = true;
        }
        if (user.MoreInfo.MilitaryEver == "yes") {
            user.MoreInfo.PastMilYes = true;
        } else {
            user.MoreInfo.PastMilNo = true;
        }
        if (user.MoreInfo.PastMilYes == true) {
            $scope.showMil = true;
        }
        if (user.MoreInfo.MilitaryCurrent == "no") {
            user.MoreInfo.CurrMilNo = true;
        } else {
            user.MoreInfo.CurrMilYes = true;
        }

        if (user.MoreInfo.CurrMilNo == true && user.MoreInfo.PastMilYes == true) {
            $scope.showDischarge = true;
        } else {
            $scope.showDischarge = false;
        }

        if ($scope.Crimegood == false || $scope.CrimeListGood == false || $scope.DrugGood == false) {
            formMore.$invalid = true;
            $scope.submittedMore = true;
        } else {
            $scope.heading1 = false;
            $scope.heading2 = false;
            $scope.heading3 = false;
            $scope.heading4 = !$scope.heading4;
            $scope.heading5 = false;;
            $scope.submittedMore = true;
            $scope.MoreDone = true;
            formMore.$invalid = false;
        }
        // else if($scope.hasResume == true) {
        //   $scope.heading1 = false;
        //   $scope.heading2 = false;
        //   $scope.heading3 = false;
        //   $scope.heading4 = false;
        //   $scope.heading5 = !$scope.heading5;;
        //   $scope.submittedMore = true;
        //   $scope.MoreDone = true;
        //   formMore.$invalid = false;
        // }
        //console.log(JSON.stringify(user))



    }

    $scope.tabthreePrev = function() {
        $scope.heading1 = false;
        $scope.heading2 = !$scope.heading2;
        $scope.heading3 = false;
        $scope.heading4 = false;
        $scope.heading5 = false;
    }

    $scope.tabfourNext = function(user) {
        if (user.WorkInfo.contactEmp == "yes") {
            user.WorkInfo.EmpContactYes = true;
        } else {
            user.WorkInfo.EmpContactNo = true;
        }
        $scope.heading1 = false;
        $scope.heading2 = false;
        $scope.heading3 = false;
        $scope.heading4 = false;
        $scope.heading5 = !$scope.heading5;
        $scope.fourSubmitted = true;
        //console.log(JSON.stringify(user))
    }

    $scope.tabfourPrev = function() {
        $scope.heading1 = false;
        $scope.heading2 = false;
        $scope.heading3 = !$scope.heading3;
        $scope.heading4 = false;
        $scope.heading5 = false;
    }

    $scope.tabfivePrev = function() {
        $scope.heading1 = false;
        $scope.heading2 = false;
        $scope.heading3 = false;
        $scope.heading4 = !$scope.heading4;
        $scope.heading5 = false;
    }

    //Calendar Stuff
    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function() {
        $scope.dt = null;
    };

    $scope.inlineOptions = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
    };

    $scope.dateOptions = {
        dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };

    // Disable weekend selection
    function disabled(data) {
        var date = data.date,
            mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    $scope.toggleMin = function() {
        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
    };

    $scope.toggleMin();

    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function() {
        $scope.popup2.opened = true;
    };

    $scope.open3 = function() {
        $scope.popup3.opened = true;
    };

    $scope.open4 = function() {
        $scope.popup4.opened = true;
    };

    $scope.open5 = function() {
        $scope.popup5.opened = true;
    };

    $scope.open11 = function() {
        $scope.popup11.opened = true;
    };

    $scope.open12 = function() {
        $scope.popup12.opened = true;
    };

    $scope.open13 = function() {
        $scope.popup13.opened = true;
    };

    $scope.open14 = function() {
        $scope.popup14.opened = true;
    };

    $scope.open15 = function() {
        $scope.popup15.opened = true;
    };

    $scope.open16 = function() {
        $scope.popup16.opened = true;
    };
    $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.altInputFormats = ['M!/d!/yyyy'];

    $scope.popup1 = {
        opened: false
    };

    $scope.popup2 = {
        opened: false
    };

    $scope.popup3 = {
        opened: false
    };

    $scope.popup4 = {
        opened: false
    };

    $scope.popup5 = {
        opened: false
    };

    $scope.popup11 = {
        opened: false
    };

    $scope.popup12 = {
        opened: false
    };

    $scope.popup13 = {
        opened: false
    };

    $scope.popup14 = {
        opened: false
    };

    $scope.popup15 = {
        opened: false
    };

    $scope.popup16 = {
        opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [{
        date: tomorrow,
        status: 'full'
    }, {
        date: afterTomorrow,
        status: 'partially'
    }];

    function getDayClass(data) {
        var date = data.date,
            mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    }

    $scope.upload = function(){
      $http({
          method: 'POST',
          url: '/applicant',
          data: user
      }).success(function(data) {
          console.log("Posted Successfully")
      }).error(function(data) {
          console.error("Error in Posting")
      })
    }

});
