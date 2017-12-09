questions = [{
    Q: 'Who was the main author of the "Declaration of Independence"?',
    A: "George Washington",
    B: "Benjamin Franklin",
    C: "Thomas Jefferson",
    D: "John Adams",
    Correct: "Thomas Jefferson"
  },
  {
    Q: "Who was the first president of the United States?",
    A: "George Washington",
    B: "John Adams",
    C: "Thomas Jefferson",
    D: "Abraham Lincoln",
    Correct: "George Washington"
  },
  {
    Q: "How many stripes does the American flag have?",
    A: 13,
    B: 50,
    C: 20,
    D: 15,
    Correct: 13
  },
  {
    Q: "Who was Thurgood Marshall?",
    A: "He was a slave",
    B: "He was a lawyer and a judge",
    C: "He was a president",
    D: "He wanted better working conditions in mines",
    Correct: "He was a lawyer and a judge"
  },
  {
    Q: "What African American baseball player broke the color barrier in Major League Baseball?",
    A: "Ernie Davis",
    B: "Jackie Robinson",
    C: "Hank Aaron",
    D: "Babe Ruth",
    Correct: "Jackie Robinson"
  },
  {
    Q: 'Who wrote "The Star-Spangled Banner"?',
    A: "Francis Scott Key",
    B: "Todd Lincoln",
    C: "Besty Ross",
    D: "Martha Washington",
    Correct: "Francis Scott Key"
  },
  {
    Q: 'The "Star-Spangled Banner" was written about the British attack on which fort?',
    A: "Fort McHenry",
    B: "Forst Sumter",
    C: "Fort Washington",
    D: "Fort Pillow",
    Correct: "Fort McHenry"
  },
  {
    Q: 'Where do you find the phrase, "of the people, by the people and for the people"?',
    A: "The Deleartaion of Independence",
    B: "The President's Oath of Office",
    C: "The Gettysburg Address",
    D: "THe Constituion",
    Correct: "The Gettysburg Address"
  },
  {
    Q: "What country was the Battle of the Bulge fought against?",
    A: "Great Britian",
    B: "Germany",
    C: "France",
    D: "Japan",
    Correct: "Germany"
  },
  {
    Q: 'What country gave the US "The Statue of Liberty?"',
    A: "France",
    B: "Canada",
    C: "Great Britian",
    D: "Germany",
    Correct: "France"
  }
]

var correctAnswer;
var currentA;
var currentB;
var currentC;
var currentD;
var correct = 0;
var wrong = 0;
var timeout = false;
var timerunning = false;
var counter;

$("#start").on("click", function() {
  $(".answer").empty()
  $("#time").text(30)
  timeRunning()
  i = 0;
  $("#question").append(questions[i].Q)
  $("#answerA").append(questions[i].A)
  $("#answerB").append(questions[i].B)
  $("#answerC").append(questions[i].C)
  $("#answerD").append(questions[i].D)
  currentA = questions[i].A
  currentB = questions[i].B
  currentC = questions[i].C
  currentD = questions[i].D
  correctAnswer = questions[i].Correct
});

$("#next").on("click", function() {
  if (i >= questions.length - 1) {
    setTimeout(function() {
      alert("Correct: " + correct + "\n" + "Wrong: " + wrong);
    }, 100);
    return;
  } else {
    if (timerunning) {
      clearInterval(counter);
      timerunning = false;
    }
    $("#time").text(30)
    timeRunning()

    i++;
    $(".answer").empty()
    $("#question").append(questions[i].Q)
    $("#answerA").append(questions[i].A)
    $("#answerB").append(questions[i].B)
    $("#answerC").append(questions[i].C)
    $("#answerD").append(questions[i].D)
    currentA = questions[i].A
    currentB = questions[i].B
    currentC = questions[i].C
    currentD = questions[i].D
    correctAnswer = questions[i].Correct
  }
})

$("#answerA").on("click", function() {
  if (timeout) {
    setTimeout(function() {
      alert("Please click next to continue");
    }, 100);
    timeout = false;
    return;
  }
  if (currentA === correctAnswer) {
    setTimeout(function() {
      alert("You are correct!");
    }, 100);
    correct++;
  } else {
    setTimeout(function() {
      alert("You are wrong! The correct answer is " + correctAnswer);
    }, 100);
    wrong++;
  }
});

$("#answerB").on("click", function() {
  if (timeout) {
    setTimeout(function() {
      alert("Please click next to continue");
    }, 100);
    timeout = false;
    return;
  }
  if (currentB === correctAnswer) {
    setTimeout(function() {
      alert("You are correct!");
    }, 100);
    correct++;
  } else {
    setTimeout(function() {
      alert("You are wrong! The correct answer is " + correctAnswer);
    }, 100);
    wrong++;
  }
});

$("#answerC").on("click", function() {
  if (timeout) {
    setTimeout(function() {
      alert("Please click next to continue");
    }, 100);
    timeout = false;
    return;
  }
  if (currentC === correctAnswer) {
    setTimeout(function() {
      alert("You are correct!");
    }, 100);
    correct++;
  } else {
    setTimeout(function() {
      alert("You are wrong! The correct answer is " + correctAnswer);
    }, 100);
    wrong++;
  }
});

$("#answerD").on("click", function() {
  if (timeout) {
    setTimeout(function() {
      alert("Please click next to continue");
    }, 100);
    timeout = false;
    return;
  }
  if (currentD === correctAnswer) {
    setTimeout(function() {
      alert("You are correct!");
    }, 100);
    correct++;
  } else {
    setTimeout(function() {
      alert("You are wrong! The correct answer is " + correctAnswer);
    }, 100);
    wrong++;
  }
});

function timeRunning() {
  var count = 30;

  counter = setInterval(timer, 1000);

  function timer() {
    count = count - 1; {
      if (count <= -1) {
        setTimeout(function() {
          alert("You are out of time! Correct answer is " + correctAnswer);
        }, 100);
        clearInterval(counter);
        timeout = true;
        return;
      } else if (count <= -1) {
        clearInterval(counter);
        return;
      }

      $("#time").text(count);
      timerunning = true;
    }
  }
}