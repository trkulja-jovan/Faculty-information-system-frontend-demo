import { Predmet } from "./predmet";
import { Student } from "./student";

export class Ispit {

    constructor(public ocena : number,
                public datumPolaganja : Date,
                public predmet : Predmet,
                public student : Student){

    }
}
