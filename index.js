$(document).ready(function () {
    $('title').append("Ready Freddy");
    $('p').append("Big Frank is here");
    $('#Section1').append("Section changes to test css");
    //_KSM.draw(100,570, 100, 180);
    //var Instring = prompt("What is your name beasty", " ");
    //alert(_FINDFRANKIE.findIndex(Instring) + " is whre the name starts");

    var myString = prompt("How many Frankies can we find", " ");
    alert(_FindAllFrankies.findTheBoy(myString) + " is how many Frankies we found");

    checkSubtrings.cutString();
});


var _KSM =
    {
        draw: function (left, top, right, bottom) {
            var canvas = document.getElementById('theCanvas');
            if (canvas.getContext) {
                var context = canvas.getContext('2d');
                context.outerHeight = '500px'
                context.strokeStyle = 'black';
                context.fillStyle = 'silver';
                context.fillRect(left, top, right, bottom);
                context.strokeRect(left, top, right, bottom);
            }
        }
    };

var _FINDFRANKIE = {

    findIndex: function (inString) {
        return inString.indexOf("Frank", 0);
    }

};


var _FindAllFrankies = {
   
   

    findTheBoy: function (inString) {
        var foundAtPosition = 0;
        var frankieCount = 0;

        while (foundAtPosition != -1) {
            foundAtPosition = inString.indexOf("Frank", foundAtPosition);

            if (foundAtPosition != -1) {
                frankieCount++;
                foundAtPosition++;
            }
        }
        return frankieCount;
    }

};

var checkSubtrings = {

    cutString: function() {
        var whatString = prompt("What String To Cut: ", "JavaScript");

        //var retString = whatString.substring(0, 4);
        //return alert("New String Is " + retString);

        whatString = prompt("Second String Test", "More Java Script");
        retString = whatString.substr(0, 4);
        return alert("The Second String is: " + retString);
    }
    
        
};
