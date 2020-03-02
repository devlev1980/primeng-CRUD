import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    users: User[] = [];
    cols = [
        {field: 'name', header: 'name'},
        {field: 'username', header: 'username'},
        {field: 'email', header: 'email'},
        {field: 'phone', header: 'phone'},
        {field: 'actions', header: ''},
    ];
    showEditUserDialog: boolean = false;
    showYesNoDialog: boolean = false;
    private showAddUserDialog: boolean = false;
    private selectedUser: User;

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.userService.getUsers().subscribe(users => {
            this.users = users;
            console.log(this.users);
        });
    }

    onAddUser() {
        this.showAddUserDialog = true;

    }

    onCloseAddUserDialog(event: boolean) {
        this.showAddUserDialog = event;
    }

    onAddUserEmitter(event: User) {
        console.log(event);
        this.userService.addUser(event).subscribe((res) => {
            if (res) {
                console.log('good');
            } else {
                console.log('bad');
            }
        });
    }

    onSelectRow(rowData: User) {
        console.log(rowData);
        this.selectedUser = rowData;
        this.showEditUserDialog = true;
    }


    onCloseEditDialog(event: boolean) {
        this.showEditUserDialog = event;
    }

    onYesDialog(user: { id; user, event }) {
        this.userService.editUser(user).subscribe(res => {
            if (res) {
                this.showEditUserDialog = false;

                console.log('good');
            } else {
                console.log('bad');
            }
        });
    }

    onDeleteRow(rowData) {
        this.showYesNoDialog = true;
        this.selectedUser = rowData;
    }

    onCloseDeleteUserDialog($event: boolean) {
        this.showYesNoDialog = false;
    }

    onDeleteUser(event: string) {
        this.userService.deleteUser(event).subscribe(res => {
            if (res) {
                console.log('yes');
            } else {
                console.log('bad');
            }
        });
    }
}
