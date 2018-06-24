//在ES5中，RegExp构造函数的参数有两种情况
//第一种情况，参数是字符串，这时第二个参数表示正则表达式的修饰符(flag)
var regex=new RegExp('xyz','i');
//等价于
var regex=/xyz/i;
//第二种情况，参数是一个正则表达式，这时会返回一个原有正则表达式的拷贝
var regex=new RegExp(/xyz/i);
//等价于
var regex=/xyz/i;
//但是，ED5不允许第一个参数时正则表达式的情况下使用第二个参数，添加修饰符，否则会报错
var regex=new RegExp(/xyz/,'i');
// Uncaught TypeError: Cannot supply flags when constructing one RegExp from another


//ES6改变了这种情况，如果RegExp构造函数第一个参数是一个正则对象，那么可以使用第二个参数指定修饰符。
//而且，返回的正则表达式会忽略原有的正则表达式的修饰符，值使用新制定的修饰符
new RegExp(/zyx/ig,'i');//flags  "i"


//（粘连sticky）修饰符
var s='aaa_aa_a';
var r1=/a+/g;
var r2=/a+/y;
r1.exec(s); // ["aaa"] index:0 input:'aaa_aa_a'
r2.exec(s); // ["aaa"] index:0 input:'aaa_aa_a'
r1.exec(s); // ["aa"]  index:4 input:'aaa_aa_a'
r2.exec(s); // null
//上面代码有两个正则表达式，一个使用g修饰符，另一个使用y修饰符
//这两个正则表达式各执行了两次，第一次执行的时候，两者行为相同，剩余的字符串都是_aa_a
//由于g没有位置要求，所以第二次执行会返回结果，而y修饰符要求匹配要从头开始，所以返回null
//g修饰符和y修饰符都是全局匹配，但g修饰符是在上次匹配位置继续寻找，直到找到匹配位置开始，不强调是在匹配的下一个位置开始匹配，在任意位置匹配到都可以
//y修饰符必须是在匹配到的下一个字符开始匹配直到成功才算。

//ES6中新增sticky属性来判断对象是否开启了y修饰符作用，开启则结果为true.
var r=/hello\d/y;
r.sticky;//true

// ES5的source属性
// 返回正则表达式的正文
/abc/ig.source
// "abc"

// ES6的flags属性
// 返回正则表达式的修饰符
/abc/ig.flags
// 'gi'