/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {

			let massElements = Object.entries(obj); 
			let massPosNum = []; // для хранения последовательности найденных полей в Объекте
			let ObjNew = {};
						
			for (let i = 0; i < massElements.length; i++) {
					if(fields.indexOf(massElements[i][0]) == -1) { massPosNum.push(i); }
				}
				
				massPosNum.sort(); // Сортируем чтобы последовательность совпадала с начальным объектом
				
				for (let PosNum of massPosNum){
						ObjNew[massElements[PosNum][0]]	= massElements[PosNum][1];
					}
					
				return ObjNew;
				
};
