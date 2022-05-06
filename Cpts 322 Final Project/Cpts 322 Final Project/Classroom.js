//Need to import Trend, Course, owner?,
import {Trend} from './Trend.js'
import {LinkedList} from './LinkedList.js'
import {Course} from './Course.js'
import {Teacher} from './Teacher.js'

class Classroom extends LinkedList, Course, Trend, Teacher {
    //initiate everything null or as new class objects
    constructor() {
        this.owner = new Teacher();
        this.courseList = new LinkedList<Course>(null);
        this.name = new String('default');
        this.classrooomTrend = new Trend<Classroom>(null);
    }
    //initiate variable with var inputs
    constructor(newOwner, newCourseList, newName, newClassroomTrend) {
        this.owner = new Teacher();
        this.owner = newOwner;
        this.courseList = new LinkedList<Course>(newCourseList);
        this.name = new String();
        this.name = newName;
        this.classrooomTrend = new Trend<Classroom>(newCourseList, newClassroomTrend, this.name, this.courseList, newClassroomTrend, this.name, this.courseList, newClassroomTrend, this.name);
    }

    SetName(newName) {
        if(typeof newName === 'string' && !(newName == null)) { //checking if the input var newName is string before assigning to name
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

    SetOwner(newOwner) {
        if(newOwner == null){
            return;
        }
        if (typeof newOwner === 'string') //checking if the input var newName is a string
            this.name = newOwner;
        return;
    }

    GetOwner() {
        return this.owner;
    }

    AddCourse(newCourse) {
        //Have to add a new Node to the List of Courses
        // const newClass = new Classroom();

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
        this.classrooomTrend.UpdateTable(this.courseList, this.ClassroomTrend, this.name);
        this.classrooomTrend.UpdateChart(this.courseList, this.ClassroomTrend, this.name);
        this.classrooomTrend.UpdateGraph(this.courseList, this.ClassroomTrend, this.name);
        return;
    }
}