
import Quiz from './Quiz.js'
import Poll from './Poll.js'
import LinkedList from './LinkedList.js'
import RegisteredUser from './RegisteredUser.js'
import {Teacher} from './Teacher.js'
import {QuestionSet} from './QuestionSet.js'


class Course extends LinkedList, RegisteredUser, Classroom, Teacher {

    constructor() {
        this.courseName = 'defaultCourseName';
        this.teacher = null;
        this.strudents = null;
        //List<this.Student> null;
        this.courseTrends = null;
        this.questionSet = List<QuestionSet>.;
    }

    TakeAttendance() {
        if(this.courseName === null)
            return;
        Teacher.TakeAttendance(this.courseName);
        return;   
    }

    MakeQuestionSet() {

    }

    ModifyQuestionSet() {

    }

    RemoveQuestionSet() {

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
        
        return this.courseTrends;
    }

    GetQuestionSetTrend(qSet) {
        //have to check if the inputted question set qSet is in the local questionSet linkedList -> List<questionSet>
        //Call the QuestionSet function for Trend GetQuestiomSetTrend()
        qSet.GetQuestionSetTrend()
        return this.questionSet.List<qSet>.GetQuestionSetTrend(QuestionSet* questionList.GetQestionSet());
    }

    

    /*
        void TakeAttendence();
        void MakeQuestionSet();
        Void ModifyQuestionSet();
        void RemoveQuestionSet();
        string GetCourseName();
        string GetTeacherName()
        List<string> GetStudentName();
        Trend GetCourseTrend();
        Trend GetQuestionSetTrend(int);
        Trend GetQuestionTrend(int, int);
        void StartQuestionSet();
        void EndQuestionSet();
        void UpdateCourseTrend();
    */
}
