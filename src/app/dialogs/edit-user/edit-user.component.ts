import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../../models/user';

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
    userForm: FormGroup;
    @Input() display: boolean;
    @Input() selectedUser: User;
    @Output() closeDialogEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() yesDialogEmitter: EventEmitter<{ id, user, event }> = new EventEmitter<{ id, user, event }>();

    constructor(private fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.userForm = this.fb.group({
            id: [this.selectedUser.id],
            name: [this.selectedUser.name],
            username: [this.selectedUser.username],
            email: [this.selectedUser.email],
            phone: [this.selectedUser.phone]
        });
    }

    onCloseDialog(event: any) {
        this.closeDialogEmitter.emit(event);
    }

    onEditUser(user: User, event) {
        event.preventDefault();
        this.display = false;
        this.yesDialogEmitter.emit({id: user.id, user: user, event: event});
    }
}
