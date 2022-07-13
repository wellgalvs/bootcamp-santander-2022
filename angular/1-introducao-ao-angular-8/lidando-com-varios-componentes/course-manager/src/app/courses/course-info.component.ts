import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: './course-info.component.html',
})
export class CourseInfoComponent implements OnInit {

  courseId!: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    /* Converter utulizando Number
      ou +this.activatedRoute.snapshot.paramMap.get('id')!;*/
    this.courseId = Number(this.activatedRoute.snapshot.paramMap.get('id'));

  }
}
