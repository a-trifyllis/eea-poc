import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {GroupControl} from '../controls/group-control';
import {BaseControl} from '../controls/base-control';
import {GroupingService} from '../grouping.service';

@Component({
    selector: 'dynamic-form',
    templateUrl: './dynamic-form.component.html',
    styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

    @Input() formGroup: FormGroup;

    @Input() groupControl: GroupControl;

    groupedControls: BaseControl[][];

    constructor(private groupingService: GroupingService) {
    }

    ngOnInit() {
        this.groupedControls = this.groupingService.groupControls(this.groupControl);
    }

}
