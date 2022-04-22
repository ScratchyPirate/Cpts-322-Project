//Need to import Trend, Course, teacher?,
import {Trend} from './Trend.js'
import {LinkedList} from './LinkedList.js'
import {Course} from './Course.js'

class Classroom extends List, Course, Trends {
    //initiate everything null or as new class objects
    constructor() {
        this.teacher = null;
        this.courseList = new LinkedList<Course>();
        this.name = 'default';
        this.classrooomTrend = new Trend();
    }
    //initiate variable with var inputs
    constructor(newTeacher, newCourseList, newName, newClassroomTrend) {
        this.teacher = newTeacher;
        this.courseList = new LinkedList<Course>(newCourseList);
        this.name = newName;
        this.classrooomTrend = new Trend<Classroom>(newClassroomTrend);
    }

    SetName(newName) {
        if(newName == null) //checking if the input var newName is null if so return
            return;
        else if(typeof newName === 'string') { //checking if the input var newName is string before assigning to name
            this.name = newName;
            return;   
        }
        else{
            return; //if the input is not null and is not type string
        }
    }

    GetName() {
        return this.name;
    }

    SetName(newName) {
        if(newName == null){
            return;
        }
        if (typeof newName === 'string') //checking if the input var newName is a string
            this.name = newName;
        return;
    }

    GetOwner() {
        return this.teacher;
    }

    AddCourse(newCourse) {
        //Have to add a new Node to the List of Courses
        //const newClass = Classroom();

        //If the input var is a class Course type then append to the list of courses no need to assign the var in the class type
        //Checking if the data input is class object from Course
        if(typeof newCourse === 'object') {
            this.courseList.Append(newCourse);
            return;
        }
        return;
        
    }

    RemoveCourse(cName) {
        var nextHolder = this.courseList.GetFirst().next;
        if(this.courseList.GetFirst().courseName == cName) { //If the Course to be removed is the root node
            delete(root);
            root = nextHolder;
            return;
        }
        do {
            //Checking if the CourseName of the next Node is the node we're looking to remove
            if(nextHolder.next.courseName == cName) {
                //Saviing previous node of the CourseName to be removed
                var prevHolder = nextHolder;
                nextHolder = nextHolder.next;
                delete(prevHolder.next);
                prevHolder.next = nextHolder;
                return;
            }
            nextHolder = nextHolder.next;
        } while(this.courseList.next != null);
        //If we get here the CourseName we want to remove is not in the list
        return;
    }

    GetCourses() {
        //
        return this.courseList;
    }

    GetClassroomTrend() {
        return this.classrooomTrend.GetTable();
    }

    UpdateClassroomTrend() {
        this.classrooomTrend = Trend.UpdateTable(this.courseList);
        this.classrooomTrend = Trend.UpdateChart(this.courseList);
        this.classrooomTrend = Trend.UpdateGraph(this.courseList);
        return;
    }
}