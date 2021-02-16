module.exports.minusindiandate = date => {
      var userdate = date.toString()
      var d = new Date(userdate);
      var ye = d.getFullYear();
      var da = d.getDate();
      var mo = d.getMonth()+1;
      var finaldate = ('0' + da.toString()).slice(-2)+"-"+('0' + mo.toString()).slice(-2)+"-"+ye.toString()
      return finaldate
}

module.exports.slashindiandate = date => {
      var userdate = date.toString()
      var d = new Date(userdate);
      var ye = d.getFullYear();
      var da = d.getDate();
      var mo = d.getMonth()+1;
      var finaldate = ('0' + da.toString()).slice(-2)+"/"+('0' + mo.toString()).slice(-2)+"/"+ye.toString()
      return finaldate
}
