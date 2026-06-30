import { AfterViewInit, Component, computed, effect, ElementRef, ViewChild, viewChild, viewChildren } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements AfterViewInit {
    courses = [...COURSES];
    course: Course;
    card1 = viewChild.required<CourseCardComponent>('cardRef1'); 
    card2 = viewChild.required<CourseCardComponent>('cardRef2'); 
    readonly cards = viewChildren(CourseCardComponent);
    readonly totalChildren = computed(() => this.cards().length);

    onCourseSelected(course: Course) {
        console.log(`course: ${JSON.stringify(course)}`);
        // console.log(this.card1().course());
        // console.log(this.card2().course());
    }

    ngAfterViewInit(): void {
        console.log('totalChildren: ', this.totalChildren());
        this.cards().forEach(card => {
            console.log('card course: ', card.course());
        });
    }
 }
