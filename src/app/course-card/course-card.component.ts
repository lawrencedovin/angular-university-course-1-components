import { Component, computed, input, OnInit, output } from '@angular/core';
import { Category, Course } from '../model/course';
import { INITIALIZE_COURSE } from '../../db-data';

@Component({
  selector: 'course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent implements OnInit {
  course = input<Course>(INITIALIZE_COURSE);
  index = input.required<number>();
  onCourseSelected = output<Course>();
  isImageVisible = computed(() => this.course() && this.course().iconUrl);
  currentCount = computed(() => this.index() + 1);
  cardClasses: Record<string, boolean>;
  cardStyles: Record<string, string>;
  Category = Category;

  ngOnInit(): void {
    this.cardClasses = { 'beginner': this.course().category === Category.Beginner };
    this.cardStyles = {'text-decoration': 'underline'};
  }

  courseSelected() {
    this.onCourseSelected.emit(this.course());
  }
}
