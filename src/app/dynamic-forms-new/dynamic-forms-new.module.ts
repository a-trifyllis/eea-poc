import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AutoCompleteModule, InputTextModule, MessagesModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import {ReactiveFormsModule} from '@angular/forms';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import { DynamicFormConrolComponent } from './dynamic-form-conrol/dynamic-form-conrol.component';
import { ErrorMessagesComponent } from './error-messages/error-messages.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ButtonModule,
        AutoCompleteModule,
        InputTextModule,
        MessagesModule,
        CalendarModule
    ],
    declarations: [DynamicFormComponent, DynamicFormConrolComponent, ErrorMessagesComponent]
})
export class DynamicFormsNewModule {
}
