'use scrict';

var getSmallestLength = (a) => {
 let lowest = 0;
 for (var i = 1; i < a.length; i++) {
  if (a[i] < a[lowest]) lowest = i;
 }
 return a[lowest].length;
}
var array = ['ab','abc','abp'];
var getCommonPrefix = _ => {
	let prefix = '';
    if(typeof array !== 'undefined' && array.length > 0) {
    	let maxPrefixSize = window.getSmallestLength(array);
    	for(let i=1;i<=maxPrefixSize;i++) {
            for(let j=0;j<array.length;j++) {
                if(j>0) {
                    if(array[j].substr(0,i) === array[j-1].substr(0,i)) {
                        prefix = array[j].substr(0,i);
                    } else {
                        prefix = array[j].substr(0,i-1);
                        break;
                    }
                }
            }
    	}
    }
    return prefix;
}
console.log('prefix='+window.getCommonPrefix());
