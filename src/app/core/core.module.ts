import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { PreloaderModule } from './preloader/index';
import { BlockScreenModule, ProgressModule } from './block-screen/index';
import { StHttpService, StHttpUtilService } from './http/index';
import { CacheService } from './cache/index';
import { NotificationService } from './notifications/index';
import { PreloaderService } from './preloader/index';
import { BlockScreenService } from './block-screen/index';

@NgModule({
    imports: [
    ],
    exports: [
      PreloaderModule,
      BlockScreenModule,
      ProgressModule
    ],
    providers: [
      CacheService,
      StHttpUtilService,
      StHttpService,
      NotificationService,
      PreloaderService,
      BlockScreenService
    ]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule
        };
    }

    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
