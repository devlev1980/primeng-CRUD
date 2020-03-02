import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {User} from '../../models/user';
import * as uuid from 'uuid';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
    @Input() display: boolean = false;
    @Output() closeDialogEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() addUserEmitter: EventEmitter<User> = new EventEmitter<User>();
    userForm: FormGroup;
    userId = '';

    constructor(private fb: FormBuilder, private userService: UserService) {
        this.userId = uuid.v4();
    }

    ngOnInit(): void {
        this.userForm = this.fb.group({
            id: [this.userId || 0],
            name: [''],
            username: [''],
            email: [''],
            phone: ['']
        });
    }

    onCloseDialog(event: any) {
        console.log(event);
        this.closeDialogEmitter.emit(event);
    }

    onAddUser(form: User) {
        this.display = false;
        this.closeDialogEmitter.emit(this.display);
        this.addUserEmitter.emit(form);


    }
}
