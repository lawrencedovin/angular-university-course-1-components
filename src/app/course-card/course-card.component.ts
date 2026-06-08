import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  @Input()
  title: string = '';
  @Input()
  description: string = '';
  @Input()
  iconUrl: string = '';
}
