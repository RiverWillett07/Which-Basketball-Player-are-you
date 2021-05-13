let counter=0;
$("button").click(function() {
    counter=counter+1;
    let question_one_input = $(".question-one").val();
    let question_two_input = parseInt($(".question-two").val());

    if (question_one_input === "A" && question_two_input === 1) {
        $(".result").text("Steph Curry");
    }
    
    else if (question_one_input === "B" && question_two_input === 1) {
        $(".result").text("Zach Lavine");
    } 
    
    else if (question_one_input === "C" && question_two_input === 1) {
        $(".result").text ("Steph Curry");
    }
    
    else if (question_one_input === "A" && question_two_input === 2) {
        $(".result").text ("Joel Embiid");
    }
    
     else if (question_one_input === "B" && question_two_input === 2) {
        $(".result").text ("Zach Lavine");
    }
    
      else if (question_one_input === "C" && question_two_input === 2) {
        $(".result").text ("James Harden");
    }
    
     else if (question_one_input === "A" && question_two_input === 3) {
        $(".result").text ("Lebron James");
    }
    
   else if (question_one_input === "B" && question_two_input === 3) {
        $(".result").text ("Giannis Antetokounmpo");
    }
    
    else if (question_one_input === "C" && question_two_input === 3) {
        $(".result").text ("Derrick Rose");
               
    } else{ $(".result").text ("Invalid Answer");
    }
    
});