/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {

	const sections = path.split(".");
	  
	 return function(obj){
			
		let objLocal = obj;
			
		for(let sect of sections){
				
			if(sect in objLocal && typeof objLocal[sect] === "object"){
						objLocal = objLocal[sect];
					} else if(sect in objLocal) {
							return objLocal[sect];} 
				}
			}
		}
