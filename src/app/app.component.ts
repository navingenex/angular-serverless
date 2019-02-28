import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { environment } from '../environments/environment';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { AuthenticationService } from './shared/services/authentication.service';
import { TokenService } from './core/token.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'bp-school';
    username: string;
    password: string;
    public ngOnInit(): void {
        if (!isPlatformBrowser(this.platformId)) {
            let bases = this.document.getElementsByTagName('base');

            if (bases.length > 0) {
                bases[0].setAttribute('href', environment.baseHref);
            }
        }
    }


    constructor(
        @Inject(PLATFORM_ID) private platformId: any,
        @Inject(DOCUMENT) private document: any,
        private auth: AuthenticationService,
        private tokenSetting: TokenService
    ) { }

    login() {
        let payload = {
            email: this.username,
            password: this.password
        }
        this.auth.login(payload).subscribe(
            (res: any) => {
                this.tokenSetting.setToken(res.data.token)
            },
            error => {
                console.error(error.error.message)
            }
        )
    }
}
