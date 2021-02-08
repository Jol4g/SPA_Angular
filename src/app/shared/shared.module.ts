import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ColumnOneComponent } from './layout/column-one/column-one.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AuthRoutingModule} from '../auth/auth-routing.module';
import {MaterialModule} from '../material.module';



@NgModule({
  declarations: [HeaderComponent, ColumnOneComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ],
  exports: [ColumnOneComponent]
})
export class SharedModule { }
