import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { environment } from '../../../environments/environment'
@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    baseUrl = environment.apiUrl;
    constructor(
        private httpClient: HttpClient
    ) { }

    login(user: any) {
        return this.httpClient.post(this.baseUrl + 'institutionUsers/login', user)
    }


}