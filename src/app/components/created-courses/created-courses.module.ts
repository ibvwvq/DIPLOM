import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatedCoursesRoutingModule } from './created-courses-routing.module';
import { CreatedCoursesComponent } from './created-courses.component';

import {TuiIslandModule} from '@taiga-ui/kit';
import {TuiLinkModule} from '@taiga-ui/core';

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
        TuiIslandModule,
        TuiLinkModule
    ]
})
export class CreatedCoursesModule { }
