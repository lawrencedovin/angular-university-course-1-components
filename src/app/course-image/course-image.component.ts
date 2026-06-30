import { Component, input } from '@angular/core';

@Component({
  selector: 'course-image',
  imports: [],
  templateUrl: './course-image.component.html',
  styleUrl: './course-image.component.css',
})
export class CourseImageComponent {
  imageUrl = input.required<string | undefined>();
}
