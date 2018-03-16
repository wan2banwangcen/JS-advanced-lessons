//字面量
var str="abc_def_ghi_jkl_mn";

//转义字符 \n：换行符  \"：双引号  \'：单引号  \\：反斜杠
console.log("abc\ndefghi\\\n\'mn\'");//abc
                                     //defghi\ 
                                     //'mn'

//字符串常用操作
var str = "abc_def_ghi_jkl_mn";
// str.split("_"); //["abc", "def", "ghi", "jkl", "mn"]
// str.split("_",2);//["abc","def"]
// str.concat("_opq");//"abc_def_ghi_jkl_mn_opq"
// str.substr(4,7);//"def_ghi"
// str.substring(4,7);//"def"
// str.slice(2);//"c_def_ghi_jkl_mn"
// str.slice(2,5);//"c_d"
// str.slice(-2);//"mn"
// str.slice(2,-2);//"c_def_ghi_jkl_"