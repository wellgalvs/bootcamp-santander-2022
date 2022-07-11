import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  ngOnInit(): void {
    this.courses = [
      {
        id: 1,
        name: 'Angular: Forms',
        imageURL: '',
        price: 99.99,
        code: 'XPS-8796',
        duration: 120,
        rating: 4.6,
        releaseDate: 'Jun, 11, 2022',
      },
      {
        id: 2,
        name: 'Angular: HTTP',
        imageURL: '',
        price: 49.99,
        code: 'LKL-8796',
        duration: 80,
        rating: 4,
        releaseDate: 'Jun, 11, 2022',
      }
    ];
  }
}
