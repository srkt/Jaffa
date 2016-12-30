
interface IWatcherActions{
    id:number;
    onNext:Function;
    onError:Function;
    onComplete:Function;
}

interface WatcherFunc {
    (WatcherActions:IWatcherActions):void;
}

interface IDisposable {
    dispose:Function;
}

/* 
Watcher takes an WatcherFunc and registers it. 
Observers can subscribe to this WatcherFunc and receive updates of events 
*/
export class Watcher{

private _WatcherActions:IWatcherActions;
private _subscribers:Array<IWatcherActions> = new Array<IWatcherActions>();
private actionNames:{     onNext:string,
    onError:string,
    onComplete:string } = {
    onNext:'onNext',
    onError:'onError',
    onComplete:'onComplete'
};

private getUid :{ next:() => number};

constructor(private observe:WatcherFunc){
            var uid:number = 0;


          this.observe(this._WatcherActions);

          for(var actionName in this.actionNames){
              this._WatcherActions[actionName] = this[actionName]; 
          }

          this.getUid =  {
             next:()=>{
                return uid++;
             }
          };


}


subscribe(onNext:Function,onError:Function,onComplete:Function):IDisposable{

var subscribeObject : IWatcherActions = {
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

this._subscribers.forEach((subscriber:IWatcherActions)=>{
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

