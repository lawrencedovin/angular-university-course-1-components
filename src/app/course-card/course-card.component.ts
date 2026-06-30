import {
  AfterContentInit,
  AfterViewInit,
  Component,
  computed,
  contentChild,
  contentChildren,
  ElementRef,
  input,
  OnInit,
  output,
} from "@angular/core";
import { Category, Course } from "../model/course";
import { INITIALIZE_COURSE } from "../../db-data";
import { CourseImageComponent } from "../course-image/course-image.component";

@Component({
  selector: "course-card",
  imports: [],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent
  implements OnInit, AfterViewInit, AfterContentInit
{
  course = input<Course>(INITIALIZE_COURSE);
  index = input.required<number>();
  onCourseSelected = output<Course>();
  isImageVisible = computed(() => this.course() && this.course().iconUrl);
  currentCount = computed(() => this.index() + 1);
  cardClasses: Record<string, boolean>;
  cardStyles: Record<string, string>;
  Category = Category;
  // courseImage = contentChildren.required<CourseImageComponent>("courseImage");
  readonly courseImages = contentChildren(CourseImageComponent);

  ngOnInit(): void {
    this.cardClasses = {
      beginner: this.course().category === Category.Beginner,
    };
    this.cardStyles = { "text-decoration": "underline" };
  }

  ngAfterViewInit() {
    //console.log("this.courseImage: ", this.courseImage().imageUrl());
  }

  ngAfterContentInit() {
    this.courseImages().forEach((courseImage) => {
      console.log("this.courseImage: ", courseImage.imageUrl());
    });
  }

  courseSelected() {
    this.onCourseSelected.emit(this.course());
  }
}
