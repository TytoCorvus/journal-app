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

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SimpleItemListComponent,
    ItemBuilderComponent,
    SimpleEntryBuilderComponent,
    GoalBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
