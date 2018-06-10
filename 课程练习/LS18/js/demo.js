var arr1=[2,5,8];
var arr2=[1,6,7];
var arr3=[];
arr1.forEach(function(a,i){
	//console.log(a,i,this);
	arr3[i]=a>arr2[i]?a:arr2[i];
},arr2);
console.log(arr3);