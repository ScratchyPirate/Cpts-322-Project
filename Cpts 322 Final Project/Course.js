?import React, { useState, useEffect } from "react";
import Quiz from './Quiz.js';
import Poll from './Poll.js';
import LinkedList from './LinkedList.js';
import RegisteredUser from './RegisteredUser.js';
import {Teacher} from './Teacher.js';
import {QuestionSet} from './QuestionSet.js';
import {Trend} from './Trend.js';


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
            this.strudents = new LinkedList < Student > (newStudents);
            this.courseTrends = new Trend < Course > (newCourseTrends);
            this.questionSet = new LinkedList < QuestionSet > (newQuestionSet);
        };

        TakeAttendance() {
            if (this.courseName === 'defaultCourseName') //if there is no course name then there arent students to take attendance for 
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
            const handleAnwerButtonClick = (inputCount, answerOption) => {
                if (inputCount < 4) {
                    newQSet.setOptions(answerOption);
                }
                else if (inputCount == 4) {
                    newQSet.SetAnswer(answerOption);
                }
                else if (inputCount == 5) {
                    newQSet.setPoints(answerOption);
                }
            };
            return (
                <div className='answer-section'>
                    {newQSet.answerOption.map((answerOption, index) => (
                        <button onClick={() => handleAnwerButtonClick()}>{0, answerOption.answerText}</button>
                    ))}
                </div>
            );
            /*
            <makeQSet>
                <input
                    value={newOption0}
                    onChange={(e) => setOp0(e.target.value)}
                    label="Option #1"
                />
                <input
                    value={newOption1}
                    onChange={(e) => setOp1(e.target.value)}
                    label="Option #2"
                />
                <input
                    value={newOption2}
                    onChange={(e) => setOp2(e.target.value)}
                    label="Option #3"
                />
                <input
                    value={newOption3}
                    onChange={(e) => setOp3(e.target.value)}
                    label="Option #4"
                />
                <input
                    value={newAnwser}
                    onChange={(e) => SetAnswer(e.target.value)}
                    label="Anwser"
                />
                <input
                    value={newPoints}
                    onChange={(e) => setPoints(e.target.value)}
                    label="Points"
                />
                <button type="Submit"> Submit </button>
            </makeQSet>
            
        );*/
        }

        //ModifyQuestionSet() {
        //    //find question set that's going to be changed
        //    const [qSetNum, setqSetNum] = useState("");
        //    const [newOption0, setOp0] = useState("");
        //    const [newOption1, setOp1] = useState("");
        //    const [newOption2, setOp2] = useState("");
        //    const [newOption3, setOp3] = useState("");
        //    const [newAnwser, SetAnswer] = useState("");
        //    const [newPoints, setPoints] = useState("");
        //    return (
        //    <div className=''
        //    <modifyQSet>
        //        <input
        //            value={qSetNum}
        //            onChange={(e) => setqSetNum(e.target.value)}
        //            label="Question Set Number"
        //        />
        //        <input
        //            value={newOption0}
        //            onChange={(e) => setOp0(e.target.value)}
        //            label="Option #1"
        //        />
        //        <input
        //            value={newOption1}
        //            onChange={(e) => setOp1(e.target.value)}
        //            label="Option #2"
        //        />
        //        <input
        //            value={newOption2}
        //            onChange={(e) => setOp2(e.target.value)}
        //            label="Option #3"
        //        />
        //        <input
        //            value={newOption3}
        //            onChange={(e) => setOp3(e.target.value)}
        //            label="Option #4"
        //        />
        //        <input
        //            value={newAnwser}
        //            onChange={(e) => SetAnswer(e.target.value)}
        //            label="Anwser"
        //        />
        //        <input
        //            value={newPoints}
        //            onChange={(e) => setPoints(e.target.value)}
        //            label="Points"
        //        />
        //        <button type="Submit"> Submit </button>
        //    </modifyQSet>
        //    );
            /*return (
    
            );a
            for(const i = 0; i < currQuestionSet.Size(); i++) {
                //get teacher input for the string of options to have a string input for SetOption(int, string)
                currQuestionSet.questionList.SetOption(i, );
                //get teacher input for a string of for the answer for SetAnswer(int, string)
                currQuestionSet.questionList.SetAnswer(i, );
                //get teacher input for a double value for points to use with SetPoints(int, double)
                currQuestionSet.questionList.SetPoints(i, );
                    
            } 
            return;*/
        }

        RemoveQuestionSet(removeThisQSet) {
            var prev = this.questionSet; //saving the location of the previous question to no lose data in the Linked list
            while (prev.questionList.GetQuestion(0) != removeThisQSet.questionList.GetQuestion(0)) { //Checking if the first question of the current location in the list is the same as the first question of the set that we want to delete
                if (prev.next == null)
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
            if (this.teacher === null)
                return;
            return this.teacher;
        }

        GetStudentNames() {
            return this.strudents;
        }

        GetCourseTrend() {
            return this.courseTrends.GetGraph < Course > ();
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
            this.courseTrends.UpdateChart < QuestionSet > (this.courseTrends);
            this.courseTrends.UpdateGraph < QuestionSet > (this.courseTrends);
            this.courseTrends.UpdateTable < QuestionSet > (this.courseTrends);
            return;
        }
    }
