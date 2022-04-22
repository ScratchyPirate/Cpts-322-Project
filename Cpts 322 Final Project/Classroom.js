//Need to import Trend, Course, teacher?,
import {Trend} from './Trend.js'
import {LinkedList} from './LinkedList.js'
import {Course} from './Course.js'

class Classroom extends List, Course, Trends {

    constructor() {
        this.teacher = null;
        this.courseList = null;
        this.name = 'default';
        this.classrooomTrend = null;
    }

    SetName(newName) {
        if(newName == null)
            return;
        else if(typeof newName === 'string') {
            this.name = newName;
            return;   
        }
        else{
            return;
        }
    }

    GetName() {
        return this.name;
    }

    SetName(newName) {
        if (typeof newName === 'string')
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
        if(typeof newCourse === 'object')
            this.courseList.Append(newCourse);
    }

    RemoveCourse(cName) {
        var nextHolder = this.courseList.GetFirst().next;
        if(this.courseList.GetFirst().courseName == cName) {
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
        return this.classrooomTrend = Trend.GetTable();
    }

    UpdateClassroomTrend() {
        this.classrooomTrend = Trend.UpdateTable(this.courseList);
        return;
    }
}