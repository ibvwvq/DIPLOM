import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatedCoursesRoutingModule } from './created-courses-routing.module';
import { CreatedCoursesComponent } from './created-courses.component';

import {TuiIslandModule} from '@taiga-ui/kit';
import {TuiLinkModule} from '@taiga-ui/core';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiInputModule} from '@taiga-ui/kit';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiTextfieldControllerModule} from '@taiga-ui/core';
import { CreateCourseModule } from '../create-course/create-course.module';

import {AppbarModule} from "../appbar/appbar.module";
import {TuiSvgModule} from '@taiga-ui/core';
import {TuiDialogModule} from '@taiga-ui/core';
import { FilterPipe } from 'src/app/services/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    declarations: [
        CreatedCoursesComponent,
        FilterPipe
    ],
    exports: [
        CreatedCoursesComponent
    ],
    imports: [
        CommonModule,
        CreatedCoursesRoutingModule,
        TuiIslandModule,
        TuiLinkModule,
        TuiInputModule,
        ReactiveFormsModule,
        TuiButtonModule,
        TuiTextfieldControllerModule,
        CreateCourseModule,
        AppbarModule,
        TuiSvgModule,
        TuiDialogModule,
        NgxPaginationModule
    ]
})
export class CreatedCoursesModule { }
