import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AutoCompleteModule, InputTextModule, MessagesModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/calendar';
import {ButtonModule} from 'primeng/button';
import {ReactiveFormsModule} from '@angular/forms';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';

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
    declarations: [DynamicFormComponent]
})
export class DynamicFormsNewModule {
}
