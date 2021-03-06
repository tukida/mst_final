import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { AddComponent } from './components/event/add/add.component';
import { ListComponent } from './components/event/list/list.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserService } from './services/user.service';
import { EventService } from './services/event.service';
import { AsyncLocalStorage } from 'angular-async-local-storage/src/service/lib.service';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import {
  NgbModal,
  ModalDismissReasons,
  NgbModule,
  NgbModalModule
} from '@ng-bootstrap/ng-bootstrap';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule
} from '@angular/material';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { HomeComponent } from './components/home/home.component';
import { CalendarHeaderComponent } from './calendar-utils/calendar-header/calendar-header.component';
import { DateTimePickerComponent } from './calendar-utils/date-time-picker/date-time-picker.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DialogEventComponent } from './components/dialog/dialog-event/dialog-event.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddComponent,
    ListComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    CalendarHeaderComponent,
    DateTimePickerComponent,
    CalendarComponent,
    DialogEventComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BootstrapModalModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [UserService, EventService, NgbModal, AuthGuard, NotAuthGuard],
  bootstrap: [AppComponent, CalendarComponent, DialogEventComponent],
  exports: [CalendarComponent],
  entryComponents: [DialogEventComponent]
})
export class AppModule {}
