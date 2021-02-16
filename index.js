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
