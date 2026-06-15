import { Component, viewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
    courses = [...COURSES];
    course: Course;
    card = viewChild.required<CourseCardComponent>('childRef'); 

    onCourseSelected(course: Course) {
        console.log(`course: ${JSON.stringify(course)}`);
        console.log(this.card().course());
    }
 }
