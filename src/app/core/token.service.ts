import { Injectable, inject, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class TokenService {
    token: string;
    constructor(@Inject(PLATFORM_ID) private platformId: string) { }
    setToken(token: string) {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem('token', token)
        }
    }

    getToken(): string {
        if (isPlatformBrowser(this.platformId)) {
            if (localStorage.getItem('token'))
                this.token = 'Bearer ' + localStorage.getItem('token').trim();
            return this.token
        }
        return null;
    }

}