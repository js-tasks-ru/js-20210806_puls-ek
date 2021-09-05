/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {

	const sections = path.split(".");
	  
	  return function(obj){
			
			for(let sect of  sections){
				
				if(sect in obj && typeof obj[sect] == "object"){
						obj = obj[sect];
					} else if(sect in obj) {
							return obj[sect];} 
				}
			
			}

}
