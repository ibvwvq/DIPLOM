import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppbarRoutingModule } from './appbar-routing.module';
import { AppbarComponent } from './appbar.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiInputModule, tuiAvatarOptionsProvider } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import {TuiAvatarModule} from '@taiga-ui/kit';

@NgModule({
  declarations: [
    AppbarComponent
  ],
  exports:[AppbarComponent],
  imports: [
    CommonModule,
    AppbarRoutingModule,
    TuiButtonModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiAvatarModule
  ],
  providers: [
    tuiAvatarOptionsProvider({
      size: 'l',
      autoColor: true,
      rounded: true,
    }),
  ],
})
export class AppbarModule { }
