import {Injectable} from '@angular/core';
import {BaseControl, ControlType} from '../dynamic-forms/controls/base-control';

@Injectable()
export class GroupingService {

    constructor() {
    }

    /**
     * Groups controls in rows (for the desired number of elements per row) and also takes care to group separately
     * in case the control is a GROUP or ARRAY
     *
     * @param {BaseControl<string>[]} controls
     * @param {number} controlsPerRow
     * @returns {BaseControl<string>[][]}
     */
    groupControls(controls: BaseControl<string>[], controlsPerRow: number): BaseControl<string>[][] {
        return this.groupRecursive([], [], controls, controlsPerRow);
    }

    private groupRecursive(groupedControls: BaseControl<string>[][], tempGroup: BaseControl<string>[],
                           controls: BaseControl<string>[], controlsPerRow: number) {

        if (controls.length === 0) {
            // last iteration, add remaining controls in a group
            this.pushNonEmptyGroup(tempGroup, groupedControls);
            return groupedControls;
        } else if (this.isMultiControlType(controls)) {
            // first create new group with previous found controls (if any)
            this.pushNonEmptyGroup(tempGroup, groupedControls);
            // then we create a new group with only the GROUP or ARRAY
            groupedControls.push([controls[0]]);
            // then reset the temporary group array
            tempGroup = [];
        } else if (this.isTempGroupFull(tempGroup, controlsPerRow)) {
            // we created new group...
            groupedControls.push(tempGroup);
            // ... but also start a new temp group, in case control[0] was the last of the controls
            tempGroup = [controls[0]];
        } else {
            // in all other cases we just add to the temp array
            tempGroup.push(controls[0]);
        }
        return this.groupRecursive(groupedControls, tempGroup, controls.slice(1), controlsPerRow);
    }

    private pushNonEmptyGroup(tempGroup: BaseControl<string>[], groupedControls: BaseControl<string>[][]) {
        if (tempGroup.length !== 0) {
            groupedControls.push(tempGroup);
        }
    }

    private isMultiControlType(controls: BaseControl<string>[]) {
        return controls[0] && (controls[0].controlType === ControlType.GROUP || controls[0].controlType === ControlType.ARRAY);
    }

    private isTempGroupFull(tempGroup: BaseControl<string>[], controlsPerRow: number) {
        return tempGroup.length === controlsPerRow;
    }
}
