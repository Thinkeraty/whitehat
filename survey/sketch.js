var form, voter, survey;
var count = 0;
var question_1, question_2, question_3, question_4;
var email;
var question1, question2, question3, question4;
var database;
var form_input, submit, title, greeting;
var question_1_value, question_2_value, question_3_value, question_4_value
var voterEmailValue;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 800, 400);

  database = firebase.database();

  title = createElement('h1');
  title.html("Survey For School");
  title.position(displayWidth/2 - 120, displayHeight/2  - 350);

  greeting = createElement('h2');
  greeting.html("<p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;  &nbsp;Hello! <br> The following is a survey about our school,<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Sardar Patel Vidyalaya. </p>")
  greeting.position(displayWidth/2 - 200, displayHeight/2 - 250);

  question1 = createElement('h3', "Should S.P.V install A.Cs in classes for comfortable studies of children?");
  question_1 = createRadio();
  question_1.option("YES");
  question_1.option("NO");
  question_1.option("MAYBE");
  question_1_value = question_1.value();

  question_1.style('width', '200px');
  question_1.position(displayWidth/2 - 100, displayHeight/2 + 10)
  question1.position(displayWidth/2 - 280, displayHeight/2 - 50)

  question2 = createElement('h3', "Should there be class trips for providing children with worldly exposure?");
  question_2 = createRadio();
  question_2.option("YES");
  question_2.option("NO");
  question_2.option("MAYBE");
  question_2_value = question_2.value();

  question_2.style('width', '200px');
  question2.position(displayWidth/2 - 280, displayHeight/2 + 50)
  question_2.position(displayWidth/2 - 100, displayHeight/2 + 110)

  question3 = createElement('h3', "Should S.P.V rent A.C buses instead of normal buses from D.T.C to ensure <br> a comfortable travelling and also keep children safe from Delhi's harmful air?");
  question_3 = createRadio();
  question_3.option("YES");
  question_3.option("NO");
  question_3.option("MAYBE");
  question_3_value = question_3.value();

  question_3.style('width', '200px');
  question3.position(displayWidth/2 - 280, displayHeight/2 + 150)
  question_3.position(displayWidth/2 - 100, displayHeight/2 + 230)

  question4 = createElement('h3', "Would you be willing to contribute money to implement these ideas?");
  question_4 = createRadio();
  question_4.option("YES");
  question_4.option("NO");
  question_4.option("MAYBE");
   question_4_value = question_4.value();

  question_4.style('width', '200px');
  question4.position(displayWidth/2 - 280, displayHeight/2 + 270)
  question_4.position(displayWidth/2 - 100, displayHeight/2 + 330)

  email = createElement("h3");
  email.html("Your Email Id: ");
  email.position(displayWidth/2 - 70, displayHeight/2 + 400);
  email_input  = createInput();
  email_input.style('width', '250px')
  email_input.position(displayWidth/2 - 130, displayHeight/2 + 450)
  voterEmailValue = email_input.value();

  submit = createButton("Submit Response");
  submit.position(displayWidth/2 - 70, displayHeight/2 + 520);
  submit.style('margin-bottom', '20px');
}

function draw() {
  background(255,255,255);  
  drawSprites();

  submit.mousePressed(() => {
  question_1_vote();
  question_2_vote();
  question_3_vote();
  question_4_vote();

  count = count + 1;
  updateVoterCount();

  updateInputEmail();



  console.log(question_1.value());
  
})
}

  function question_1_vote() {
    database.ref('/Question1').update({
      vote: question_1.value()
    })
  }
  function question_2_vote() {
    database.ref('/Question2').update({
      vote: question_2.value()
    })
  }
  function question_3_vote() {
    database.ref('/Question3').update({
      vote: question_3.value()
    })
  }
  function question_4_vote() {
    database.ref('/Question4').update({
      vote: question_4.value()
    })
  }

function updateInputEmail() {
  database.ref('/').update({
    voterEmail: email_input.value()
  })
}

function updateVoterCount() {
  database.ref('/').update({
    voterCount: count
  })
}

