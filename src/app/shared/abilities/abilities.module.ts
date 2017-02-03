import { NgModule } from '@angular/core';

import { AbilitiesComponent } from './abilities.component';
import { StFormModule } from '../form/form.module';

@NgModule({
    imports: [StFormModule],
    exports: [AbilitiesComponent],
    declarations: [AbilitiesComponent],
    providers: [],
})
export class AbilitiesModule { }
