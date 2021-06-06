var age = 65;
var isMember = true;
var result = null;
if(age>=60 && isMember){
    result = 'シニア会員割引の対象です';
}else{
    result = 'シニア会員割引の対象ではありません';
}
document.write(result);