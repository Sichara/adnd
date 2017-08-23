import { NgModule } from '@angular/core';
import { HelpComponent } from './help.component';
import { SharedModule } from '../../shared/index';
import { HelpService } from './help.service';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [HelpComponent],
  exports: [HelpComponent],
  providers: [HelpService]
})
export class HelpModule { }
