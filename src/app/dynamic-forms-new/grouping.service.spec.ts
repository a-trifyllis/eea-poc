import {inject, TestBed} from '@angular/core/testing';

import {GroupingService} from './grouping.service';
import {TextboxControl} from '../dynamic-forms/controls/textbox-control';
import {GroupControl} from '../dynamic-forms/controls/group-controll';

let service: GroupingService;

fdescribe('GroupingService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [GroupingService]
        });
        service = TestBed.get(GroupingService);
    });

    it('should be created', inject([GroupingService], () => {
        expect(service).toBeTruthy();
    }));


    describe('Group controls per row', () => {
        it('should group correctly one control per line', () => {
            const controls = [
                new TextboxControl({
                    key: 'testTextBox1',
                    label: 'testLabel1'
                }),
                new TextboxControl({
                    key: 'testTextBox2',
                    label: 'testLabel2'
                })
            ];

            const groupedControls = service.groupControls(controls, 1);

            expect(groupedControls.length).toEqual(2);
            expect(groupedControls[0][0].key).toEqual('testTextBox1');
            expect(groupedControls[1][0].key).toEqual('testTextBox2');
        });

        it('should group correctly two controls per line', () => {
            const controls = [
                new TextboxControl({
                    key: 'testTextBox1',
                    label: 'testLabel1'
                }),
                new TextboxControl({
                    key: 'testTextBox2',
                    label: 'testLabel2'
                }),
                new TextboxControl({
                    key: 'testTextBox3',
                    label: 'testLabel3'
                })
            ];
            const groupedControls = service.groupControls(controls, 2);

            expect(groupedControls.length).toEqual(2);
            expect(groupedControls[0][0].key).toEqual('testTextBox1');
            expect(groupedControls[0][1].key).toEqual('testTextBox2');
            expect(groupedControls[1][0].key).toEqual('testTextBox3');
        });

        it('should group correctly when controls contain group in the beginning', () => {
            const controls = [
                new GroupControl({
                    key: 'testGroup1',
                    groupControls: [
                        new TextboxControl({
                            key: 'testGroupTextBox1',
                            label: 'testGroupLabel1'
                        })
                    ]
                }),
                new TextboxControl({
                    key: 'testTextBox1',
                    label: 'testLabel1'
                }),

                new TextboxControl({
                    key: 'testTextBox2',
                    label: 'testLabel2'
                }),

            ];

            const groupedControls = service.groupControls(controls, 2);

            expect(groupedControls.length).toEqual(2);
            expect(groupedControls[0][0].key).toEqual('testGroup1');
            expect(groupedControls[1][0].key).toEqual('testTextBox1');
            expect(groupedControls[1][1].key).toEqual('testTextBox2');
        });

        it('should group correctly when controls contain group in the middle', () => {
            const controls = [

                new TextboxControl({
                    key: 'testTextBox1',
                    label: 'testLabel1'
                }),
                new GroupControl({
                    key: 'testGroup1',
                    groupControls: [
                        new TextboxControl({
                            key: 'testGroupTextBox1',
                            label: 'testGroupLabel1'
                        })
                    ]
                }),
                new TextboxControl({
                    key: 'testTextBox2',
                    label: 'testLabel2'
                }),

            ];

            const groupedControls = service.groupControls(controls, 2);

            expect(groupedControls.length).toEqual(3);
            expect(groupedControls[0][0].key).toEqual('testTextBox1');
            expect(groupedControls[1][0].key).toEqual('testGroup1');
            expect(groupedControls[2][0].key).toEqual('testTextBox2');
        });

        it('should group correctly when controls contain group in the end', () => {
            const controls = [

                new TextboxControl({
                    key: 'testTextBox1',
                    label: 'testLabel1'
                }),

                new TextboxControl({
                    key: 'testTextBox2',
                    label: 'testLabel2'
                }),
                new GroupControl({
                    key: 'testGroup1',
                    groupControls: [
                        new TextboxControl({
                            key: 'testGroupTextBox1',
                            label: 'testGroupLabel1'
                        })
                    ]
                }),

            ];

            const groupedControls = service.groupControls(controls, 2);

            expect(groupedControls.length).toEqual(2);
            expect(groupedControls[0][0].key).toEqual('testTextBox1');
            expect(groupedControls[0][1].key).toEqual('testTextBox2');
            expect(groupedControls[1][0].key).toEqual('testGroup1');
        });

        it('should group correctly when only one group is provided', () => {
            const controls = [
                new GroupControl({
                    key: 'testGroup1',
                    groupControls: [
                        new TextboxControl({
                            key: 'testGroupTextBox1',
                            label: 'testGroupLabel1'
                        })
                    ]
                }),
            ];

            const groupedControls = service.groupControls(controls, 1);

            expect(groupedControls.length).toEqual(1);
            expect(groupedControls[0][0].key).toEqual('testGroup1');
        });

    });
});
