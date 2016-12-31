import { Watcher } from "./Jaffa.Watcher";


export class BaseElement {

    
    private _events:Array<Event> = null;
    private _attributes:Array<{key:string,value:string}> = null;

    constructor(private type:string) {
    
    }


}
