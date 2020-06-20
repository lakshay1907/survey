class Form{
    constructor(){

    }
    display(){
        var title = createElement("h1");
        title.html("Student Survey");
    title.position(510,0);
    var greeting = createElement("h3");
  
    var input= createInput("");
   input.position(550,640);
   var button= createButton("Vote");
   button.position(700,640);
   button.mousePressed(function(){
       input.hide();
       button.hide();
       var mail = input.value();
       playerCount = playerCount+1;
       player.update(mail);
       player.updateCount(playerCount);
       greeting.html(" Thanks "+mail+" for voting ");
       greeting.position(450,640);
   })
    var button1 = createButton("Teaching Method")
    button1.position(386,136);
    button1.mousePressed(function(){
        button3.hide();
        button2.hide();
        button4.hide();
    })
    var button2 = createButton("Conducted Activites")
    button2.position(540,136);
    button2.mousePressed(function(){
        button3.hide();
        button1.hide();
        button4.hide();
    })
    var button3 = createButton("Others")
    button3.position(806,136);
    button3.mousePressed(function(){
        button2.hide();
        button1.hide();
        button4.hide();
    })
    var button4 = createButton("Discipline")
    button4.position(706,136);
    button4.mousePressed(function(){
        button2.hide();
        button1.hide();
        button3.hide();
    })
    var button5 = createButton("Asking a lot of questions to the teacher")
    button5.position(386,190);
    button5.mousePressed(function(){
        button6.hide();
        button7.hide();
        button8.hide();
    })
    var button6 = createButton("Completing various assingments")
    button6.position(646,190);
    button6.mousePressed(function(){
        button5.hide();
        button7.hide();
        button8.hide();
    })
    var button7 = createButton("Sports and other extracurricular activites")
    button7.position(386,220);
    button7.mousePressed(function(){
        button5.hide();
        button6.hide();
        button8.hide();
    })
    var button8 = createButton("Study in peace and silence")
    button8.position(656,220);
    button8.mousePressed(function(){
        button5.hide();
        button6.hide();
        button7.hide();
    })
    var button9 = createButton("Securing the 1st rank")
    button9.position(386,270);
    button9.mousePressed(function(){
        button10.hide();
        button11.hide();
        button12.hide();
    })
    var button10 = createButton("Participating in an inter-school debate competion")
    button10.position(546,270);
    button10.mousePressed(function(){
        button9.hide();
        button11.hide();
        button12.hide();
    })
    var button11 = createButton("Participating in a cultural program")
    button11.position(386,300);
    button11.mousePressed(function(){
        button9.hide();
        button10.hide();
        button12.hide();
    })
    var button12 = createButton("Representing the school at a National level")
    button12.position(605,300);
    button12.mousePressed(function(){
        button9.hide();
        button10.hide();
        button11.hide();
    })
    var button13 = createButton("Yes,all the time")
    button13.position(384,356);
    button13.mousePressed(function(){
        button14.hide();
        button15.hide();
        
    })
    var button14 = createButton("Only sometimes")
    button14.position(570,356);
    button14.mousePressed(function(){
        button13.hide();
        button15.hide();
       
    })
    var button15 = createButton("No,not at all")
    button15.position(775,356);
    button15.mousePressed(function(){
        button13.hide();
        button14.hide();
       
    })
    var button16 = createButton("Yes, she always guides me to set targets")
    button16.position(384,430);
    button16.mousePressed(function(){
        button17.hide();
        button18.hide();
        button19.hide();
       
    })
    
    var button17 = createButton("She rarely guides me to set targets")
    button17.position(650,430);
    button17.mousePressed(function(){
        button16.hide();
        button18.hide();
        button19.hide();
      
    })
    var button18 = createButton("In most situations,she guides me to set targets")
    button18.position(384,455);
    button18.mousePressed(function(){
        button16.hide();
        button17.hide();
        button19.hide();
      
    })
    var button19 = createButton("No,she never guides me")
    button19.position(684,455);
    button19.mousePressed(function(){
        button16.hide();
        button17.hide();
        button18.hide();
      
    })
    var button20 = createButton("Yes,it was very useful")
    button20.position(384,510);
    button20.mousePressed(function(){
        button21.hide();
        button22.hide();
       })
       var button21 = createButton("Sometimes")
       button21.position(384,535);
       button21.mousePressed(function(){
           button20.hide();
           button22.hide();
          })
          var button22 = createButton("No, not at all")
          button22.position(384,560);
          button22.mousePressed(function(){
              button20.hide();
              button21.hide();
             })
}


}