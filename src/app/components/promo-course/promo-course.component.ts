import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../services/api/api.service";
import {first} from "rxjs";
import {TuiAlertService, TuiNotification} from "@taiga-ui/core";
import {CourseService} from "../../services/course/course.service";
@Component({
  selector: 'app-promo-course',
  templateUrl: './promo-course.component.html',
  styleUrls: ['./promo-course.component.css']
})
export class PromoCourseComponent implements OnInit{
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('idCourse'));
    this.getCourse(id);
    this.getModules(id);
    this.outputCourses();
  }

  constructor(
    private courseService:CourseService,
    private router: Router,
    @Inject(TuiAlertService) private readonly alerts: TuiAlertService,
    private dataService: ApiService,
    private route: ActivatedRoute) {

  }

  lastChanges: any;

  courses_fav: any[] = [];
  current_course: any;
  loader: boolean = false;
  current_modules: any[] = [];
  first_module: any;
  first_lesson: any;
  first_task: any;
  joinOk: boolean = false;
  p: any;
  user_courses: any[] = [];
  isFavourite: boolean = false;
  idCourse = Number(this.route.snapshot.paramMap.get('idCourse'));
  lc_user: any = localStorage.getItem("user");
  idUser = JSON.parse(this.lc_user).idUser;

  getCourse(id: any) {
    this.loader = true;
    this.dataService.getCourse(id)
      .pipe(first())
      .subscribe(
        data => {
          this.current_course = data[0];
          this.dataService.getFavouriteCourses(this.idUser)
            .pipe(first())
            .subscribe(
              data => {
                this.courses_fav = data;
                for (let i = 0; i < this.courses_fav.length; i++) {
                  if (this.courses_fav[i].idCourse == this.current_course.idCourse) {
                    this.isFavourite = true;
                  }
                }
              }, error => {
                console.log(error);
              })
          this.loader = false;
        },
        error => {
          this.loader = false;
        })
  }

  getModules(idCourse: any) {
    this.dataService.getModules(idCourse)
      .pipe(first())
      .subscribe(
        data => {
          this.first_module = data[0];
          this.current_modules = data;
          this.getLessons(this.first_module.idModule);
        },
        error => {
          console.log(error);
        });
  }

  getLessons(idModule: any) {
    this.dataService.getLessons(idModule)
      .pipe(first())
      .subscribe(
        data => {
          this.first_lesson = data[0];
          this.getTasks(this.first_lesson.idLesson)
        },
        error => {
          console.log(error);
        });
  }

  getTasks(idLesson: any) {
    this.dataService.getTasks(idLesson)
      .pipe(first())
      .subscribe(
        data => {
          this.first_task = data[0];
        },
        error => {
          console.log(error);
        });
  }

  outputCourses() {
    this.lc_user = localStorage.getItem("user");
    const idUser = JSON.parse(this.lc_user).idUser;
    const id = Number(this.route.snapshot.paramMap.get('idCourse'));

    this.dataService.outputCoursesForStud(idUser)
      .pipe(first())
      .subscribe(
        data => {
          this.user_courses = data;
          for (let i = 0; i < this.user_courses.length; i++) {
            if (this.user_courses[i].idCourse == id) {
              this.joinOk = true;
            }
          }
        },
        error => {
          this.loader = false;
        })
  }

  joinCourse() {
    if (!this.joinOk) {
      this.dataService.joinCourse(this.idUser, this.idCourse)
        .pipe(first())
        .subscribe(
          data => {
            this.dataService.addLastChanges(
              this.idUser,
              this.current_course.idCourse,
              this.first_module.idModule,
              this.first_lesson.idLesson,
              this.first_task.idTask).pipe(first())
              .subscribe(
                data => {
                  window.location.reload();
                },
                error => {
                  window.location.reload();
                })
          }, error => {
          });
    }
  }

  addCourseFavourite(idCourse: any) {
    this.dataService.addFavourite(idCourse, this.idUser)
      .pipe(first())
      .subscribe(
        data => {
          this.courseService.showAlertSuccess("Курс успешно добавлен в избранное")
          window.location.reload();
        },
        error => {
          this.courseService.showAlertError("Что-то пошло не так")
        }
      )
  }

  trashCourseFavourite(idCourse: any) {
    this.dataService.trashFavouriteCourses(this.idUser, idCourse,)
      .pipe(first())
      .subscribe(
        data => {
          this.courseService.showAlertSuccess("Курс успешно удален")
          window.location.reload();
        },
        error => {
          this.courseService.showAlertError("Что-то пошло не так")
        }
      )
  }

  resumeCourse(idCourse: any) {
   this.courseService.resumeCourse(idCourse);
  }

}

