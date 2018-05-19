import {ValidatorFn} from '@angular/forms';
import {BaseControl, BaseControlOptions, ControlType} from './base-control';

export class GroupControl extends BaseControl {

    controlType = ControlType.GROUP;

    groupControls: BaseControl[];
    unrenderedControls: BaseControl[];
    groupValidators?: ValidatorFn[];
    controlsPerRow?: number;

    constructor(options: GroupControlOptions = {}) {
        super(options);

        this.groupControls = options.groupControls;
        this.unrenderedControls = options.unrenderedControls || [];
        this.groupValidators = options.groupValidators;
        this.controlsPerRow = options.controlsPerRow === undefined ? 1 : options.controlsPerRow;
    }
}

export interface GroupControlOptions extends BaseControlOptions {
    groupControls?: BaseControl[];
    unrenderedControls?: BaseControl[];
    groupValidators?: ValidatorFn[];
    controlsPerRow?: number;
}
