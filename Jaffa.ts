
export module Jaffa {

interface IObservableActions{
    id:number;
    onNext:Function;
    onError:Function;
    onComplete:Function;
}

interface ObservableFunc {
    (observableActions:IObservableActions):void;
}

interface IDisposable {
    dispose:Function;
}

/* 
Observable takes an ObservableFunc and registers it. 
Observers can subscribe to this ObservableFunc and receive updates of events 
*/
export class Observable{

private _observableActions:IObservableActions;
private _subscribers:Array<IObservableActions>;
private actionNames:{     onNext:string,
    onError:string,
    onComplete:string } = {
    onNext:'onNext',
    onError:'onError',
    onComplete:'onComplete'
};

private getUid :{ next:() => number};


constructor(private observe:ObservableFunc){
            var uid:number = 0;

          this.observe(this._observableActions);

          for(var actionName in this.actionNames){
              this._observableActions[actionName] = this[actionName]; 
          }

          this.getUid =  {
             next:()=>{
                return uid++;
             }
          };


}


subscribe(onNext:Function,onError:Function,onComplete:Function):IDisposable{

var subscribeObject : IObservableActions = {
                                            onNext: onNext,
                                            onError:onError,
                                            onComplete:onComplete,
                                            id:this.getUid.next()
                                         };

this._subscribers.push(subscribeObject);

return {

dispose:()=>{


var idx = this._subscribers.indexOf(subscribeObject);

if(idx){
    this._subscribers.splice(idx,1);
}

}


} ;

}

invoke(args:any,funcName:string):void{

this._subscribers.forEach((subscriber:IObservableActions)=>{
        subscriber[funcName](args);
});

}

onNext(args:any):void{
this.invoke(args,this.actionNames.onNext);

}

onError(args:any):void{
this.invoke(args,this.actionNames.onError);
    
}

onCompleted(args:any):void{
this.invoke(args,this.actionNames.onComplete);
}




}


export class Element {

    constructor() {

    }
}

}

