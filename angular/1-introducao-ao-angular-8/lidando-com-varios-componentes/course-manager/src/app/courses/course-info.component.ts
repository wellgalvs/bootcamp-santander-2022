import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
  templateUrl: './course-info.component.html',
})
export class CourseInfoComponent implements OnInit {

  course!: Course;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
  ) { }

  ngOnInit(): void {
    /* Converter utulizando Number
      ou +this.activatedRoute.snapshot.paramMap.get('id')!;*/
    this.course = this.courseService.retrieveById(
      Number(this.activatedRoute.snapshot.paramMap.get('id'))
    );
  }

  save(): void {
    this.courseService.save(this.course);
  }
}
