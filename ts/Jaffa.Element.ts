import { Watcher } from "./Jaffa.Watcher";

export module Jaffa {

export class Element {

    
    private _events:Array<Event> = null;
    private _attributes:Array<{key:string,value:string}> = null;

    constructor(private type:string) {
    
    }


}
}