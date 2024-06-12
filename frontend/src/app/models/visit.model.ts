import { Accompagnateur } from "./accompagnateur-model";
import {Etablissement} from "./etablissement.model";
import {Referant} from "./referant.model";

export class Visit{
  constructor(
    public id: number | null,
    public date: Date,
    public etablissement: Etablissement[],
    public referant: Referant[],
    public accompagnateur: Accompagnateur[],
    public remarques: string,
    public jeux : string[],
    public niveau : string,
    public manifestation: string
  ) { }
}
