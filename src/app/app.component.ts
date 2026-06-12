import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
    courses = [...COURSES];
    course: Course;

    startDate = new Date();
    title = this.courses[0].title;
    price = 9.99;
    course1 = COURSES[0];

    onCourseSelected(course: Course) {
        alert(`course: ${JSON.stringify(course)}`);
    }
 }
