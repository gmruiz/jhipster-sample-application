import { NgModule } from '@angular/core';

import { StoreappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [StoreappSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [StoreappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class StoreappSharedCommonModule {}
