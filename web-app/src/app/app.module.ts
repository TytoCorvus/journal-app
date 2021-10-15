import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleItemListComponent } from './components/simple-item-list/simple-item-list.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { ItemBuilderComponent } from './components/item-builder/item-builder.component';
import { SimpleEntryBuilderComponent } from './components/simple-entry-builder/simple-entry-builder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoalBuilderComponent } from './components/goal-builder/goal-builder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ProjectBuilderComponent } from './components/project-builder/project-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SimpleItemListComponent,
    ItemBuilderComponent,
    SimpleEntryBuilderComponent,
    GoalBuilderComponent,
    ProjectBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
