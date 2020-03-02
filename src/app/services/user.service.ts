import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private _http: HttpClient) {
    }

    getUsers(): Observable<User[]> {
        return this._http.get<User[]>(`${environment.apiUrl}/users`);
    }

    addUser(user) {
        return this._http.post(`${environment.apiUrl}/users`, user);
    }

    editUser(event: { id: string, user: User, event }) {
        return this._http.put(`${environment.apiUrl}/users/${event.id}`, event.user);
    }

    deleteUser(userId: string) {
        return this._http.delete(`${environment.apiUrl}/users/${userId}`);
    }
}
