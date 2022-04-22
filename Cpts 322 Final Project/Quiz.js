
import QuestionSet from './QuestionSet.js'

class Quiz extends QuestionSet {

    // GRADE QUIZ SECTION:
    GradeQuiz() {

        listOfPointsPerQuestionInSet = this.CalculatePoints()

        // Hold double for summation.
        score = 0.0

        for (var i = 0; i < listOfPointsPerQuestionInSet.length(); i++) {

            score += listOfPointsPerQuestionInSet[i]

        }

        // Void return.
        return;

        // In the future, this can return the score of the now-wholly graded quiz.
        // UNCOMMENT BELOW FOR POSSIBLE FEATURE FOLLOWING TALKS.
        // return score;

    }

    // CALCULATE POINTS SECTION:
    // From my understanding, this has to be the scoring of each question.
    CalculatePoints() {

        // New temporary array created to hold a list of scores per each question in the linked question list.
        tempArray = [];

        // Iterate list (maybe make not linked... discuss that at next scheduled meeting).
        for (var i = 0; i < QuestionSet.questionList.Size(); i++) {

            // Get value of points for each question. Rewrite this over yonder kek.
            questionRight = QuestionSet.questionList[i].IsRight(QuestionSet.questionList[i].GetInput("Something here.")) 

            //
            if (questionRight = true){

                tempArray.push(QuestionSet.questionList[i].GetPoints())

            }
            
            else {

                tempArray.push(0)

            }

        }

        // For now's sake, I'm going to return out the tempArray created.... We'll discuss this in another halflife.
        return tempArray;

    }

    // START POLL SECTION:
    StartQuiz() {

        // [ START QUIZ COMMAND (outsoruce?) CALL GOES HERE ]

        // Void return.
        return;

    }

    // END POLL SECTION:
    EndQuiz() {

        // [ END QUIZ COMMAND (outsoruce?) CALL GOES HERE ]

        // Void return.
        return;
        
    }

}
