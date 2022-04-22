// IMPORT SECTION:
import {Question} from './Question.js'
// import Question from './Question.js'


// MAIN CLASS SECTION:
class QuestionSet {

    // CONSTRUCTOR [0 args] SECTION:
    constructor() {

        // Use null initializations in reference to 'Cpts 322 Milestone 5.pdf' submitted document.
        this.questionList = new LinkedList<Question>(null);
        this.questionSetTrend = new Trend(null);

    }

    // CONSTRUCTOR [2/2 args] SECTION:
    constructor(newQuestionList, newQuestionSetTrend) {

        // Initialize with parameter inputs.
        this.questionList = new LinkedList<Question>(newQuestionList);
        this.questionSetTrend = new Trend<QuestionSet>(newQuestionSetTrend);

    }

    // ADD QUESTION SECTION:
    // Said to be empty params by the submitted document referenced above, but I think meant to be Question.
    AddQuestion(newQuestion) {

        // Add the question to the QuestionSet Question List if of the correct type.
        if ((typeof newQuestion == 'object') && (!(newQuestion == null))){

            this.questionList.append(Question(newQuestion))

        }
        
        // This else section can go, unless needed for additional Question type cases.
        else {

            // Void return.
            return;

        }

        // Void return.
        return;

    }

    // REMOVE QUESTION SECTION:
    // Said to pass an int; This is assuming that references the place in the list. However,
    // the LinkedList.js does not currently have a 3-condition removal function for itself,
    // hence I'll just comment and come back to this once the function is in-place in the future.
    RemoveQuestion(intQ) {

        if ((typeof intQ == 'int') && (!(intQ == null))) {

            // UNCOMMENT BELOW ONCE FUNCTION IS IN PLACE IN FUTURE DAYS.
            // this.questionList.removeFunction(intQ);

            // Just return for now.
            return;

        }

        // Void return.
        return;

    }

    // GET QUESTION SECTION:
    GetQuestion(desiredQuestion) {

        if ((typeof desiredQuestion == 'object') && (!(desiredQuestion == null))){

            // Maybe this will return the exact question... hopefully<3.
            return this.questionList(Question(newQuestion));

        }
        
        // If the passed argument is not of Question type.
        else {

            // Void return.
            return;

        }

    }

    // GET QUESTION SET TREND SECTION:
    GetQuestionSetTrend() {

        // Return a trend type.
        return this.questionSetTrend;

    }

    // GET QUESTION TREND SECTION:
    // Documentation specifies int usage, but I think Question was desired? This section
    // can be rechecked following the next scheduled meeting according to our plan.
    GetQuestionTrend(intOrQuestion) {

        return this.questionList(intOrQuestion).GetQuestionTrend()

    }

    // UPDATE QUESTION SET TREND SECTION:
    UpdateQuestionSetTrend() {

        // Update this with the QuestionSet class type.... revisit come another astrological age.
        this.questionSetTrend = Trend.UpdateTable(QuestionSet);
        this.questionSetTrend = Trend.UpdateChart(QuestionSet);
        this.questionSetTrend = Trend.UpdateGraph(QuestionSet);

        // Void return.
        return;

    }

}
