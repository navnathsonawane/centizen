import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CentizenComponent } from './centizen.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedService } from './services/shared.service';
import { ReactiveFormsModule } from '@angular/forms';

const route: Routes = [
  { path: "", redirectTo:"/add", pathMatch: 'full' },
  { path: "add", component: AddUserComponent },
  { path: "display", component: DisplayUserComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    CentizenComponent,
    AddUserComponent,
    DisplayUserComponent,
    PageNotFoundComponent    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [CentizenComponent]
})
export class CentizenModule { }
