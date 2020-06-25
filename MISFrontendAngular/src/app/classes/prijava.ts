import { ISubscription } from "rxjs/Subscription";
import { Student } from "./student";
import { Ispit } from "./ispit";

export class Prijava {

    constructor(public ispit : Ispit,
                public student : Student){

    }
}
