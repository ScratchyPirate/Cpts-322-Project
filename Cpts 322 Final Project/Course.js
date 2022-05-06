import React, { useState, useEffect } from "react";
import Quiz from './Quiz.js';
import Poll from './Poll.js';
import LinkedList from './LinkedList.js';
import RegisteredUser from './RegisteredUser.js';
import {Teacher} from './Teacher.js';
import {QuestionSet} from './QuestionSet.js';
import {Trend} from './Trend.js';
import {Question} from './Question.js';


class Course extends LinkedList, RegisteredUser, Classroom, Teacher, Trend {
    //initiate vars to a default value or null and for those that are of class objects
    constructor() {  
        this.courseName = new String();
        this.courseName = 'defaultCourseName';
        this.teacher = new String();
        this.strudents = new LinkedList<Student>(null);
        this.courseTrends = new Trend<Course>(null);
        this.questionSet = new LinkedList<QuestionSet>(null);
    };
    /*
    const Course = () => {
        const courseName = new String();
        const teacher = new String();
        const students = ;
        const courseTrends = ;
        const questionSet = ;
    };
    */
    //initiate the vars based on variable input
    constructor(newCourseName, newTeacher, newStudents, newCourseTrends, newQuestionSet) {
        this.courseName = new String();
        this.courseName = newCourseName;
        this.teacher = new String();
        this.teacher = newTeacher;
        this.strudents = new LinkedList<Student>(newStudents);
        this.courseTrends = new Trend<Course>(newCourseTrends);
        this.questionSet = new LinkedList<QuestionSet>(newQuestionSet);
    };

    TakeAttendance() {
        if(this.courseName === 'defaultCourseName') //if there is no course name then there arent students to take attendance for 
            return;
        Teacher.TakeAttendance(this.courseName);
        return;   
    };

    MakeQuestionSet() {
        //ask for how many questions they want to add
        //enter a for loop for inputting questions into question set until reaching the last question
        /*const newQSet = new QuestionSet();
        const [numQs, setnumQs] = useState('');
        return (
            <div>
                <label>Please state the number of Questions:</label>
                <numQs value ={numQs} onInput={e => setnumQs(e.target.value)}/>
            </div>
        );
        const [question, setquestion] = useState('');
        */
        const newQSet = new QuestionSet();
        this.questionSet.append(newQSet);
        /*
        const [newOption0, setOp0] = useState("");
        const [newOption1, setOp1] = useState("");
        const [newOption2, setOp2] = useState("");
        const [newOption3, setOp3] = useState("");
        const [newAnwser, SetAnswer] = useState("");
        const [newPoints, setPoints] = useState("");
        */
        const handleOptionButtonClick = (answerOption) => {
            const nextOption = this.questionSet.Size() + 1;
            $('#optionView').append($('#option-input').val());
            newQSet.QuestionSet.SetOption(nextOption, answerOption);
        };

        const handleAnswerButtonClick = (inputAnswer) => {
            const nextAnwser = this.questionSet.Size() + 1;
            $('#answerView').append($('#answer-section').val());
            newQSet.QuestionSet.SetAnswer(nextAnwser, inputAnswer);
        };

        const handlePointButtonClick = (inputPoints) => {
            const nextPoints = this.questionSet.Size() + 1;
            $('#pointsView').append($('#points-input').val());
            newQSet.QuestionSet.SetPoints(nextPoints, inputPoints);
        };

        return (
            <div className='new-Qset'>
                <h1>New Question Set</h1>
                <div className="options-section">
                    <input type='text' id='option-input'></input>
                    <label for='option-input'>Add Quesiton Option</label>
                    {newQSet[newQSet.Size()].options.map((inputOption, index) => (

                        <button onClick={() => handleOptionButtonClick(inputOption)}>{inputOption.answerText}</button>
                    ))}
                    <div id='optionsView'>

                    </div>
                </div>
                <div className="answer-section">
                    <input type='text' id='answer-input'></input>
                    <label for='answer-input'>Enter Correct Option</label>
                    {newQSet[newQSet.Size()].answers.map((inputAnswer, index) => (
                        <button onClick={() => handleAnswerButtonClick(inputAnswer)}>{inputAnswer.answerText}</button>
                    ))}
                    <div id='answerView'>

                    </div>
                </div>
                <div className="points-section">
                    <input  type='text' id='points-input'></input>
                    <label for='points-input'>Enter Points for Question</label>
                    {newQSet[newQSet.Size()].points.map((inputPoints, index) => (
                        <button onClick={() => handlePointButtonClick(inputPoints)}>{inputPoints.answerText}</button>
                    ))}
                    <div id='pointView'>

                    </div>
                </div>
            </div>
        );
    }

    ModifyQuestionSet() {
        //find question set that's going to be changed
        /*
        const [qSetNum, setqSetNum] = useState("");
        const [newOption0, setOp0] = useState("");
        const [newOption1, setOp1] = useState("");
        const [newOption2, setOp2] = useState("");
        const [newOption3, setOp3] = useState("");
        const [newAnwser, SetAnswer] = useState("");
        const [newPoints, setPoints] = useState("");*/
        const handleOptionButtonClick = (answerOption) => {
            const nextOption = this.questionSet.Size() + 1;
            $('#optionView').append($('#option-input').val());
            newQSet.QuestionSet.SetOption(nextOption, answerOption);
        };
        const renderCurrentOptions = (currentQset) => {
            for(var i = 0; i < currentQset.options.Size(); i++) {
                $('#optionView').append(currentQset.options[i]);
            }
        };
        const handleAnswerButtonClick = (inputAnswer) => {
            const nextAnwser = this.questionSet.Size() + 1;
            $('#answerView').append($('#answer-section').val());
            newQSet.QuestionSet.SetAnswer(nextAnwser, inputAnswer);
        };
        const renderCurrentAnwser = (currentQset) => {
            for(var i = 0; i < currentQset.answers.Size(); i++) {
                $('#answerView').append(currentQset.answers[i]);
            }
        };
        const handlePointButtonClick = (inputPoints) => {
            const nextPoints = this.questionSet.Size() + 1;
            $('#pointsView').append($('#points-input').val());
            newQSet.QuestionSet.SetPoints(nextPoints, inputPoints);
        };
        const renderCurrentPoints = (currentQset) => {
            for(var i = 0; i < currentQset.points.Size(); i++) {
                $('#pointsView').append(currentQset.points[i]);
            }
        };
        return (
            <div className='edit-Qset'>
                <h1>Edit Question Set</h1>
                <div className="options-section">
                    <input type='text' id='option-input'></input>
                    <label for='option-input'>Add Quesiton Option</label>
                    {newQSet[newQSet.Size()].options.map((inputOption, index) => (

                        <button onClick={() => handleOptionButtonClick(inputOption)}>{inputOption.answerText}</button>
                    ))}
                    <div id='optionsView'>

                    </div>
                </div>
                <div className="answer-section">
                    <input type='text' id='answer-input'></input>
                    <label for='answer-input'>Enter Correct Option</label>
                    {newQSet[newQSet.Size()].answers.map((inputAnswer, index) => (
                        <button onClick={() => handleAnswerButtonClick(inputAnswer)}>{inputAnswer.answerText}</button>
                    ))}
                    <div id='answerView'>

                    </div>
                </div>
                <div className="points-section">
                    <input  type='text' id='points-input'></input>
                    <label for='points-input'>Enter Points for Question</label>
                    {newQSet[newQSet.Size()].points.map((inputPoints, index) => (
                        <button onClick={() => handlePointButtonClick(inputPoints)}>{inputPoints.answerText}</button>
                    ))}
                    <div id='pointView'>

                    </div>
                </div>
            </div>
        );
    }

    RemoveQuestionSet(removeThisQSet) {
        var prev = this.questionSet; //saving the location of the previous question to no lose data in the Linked list
        while(prev.questionList.GetQuestion(0) != removeThisQSet.questionList.GetQuestion(0)) { //Checking if the first question of the current location in the list is the same as the first question of the set that we want to delete
            if(prev.next == null)
                return;
            prev = prev.next;
        }
        prev.next = prev.next.next; //overwriting the the next of the prev to the 2nd node after itself to git rid of the questionset we want to remove
        return;
    }

    GetCourseName() {
        return this.courseName;
    }

    GetTeacherName() {
        if(this.teacher === null)
            return;
        return this.teacher;
    }

    GetStudentNames() {
        return this.strudents;
    }

    GetCourseTrend() {
        return this.courseTrends.GetGraph<Course>(this.courseName);
    }

    GetQuestionSetTrend(qSetnum) {
        //have to check if the inputted question set qSet is in the local questionSet linkedList -> List<questionSet>
        //Call the QuestionSet function for Trend GetQuestiomSetTrend()
        return this.questionSet.GetQuestionSetTrend(qSetnum); //trying to call GetQuestionSetTrend(int) from QuestionSet class
        /*
        var curr = new LinkedList<QuestionSet>(this.questionSet);
        for(const i = 0; i < qSetnum; i++) {
            curr = curr.next;
        }
        return curr.GetQuestionSetTrend(QuestionSet* questionList.GetQestionSet());
        */
    }

    GetQuestionTrend(qSetNum, questionNum) {
        return this.questionSet.GetQuestionTrend(qSetNum, questionNum); //Trying to call QuestionSet's function GetQuestionTrend(int, int)
    }

    StartQuestionSet() {
        this.questionSet.StartQuz();
        return;
    }

    EndQuestionSet() {
        this.questionSet.EndQuiz();
        return;
    }

    UpdateCourseTrend() {
        this.courseTrends.UpdateChart<QuestionSet>(this.courseTrends);
        this.courseTrends.UpdateGraph<QuestionSet>(this.courseTrends);
        this.courseTrends.UpdateTable<QuestionSet>(this.courseTrends);
        return;
    }

    Render() {
        return(
            <div className='Course'>
                <h1>${this.courseName}</h1>
                <p>${this.teacher}</p>
                <button onClick={this.TakeAttendance()}>Take Attendence</button>
                <button onClick={this.GetStudentNames()}>List of Students</button>
                <button onClick={this.questionSet.GetQuestion()}>Question Sets</button>
                <button onClick={this.MakeQuestionSet()}>Make Question Set</button>
                <button onClick={this.ModifyQuestionSet()}>Modify Quesiton Set</button>
                <button onClick={this.GetCourseTrend()}>Course Trends</button>
            </div>
        );
    }
}
