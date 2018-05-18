import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {GroupControl} from '../controls/group-control';

@Component({
    selector: 'dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

    @Input() formGroup: FormGroup;

    @Input() groupControl: GroupControl;

    constructor() {
    }

    ngOnInit() {
    }

}
