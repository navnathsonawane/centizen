import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CentizenComponent } from './centizen.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedService } from './services/shared.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PopupModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';

const route: Routes = [
  { path: "add", component: AddUserComponent },
  { path: "display", component: DisplayUserComponent }
];

@NgModule({
  declarations: [
    CentizenComponent,
    AddUserComponent,
    DisplayUserComponent,
    PageNotFoundComponent,
    PopupModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route),
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [CentizenComponent]
})
export class CentizenModule { }
