"use strict";
var Watcher = (function () {
    function Watcher(observe) {
        this.observe = observe;
        this._subscribers = new Array();
        this.actionNames = {
            onNext: 'onNext',
            onError: 'onError',
            onComplete: 'onComplete'
        };
        var uid = 0;
        this.observe(this._WatcherActions);
        for (var actionName in this.actionNames) {
            this._WatcherActions[actionName] = this[actionName];
        }
        this.getUid = {
            next: function () {
                return uid++;
            }
        };
    }
    Watcher.prototype.subscribe = function (onNext, onError, onComplete) {
        var _this = this;
        var subscribeObject = {
            onNext: onNext,
            onError: onError,
            onComplete: onComplete,
            id: this.getUid.next()
        };
        this._subscribers.push(subscribeObject);
        return {
            dispose: function () {
                var idx = _this._subscribers.indexOf(subscribeObject);
                if (idx) {
                    _this._subscribers.splice(idx, 1);
                }
            }
        };
    };
    Watcher.prototype.invoke = function (args, funcName) {
        this._subscribers.forEach(function (subscriber) {
            subscriber[funcName](args);
        });
    };
    Watcher.prototype.onNext = function (args) {
        this.invoke(args, this.actionNames.onNext);
    };
    Watcher.prototype.onError = function (args) {
        this.invoke(args, this.actionNames.onError);
    };
    Watcher.prototype.onCompleted = function (args) {
        this.invoke(args, this.actionNames.onComplete);
    };
    return Watcher;
}());
exports.Watcher = Watcher;
//# sourceMappingURL=Jaffa.Watcher.js.map