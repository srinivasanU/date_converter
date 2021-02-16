# What is this?

Get Date conversion for your app

# Installation

`npm i dateconvertermethods --save`

Then...

```
import { minusindiandate,slashindiandate,minusshortdateindian,slashshortdateindian,minusfulldateglobal,minusshortdateglobal,slashfulldateglobal,slashshortdateglobal,mediumdate,longdate,shortfulldate,longfulldate } from 'dateconvertermethods';

minusindiandate(new Date())
slashindiandate(new Date())
minusshortdateindian(new Date())
slashshortdateindian(new Date())
minusfulldateglobal(new Date())
minusshortdateglobal(new Date())
slashfulldateglobal(new Date())
slashshortdateglobal(new Date())
mediumdate(new Date())
longdate(new Date())
shortfulldate(new Date())
longfulldate(new Date())
```

# Options

Date Convertor supports these options:

* *minusindiandate* - _dd-mm-yyyy_ 
* *slashindiandate* - _dd/mm/yyyy_ 
* *minusshortdateindian* - _dd-mm-yy_ 
* *slashshortdateindian* - _dd/mm/yy_ 
* *minusfulldateglobal* - _mm-dd-yyyy_ 
* *minusshortdateglobal* - _mm-dd-yy_ 
* *slashfulldateglobal* - _mm/dd/yyyy_
* *slashshortdateglobal* - _mm/dd/yy_ 
* *mediumdate* - _ShortMonthName dd , yyyy_ 
* *longdate* - _LongMonthName dd , yyyy_ 
* *shortfulldate* - _ShortDayName , ShortMonthName dd , yyyy_
* *longfulldate* - _LonggayName , _LongMonthName dd , yyyy_