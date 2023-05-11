import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatedCoursesRoutingModule } from './created-courses-routing.module';
import { CreatedCoursesComponent } from './created-courses.component';

import {TuiIslandModule} from '@taiga-ui/kit';

@NgModule({
    declarations: [
        CreatedCoursesComponent
    ],
    exports: [
        CreatedCoursesComponent
    ],
    imports: [
        CommonModule,
        CreatedCoursesRoutingModule,
        TuiIslandModule
    ]
})
export class CreatedCoursesModule { }
