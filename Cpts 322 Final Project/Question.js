// IMPORT SECTION:
import React from 'react'
import {Trend} from './Trend.js'
import {LinkedList} from './LinkedList.js'


// MAIN CLASS SECTION:
class Question extends Trends{

    // CONSTRUCTOR [0 args] SECTION:
    constructor() {

        // Use null initializations in reference to the 'Cpts 322 Milestone 5.pdf' submitted document.
        this.options = new LinkedList<string>(null);
        this.answers = new LinkedList<string>(null);
        this.points = new LinkedList<double>(null);
        this.questionTrend = new Trend(null);

    }

    // CONSTRUCTOR [4/4 args] SECTION:
    constructor(newOptions, newAnswers, newPoints, newQuestionTrend) {

        // Initialize with parameter inputs.
        this.options = new LinkedList<string>(newOptions);
        this.answers = new LinkedList<string>(newAnswers);
        this.points = new LinkedList<double>(newPoints);
        this.questionTrend = new Trend<Question>(newQuestionTrend);

    }

    // GET TREND SECTION:
    GetQuestionTrend() {

        // Return table value.
        return this.questionTrend.GetTable();

    }

    // UPDATE TREND SECTION:
    UpdateQuestionTrend() {

        // Update the Options for the Trend for the given question.
        this.questionTrend = Trend.UpdateTable(Question);
        this.questionTrend = Trend.UpdateChart(Question);
        this.questionTrend = Trend.UpdateGraph(Question);

        // Void return.
        return;

    }

    // GET POINTS SECTION:
    GetPoints() {

        // Return as double.
        return double(this.points);

    }

    // SET POINTS SECTION:
    SetPoints(newPoints) {

        // Parse to a float that can be read in as double.
        newPointsParse = parseFloat(newPoints)

        // If non-null and was able to be converted:
        if ((!(newPoints == null)) && (!(newPointsParse == "NaN"))){

            this.points.append(newPointsParse)

        }

        else {

            // Void return.
            return;

        }

        // Void return
        return;

    }

    // GET OPTIONS SECTION:
    GetOptions() {

        // Returns a LinkedList (hopefully kek).
        return LinkedList(this.options);

    }

    // SET OPTIONS SECTION:
    SetOptions(newOptions) {

        // Convert to string for List<string> in options.
        newOptionsToString = toString(newOptions)

        if (!(newOptionsToString == null)){

            // SetOptions is to accept int and string according to documentation.
            this.options.append(newOptionsToString)

        }

        else {

            // Void return.
            return;

        }

        // Void return.
        return;

    }

    // GET ANSWERS SECTION:
    GetAnswers() {

        // Returns a LinkedList (hopefully kek).
        return LinkedList(this.answers)

    }

    // SET ANSWER SECTION:
    SetAnswer(newAnswer) {

        // Convert to string for List<string> in options.
        newAnswerToString = toString(newAnswer)

        if (!(newAnswerToString == null)){

            // SetAnswer is to accept int and string according to documentation.
            this.answers.append(newAnswerToString)

        }

        else {

            // Void Return.
            return;

        }

        // Void Return.
        return;

    }
    
    // GET INPUT SECTION:
    // I'll just make a function expecting an answer from the
    // user in string form in accordance with the documentation.
    // [4/21] let's retouch or discuss these final two functions here...
    // ... I'll bring that up in the next scheduled regroup in accordance
    // with out plan.
    // [20 minutes later update] this is the section which will have the
    // conversion from the prompts for user answers to their respective
    // section to be compared (IsRight function).
    GetInput(userInput) {

        // Answer holding whether the user Input was right or not via IsRight(string/int).
        // This is going into a bool [true = correct, false = incorrect/null]. Store this
        // somewhere in the future following discussions at the next scheduled meeting.
        userCorrect = this.IsRight(userInput)

        // For now, just return. In the future, redirect to store somewhere
        return;

    }

    // IS RIGHT SECTION:
    // First 'i' in isRight has been capitalized for consistency. Change if desired.
    // What even am I checking here? Is this the correct interpretation?
    IsRight(stringOrIntInput) {

        decision = false;

        // Set to string or int.
        stringInput = toString(stringOrIntInput);
        if (!(stringInput == null)) {

            // Must compare to a string, and then this IsRight function
            // can be looped and repeated to check against all answers
            // in that respective LinkedList of <string>s.
            currentAnswers = this.GetAnswers();

            for (var i = 0; i < currentAnswers.Size(); i++) {

                // With linkedlist im worried this might not work..... hmmm
                if (stringInput == currentAnswers[i]) {

                    // Update the bool that the answer matched one in the answer LinkedList.
                    decision = true;

                }

            }

        }

        else {

            // Input was null, so just return void if possible.
            // (UNCOMMENT IF DESIRED) return;

            // Or, we could return False if unrecognized and just not care.
            return false;

        }

        // return a bool decision.
        return decision

    }

}
