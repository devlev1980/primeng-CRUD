import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../models/user';

@Component({
    selector: 'app-yes-no',
    templateUrl: './yes-no.component.html',
    styleUrls: ['./yes-no.component.scss']
})
export class YesNoComponent implements OnInit {
    @Input() display;
    @Output() closeDialogEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() yesDialogEmitter: EventEmitter<string> = new EventEmitter<string>();
    @Input() selectedUser: User;

    constructor() {
    }

    ngOnInit(): void {
        console.log(this.selectedUser);
    }

    onCloseDialog(display: any) {
        this.closeDialogEmitter.emit(display);
    }

    onYes() {
        this.yesDialogEmitter.emit(this.selectedUser.id);
    }
}
