import { Component, input, output } from '@angular/core';
import { Course } from '../model/course';
import { INITIALIZE_COURSE } from '../../db-data';

@Component({
  selector: 'course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  course = input<Course>(INITIALIZE_COURSE);
  onCourseSelected = output<Course>();

  courseSelected() {
    this.onCourseSelected.emit(this.course())
  }
}
