module.exports.minusfulldateindian = date => {
      var userdate = date.toString()
      var d = new Date(userdate);
      var ye = d.getFullYear();
      var da = d.getDate();
      var mo = d.getMonth()+1;
      var finaldate = ('0' + da.toString()).slice(-2)+"-"+('0' + mo.toString()).slice(-2)+"-"+ye.toString()
      return finaldate
}

module.exports.slashfulldateindian = date => {
      var userdate = date.toString()
      var d = new Date(userdate);
      var ye = d.getFullYear();
      var da = d.getDate();
      var mo = d.getMonth()+1;
      var finaldate = ('0' + da.toString()).slice(-2)+"/"+('0' + mo.toString()).slice(-2)+"/"+ye.toString()
      return finaldate
}

module.exports.minusshortdateindian = date => {
      var userdate = date.toString()
      var d = new Date(userdate);
      var ye = d.getFullYear();
      var da = d.getDate();
      var mo = d.getMonth()+1;
      var finaldate = ('0' + da.toString()).slice(-2)+"-"+('0' + mo.toString()).slice(-2)+"-"+ye.toString().slice(-2)
      return finaldate
}
      
module.exports.slashshortdateindian = date => {
      var userdate = date.toString()
      var d = new Date(userdate);
      var ye = d.getFullYear();
      var da = d.getDate();
      var mo = d.getMonth()+1;
      var finaldate = ('0' + da.toString()).slice(-2)+"/"+('0' + mo.toString()).slice(-2)+"/"+ye.toString().slice(-2)
      return finaldate
}


module.exports.minusfulldateglobal = date => {
      var userdate = date.toString()
      var d = new Date(userdate);
      var ye = d.getFullYear();
      var da = d.getDate();
      var mo = d.getMonth()+1;
      var finaldate = ('0' + mo.toString()).slice(-2)+"-"+('0' + da.toString()).slice(-2)+"-"+ye.toString()
      return finaldate
}

module.exports.minusshortdateglobal = date => {
      var userdate = date.toString()
      var d = new Date(userdate);
      var ye = d.getFullYear();
      var da = d.getDate();
      var mo = d.getMonth()+1;
      var finaldate = ('0' + mo.toString()).slice(-2)+"-"+('0' + da.toString()).slice(-2)+"-"+ye.toString().slice(-2)
      return finaldate
}

module.exports.slashfulldateglobal = date => {
      var userdate = date.toString()
      var d = new Date(userdate);
      var ye = d.getFullYear();
      var da = d.getDate();
      var mo = d.getMonth()+1;
      var finaldate = ('0' + mo.toString()).slice(-2)+"/"+('0' + da.toString()).slice(-2)+"/"+ye.toString()
      return finaldate
}

module.exports.slashshortdateglobal = date => {
      var userdate = date.toString()
      var d = new Date(userdate);
      var ye = d.getFullYear();
      var da = d.getDate();
      var mo = d.getMonth()+1;
      var finaldate = ('0' + mo.toString()).slice(-2)+"/"+('0' + da.toString()).slice(-2)+"/"+ye.toString().slice(-2)
      return finaldate
}


module.exports.mediumdate = date => {
      var userdate = date.toString()
      var d = new Date(userdate);
      var finaldate = d.toLocaleString('default', { month: 'short' }) + ' ' + ('0' + d.getDate().toString()).slice(-2) + ', ' + d.getFullYear().toString() 
      return finaldate
}

module.exports.longdate = date => {
      var userdate = date.toString()
      var d = new Date(userdate);
      var finaldate = d.toLocaleString('default', { month: 'long' }) + ' ' + ('0' + d.getDate().toString()).slice(-2) + ', ' + d.getFullYear().toString() 
      return finaldate
}

module.exports.shortfulldate = date => {
      var userdate = date.toString()
      var d = new Date(userdate);
      var finaldate = d.toLocaleString('en-us', {weekday:'short'}).toString() + ', ' + d.toLocaleString('default', { month: 'short' }) + ' ' + ('0' + d.getDate().toString()).slice(-2) + ', ' + d.getFullYear().toString() 
      return finaldate
}

module.exports.longfulldate = date => {
      var userdate = date.toString()
      var d = new Date(userdate);
      var finaldate = d.toLocaleString('en-us', {weekday:'long'}).toString() + ', ' + d.toLocaleString('default', { month: 'long' }) + ' ' + ('0' + d.getDate().toString()).slice(-2) + ', ' + d.getFullYear().toString() 
      return finaldate
}

module.exports.indiancurrencyformatnodecimal = money => {
      var truncmoney = Math.trunc(money)
      var truncmoneytostring = truncmoney.toString()
      var lastThree = truncmoneytostring.substring(truncmoneytostring.length-3);
      var otherNumbers = truncmoneytostring.substring(0,truncmoneytostring.length-3);
      if(otherNumbers != '')
            lastThree = ',' + lastThree;
      var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
      return res;
}

module.exports.indiancurrencyformatwithdecimal = money => {
      var moneytostring = money.toString();
      var afterPoint = '';
      if(moneytostring.indexOf('.') > 0)
            afterPoint = moneytostring.substring(moneytostring.indexOf('.'),moneytostring.length);
      moneytostring = Math.floor(moneytostring);
      moneytostring=moneytostring.toString();
      var lastThree = moneytostring.substring(moneytostring.length-3);
      var otherNumbers = moneytostring.substring(0,moneytostring.length-3);
      if(otherNumbers != '')
            lastThree = ',' + lastThree;
      var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
      return res;
}
