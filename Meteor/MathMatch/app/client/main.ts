import {bootstrap} from 'angular2/platform/browser';

import {
    AppComponent
} from 'AppComponent';

bootstrap(AppComponent, [])
.then(app => {
        console.log('Bootstrap Successful');
    }, err => {
        console.error(err);
    }); 