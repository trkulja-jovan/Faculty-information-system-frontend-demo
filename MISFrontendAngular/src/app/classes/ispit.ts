import { Predmet } from "./predmet";
import { Student } from "./student";

export class Ispit {

    constructor(public idIspit : number,
                public ocena : number,
                public predmet : string,
                public datum : Date){

    }
}
