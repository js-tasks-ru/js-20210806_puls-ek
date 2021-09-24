/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
	
	if(!obj) return;
		
	return Object.entries(obj).reduce((result, [key, value]) => {
			result[value] = key;
			return result;
		}, {})
	
		// ++ Старое решение
		//const massTwo = Object.entries(obj);
		//massTwo.forEach((item, index, array) => {item.sort(()=> -1); });				
		//return Object.fromEntries(massTwo);
		// -- Старое решение		
	}
