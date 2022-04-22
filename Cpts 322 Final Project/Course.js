
import Quiz from './Quiz.js'
import Poll from './Poll.js'
import LinkedList from './LinkedList.js'
import RegisteredUser from './RegisteredUser.js'
import {Teacher} from './Teacher.js'
import {QuestionSet} from './QuestionSet.js'
import {Trends} from './Trends.js'


class Course extends LinkedList, RegisteredUser, Classroom, Teacher, Trends {
    //initiate vars to a default value or null and for those that are of class objects
    constructor() {
        this.courseName = 'defaultCourseName';
        this.teacher = null;
        this.strudents = new LinkedList<Student>();
        //List<this.Student> null;
        this.courseTrends = new Trend<Course>();
        this.questionSet = new LinkedList<QuestionSet>();
    }
    //initiate the vars based on variable input
    constructor(newCourseName, newTeacher, newStudents, newCourseTrends, newQuestionSet) {
        this.courseName = newCourseName;
        this.teacher = newTeacher;
        this.strudents = new LinkedList<Student>(newStudents);
        //List<this.Student> null;
        this.courseTrends = new Trend<Course>(newCourseTrends);
        this.questionSet = new LinkedList<QuestionSet>(newQuestionSet);
    }

    TakeAttendance() {
        if(this.courseName === null) //if there is no course name then there arent students to take attendance for 
            return;
        Teacher.TakeAttendance(this.courseName);
        return;   
    }

    MakeQuestionSet(numQuestions) {
        //ask for how many questions they want to add
        //enter a for loop for inputting questions into question set until reaching the last question
        QuestionSet* newQSet;
        this.questionSet.List<QuestionSet>.append(newQSet);
        for(const i; i < numQuestions; i++) {
            newQSet.AddQuestion();
        }
        return;
    }

    ModifyQuestionSet() {
        //find question set that's going to be changed
        for(const i = 0; i < currQuestionSet.Size(); i++) {
            //get teacher input for the string of options to have a string input for SetOption(int, string)
            currQuestionSet.questionList.SetOption(i, );
            //get teacher input for a string of for the answer for SetAnswer(int, string)
            currQuestionSet.questionList.SetAnswer(i, );
            //get teacher input for a double value for points to use with SetPoints(int, double)
            currQuestionSet.questionList.SetPoints(i, );
                
        } 
        return;
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
        return this.courseTrends.GetGraph<Course>();
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

}
