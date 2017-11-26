import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { QuickandcleanSharedModule, UserRouteAccessService } from './shared';
import { QuickandcleanAppRoutingModule} from './app-routing.module';
import { QuickandcleanHomeModule } from './home/home.module';
import { QuickandcleanAdminModule } from './admin/admin.module';
import { QuickandcleanAccountModule } from './account/account.module';
import { QuickandcleanEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        QuickandcleanAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        QuickandcleanSharedModule,
        QuickandcleanHomeModule,
        QuickandcleanAdminModule,
        QuickandcleanAccountModule,
        QuickandcleanEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class QuickandcleanAppModule {}
