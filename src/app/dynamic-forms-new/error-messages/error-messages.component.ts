import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'error-messages',
    templateUrl: './error-messages.component.html',
    styleUrls: ['./error-messages.component.css']
})
export class ErrorMessagesComponent implements OnInit {

    @Input() relatedFormGroup: FormGroup;

    @Input() showNestedErrors: boolean;

    constructor() {
    }

    ngOnInit() {
    }

}
