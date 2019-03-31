function isCardNo(card)  
{  
   // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  
   var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
   if(reg.test(card) === false)  
   {  
       alert("身份证输入不合法");  
       return  false;  
   }  
}  

/^[a-zA-Z0-9]{3,21}$/; //护照

/^[a-zA-Z0-9]{5,21}$/; //港澳回归证 和 台胞证

/^[a-zA-Z0-9]{3,21}$/;//  户口本

/^[\u4e00-\u9fa5]{0,}$/;//  汉字/

// https://www.cnblogs.com/zhuangfei/p/8205023.html   正则地址
