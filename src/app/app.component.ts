import {
  AfterViewInit,
  Component,
  computed,
  effect,
  ElementRef,
  ViewChild,
  viewChild,
  viewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Category, Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
})
export class AppComponent implements AfterViewInit {
  courses = [...COURSES];
  course: Course;
  readonly cards = viewChildren(CourseCardComponent);
  readonly totalChildren = computed(() => this.cards().length);

  onCourseSelected(course: Course) {
    console.log(`course: ${JSON.stringify(course)}`);
  }

  onCoursesEdited() {
    this.courses.push({
      id: 1,
      title: "Angular core deep dive",
      iconUrl:
        "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png",
      description:
        "A detailed walk-through of the most important part of Angular - the Core and Common modules",
      category: Category.Intermediate,
      lessonsCount: 10,
    });
  }

  ngAfterViewInit(): void {
    console.log("totalChildren: ", this.totalChildren());
    this.cards().forEach((card) => {
      console.log("card course: ", card.course());
    });
  }
}
