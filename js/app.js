var pages = [
        {
        pictureUrl: "https://i.ytimg.com/vi/-kkEj4rI2t8/maxresdefault.jpg",
        answers: [
            {
                name: "Counter strike",
                weight: 1
            },
            {
                name: "UT",
                weight: 0
            },
            {
                name: "Call of Duty",
                weight: 0
            },
            {
                name: "Halo",
                weight: 0
            }
        ]
        },

        {
        pictureUrl: "http://cdn.arstechnica.net/wp-content/uploads/sites/3/2015/09/PES-2016-5.jpg",
        answers: [
            {
                name: "Street Footy",
                weight: 0
            },
            {
                name: "Football Manager",
                weight: 0
            },
            {
                name: "Pro Evolution Soccer",
                weight: 1
            },
            {
                name: "Fifa",
                weight: 0
            }
        ]
        },

        {
        pictureUrl: "https://cdn.steamstatic.com/apps/dota2/images/reborn/day1/GuidedBotMatches.jpg",
        answers: [
            {
                name: "League of Legends",
                weight: 0
            },
            {
                name: "Dota 2",
                weight: 1
            },
            {
                name: "World of Warcraft",
                weight: 0
            },
            {
                name: "Heroes of Newerth",
                weight: 0
            }
        ]
        },

        {
        pictureUrl: "http://i1-news.softpedia-static.com/images/news2/Blizzard-Releases-All-Warcraft-3-Assets-in-Starcraft-2-472003-6.jpg",
        answers: [
            {
                name: "Starcraft",
                weight: 0
            },
            {
                name: "Warcraft 3",
                weight: 1
            },
            {
                name: "Age of Empires III",
                weight: 0
            },
            {
                name: "World of Warcraft",
                weight: 0
            }
        ]
        },

        {
        pictureUrl: "https://i.ytimg.com/vi/vSBTJEgIYgU/maxresdefault.jpg",
        answers: [
            {
                name: "Road Kill",
                weight: 0
            },
            {
                name: "Gangstar: Miami Vindication",
                weight: 0
            },
            {
                name: "Total Overdose",
                weight: 0
            },
            {
                name: "Grand Theft Auto",
                weight: 1
            }
        ]
        }
    ];

/*
 <div>
 <img src="lalal" id="pictureId">
 <div id="pollOptions"></div>
 </div>
 */

    var pageIndex = 0;
    var givenAnswers = [];

    function generatePage(index) {
        var currentObject = pages[index];

        $("#pictureId").attr("src", currentObject.pictureUrl);

        $("#pollOptions").html(generatePoll(currentObject.answers))

    }

    function generatePoll(answers) {
        var html = '<form id="myForm">';

        for (var i = 0; i < answers.length; i++) {
            html += '<input type="radio" onclick="submitAnswer(this)" name="' + answers[i].name + '" value=' + answers[i].weight + ' /> ' + answers[i].name + ' <br />'
        }

        html += '</form>';
        return html;
    }

    function submitAnswer(answer){

        givenAnswers.push(parseInt(answer.value));


        if (pageIndex == pages.length -1){
            $("#resultShow").text("You guessed correctly " + calculateResult(givenAnswers) + " out of 5 questions");
            
        }
        else {
            generatePage(++pageIndex);
        }

    }

    function calculateResult(givenAnswers){
        var result = 0;
        for(var i = 0; i < givenAnswers.length; i++){
            result += givenAnswers[i];
            $("#main").hide();
            $("h3").hide();
            $("#reload").show();
        }
        return result;
    }

$(document).ready(function() {

    generatePage(pageIndex);

});