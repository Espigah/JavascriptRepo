import 'reflect-metadata';
import 'zone.js/dist/zone';

import {
 Component,
 View
} from 'angular2/core';



@Component({
    selector: 'app',
    templateUrl: 'client/app.html'
})

export class AppComponent {
    //parties: Mongo.Cursor<Object>;

    constructor() {
       // this.parties = Parties.find();
    }

    removeParty(party) {
        //Parties.remove(party._id);
    }
}


 