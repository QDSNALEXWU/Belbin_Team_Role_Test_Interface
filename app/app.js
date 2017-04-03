'use strict';
// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
myApp.controller('Controller1', ['$scope', function($scope ) {



    
    var url1 = sessionStorage.getItem('img1') ; 
    var url2 = sessionStorage.getItem('img2') ; 
    console.log(url1);
    console.log(url2);
    $("#img1").css('display', "none");
    $("#img2").css('display', "none");



    var explode = function(){
        $("#img1").attr('src', url1);
        $("#img2").attr('src', url2);
        $("#img1").css('display', "block");
        $("#img2").css('display', "block");
        $("#loader").css('display', "none");
    };


    if(url1 && url2) {
        setTimeout(explode, 3000);  

    }


    $scope.arr = [0,1,2,3,4,5,6,7,8,9,10];
    $scope.arr_A =  $scope.arr_B =  $scope.arr_C =  $scope.arr_D =  $scope.arr_E =  $scope.arr_F =  $scope.arr_G =  $scope.arr_H =  $scope.arr_I = $scope.arr; 
    $scope.sum = 10 ;
    //var result = [] ;
    $("#next").css("display","none") ;

    /*
     $scope.jump = function() { 
          alert('test') ;  
     };
    */

     $scope.change_points = function() {
  
        console.log(sessionStorage.getItem('result')) ;

        var node = $scope.Q1 ; 
        var sum = node.A + node.B + node.C + node.D + node.E + node.F + node.G + node.H ; 
        $scope.sum = sum ;

        if (sum == 10) {
            $("#next").css("display","block") ;
        }
        else {
            $("#next").css("display","none") ; 
        }

        //console.log($scope.sum) ;   
        if (node.A==0)
            $scope.arr_A = $scope.arr.slice(0,-sum); 
        else 
            $scope.arr_A = $scope.arr ; 

        if (node.B==0) 
            $scope.arr_B = $scope.arr.slice(0,-sum); 
        else 
            $scope.arr_B = $scope.arr ;     

        if (node.C==0) 
            $scope.arr_C = $scope.arr.slice(0,-sum); 
        else 
            $scope.arr_C = $scope.arr ;    

        if (node.D==0) 
            $scope.arr_D = $scope.arr.slice(0,-sum); 
        else 
            $scope.arr_D = $scope.arr ;

        if (node.E==0) 
            $scope.arr_E = $scope.arr.slice(0,-sum); 
        else 
            $scope.arr_E = $scope.arr ;

        if (node.F==0) 
            $scope.arr_F = $scope.arr.slice(0,-sum); 
        else 
            $scope.arr_F = $scope.arr ;

        if (node.G==0) 
            $scope.arr_G = $scope.arr.slice(0,-sum);
        else 
            $scope.arr_G = $scope.arr ;

        if (node.H==0) 
            $scope.arr_H = $scope.arr.slice(0,-sum); 
        else 
            $scope.arr_H = $scope.arr ;
        //console.log(sum) ;
        //$scope.arr = $scope.arr.slice(0,-sum);
        //console.log($scope.arr) ;
    };


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
    document.getElementById("next").onclick = function(){
        // /result.push($scope.Q1) ;
        //console.log(result) ;
        var node = $scope.Q1 ; 
        var data = [node.A,node.B,node.C,node.D,node.E,node.F,node.G,node.H] ; 
        var s =  sessionStorage.getItem('result');
        
        if (s)
            s += data.join() + ","
        else
            s = data.join() + ","

        var nums = s.split(",") ;
        nums.pop() ;
        

        if (nums.length == 56){
          
            console.log("collect all the results, doing calculation") ;
            var q1 = nums.slice(0,8);
            var q2 = nums.slice(8,16);
            var q3 = nums.slice(16,24);
            var q4 = nums.slice(24,32);
            var q5 = nums.slice(32,40);
            var q6 = nums.slice(40,48);
            var q7 = nums.slice(48,56);

            // g a h d b f e 
            var IM = Number(q1[6]) + Number(q2[0]) + Number(q3[7]) + Number(q4[3]) + Number(q5[1]) + Number(q6[5]) + Number(q7[4]) ;

            // d b a h f c g 
            var CO = Number(q1[3]) + Number(q2[1]) + Number(q3[0]) + Number(q4[7]) + Number(q5[5]) + Number(q6[2]) + Number(q7[6]) ;
            
            //f e c b d g a 
            var SH = Number(q1[5]) + Number(q2[4]) + Number(q3[2]) + Number(q4[1]) + Number(q5[3]) + Number(q6[6]) + Number(q7[0]) ;

            //c g d e h a f 
            var PL = Number(q1[2]) + Number(q2[6]) + Number(q3[3]) + Number(q4[4]) + Number(q5[7]) + Number(q6[0]) + Number(q7[5]) ;

            //a c f g e h d 
            var RI = Number(q1[0]) + Number(q2[2]) + Number(q3[5]) + Number(q4[6]) + Number(q5[4]) + Number(q6[7]) + Number(q7[3]) ;

            //h d g c a e b 
            var ME = Number(q1[7]) + Number(q2[3]) + Number(q3[6]) + Number(q4[2]) + Number(q5[0]) + Number(q6[4]) + Number(q7[1]) ;

            //b f e a c b h 
            var TW = Number(q1[1]) + Number(q2[5]) + Number(q3[4]) + Number(q4[0]) + Number(q5[2]) + Number(q6[1]) + Number(q7[7]) ;

            // e h b f g d c 
            var CF = Number(q1[4]) + Number(q2[7]) + Number(q3[1]) + Number(q4[5]) + Number(q5[6]) + Number(q6[3]) + Number(q7[2]) ;

            var res = [IM,CO,SH,PL,RI,ME,TW,CF] ;
            
            //console.log(res) ;
            //res = [10, 10, 10, 10, 10, 10, 10, 0] ;
            console.log(res) ;
            var max1 = Math.max(...res) ;
            var index1 = res.indexOf(max1);
            
            if (index1 > -1) {
                res.splice(index1, 1);
            }   

            console.log(res) ;
            var max2 = Math.max(...res) ;
            var index2 = res.indexOf(max2);
            
            if (index2 == index1) {
                index2 = index1 + 1 ;
            }

            // set the image 
            var dict= ["IM","CO","SH","PL","RI","ME","TW","CF"]; 
            var name1 = dict[index1];
            var name2 = dict[index2];

            var path1 = "images/" + name1 + ".png" ;
            var path2 = "images/" + name2 + ".png" ;

            //$("#img1").attr('src', path1);
            //$("#img2").attr('src', path2);
            console.log(path1);
            console.log(path2);
            sessionStorage.setItem('img1', path1);
            sessionStorage.setItem('img2', path2);

        }
        

        // store the data in session storage
        sessionStorage.setItem('result', s);

    };   

}]);



