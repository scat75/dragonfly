import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HealthComponent } from './main/health/health.component';
import { SpaceActivemqComponent } from './main/space-activemq/space-activemq.component';
import { PacksComponent } from './main/packs/packs.component';
import { StatisticComponent } from './statistic/statistic.component';
import { SearchFormComponent } from './statistic/search-form/search-form.component';
import { MessageListComponent } from './statistic/message-list/message-list.component';
import { ActivemqService } from './services/activemq.service';
import { ElasticService } from './services/elastic.service';
import { MessageService } from './services/message.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { QueueComponent } from './main/queue/queue.component';
import { PackComponent } from './main/pack/pack.component';

const appRoutes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'statistic', component: StatisticComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HealthComponent,
    SpaceActivemqComponent,
    PacksComponent,
    StatisticComponent,
    SearchFormComponent,
    MessageListComponent,
    HeaderComponent,
    QueueComponent,
    PackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ActivemqService,
    ElasticService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
