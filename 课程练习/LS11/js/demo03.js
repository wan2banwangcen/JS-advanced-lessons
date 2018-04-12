function f(){
    var getNumFuncs=[];
    for(var i=0;i<10;i++)
    {
            getNumFuncs[i]=function(){
                return i;
            };
    }
    return getNumFuncs;
}
var tmp=f();
tmp[3]();//10


function f(){
    var getNumFuncs=[];
    for(var i=0;i<10;i++)
    {
        (function(j){
            getNumFuncs[j]=function(){
                return i;
            };
        }(i));
    }
    return getNumFuncs;
}
var tmp=f();
tmp[3]();//3

