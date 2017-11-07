const setResult=result=>document.getElementById('result').innerHTML=`Результат: ` + result;
const addition=(a,b)=>{
	result=parseInt(a)+parseInt(b);
setResult(result);
};


const subtraction=(a,b)=>{
	result=parseInt(a)-parseInt(b);
setResult(result);
};


const multiplication=(a,b)=>{
	result=parseInt(a)*parseInt(b);
setResult(result);
};


const division=(a,b)=>{
	result=parseInt(a)/parseInt(b);
setResult(result);
};
