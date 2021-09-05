/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
	
	if(arguments.length > 0){
	
		const massTwo = (Object.entries(obj));
						
		massTwo.forEach((item, index, array) => {
				item.sort(()=> -1); 
			});				
					
		return Object.fromEntries(massTwo);
	}
}
