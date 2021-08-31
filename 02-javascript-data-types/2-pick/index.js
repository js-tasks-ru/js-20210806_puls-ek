/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {

			let massElements = Object.entries(obj); 
			let massPosNum = []; // для хранения последовательности найденных полей в Объекте
			let ObjNew = {};
			
			fields.forEach(function(item) {
						
						for (let i = 0; i < massElements.length; i++) {
							if(massElements[i][0] === item) {massPosNum.push(i);}
						}
						
					});
				
			massPosNum.sort(); // Сортируем чтобы последовательность совпадала с начальным объектом
				
			for (let PosNum of massPosNum){
					ObjNew[massElements[PosNum][0]]	= massElements[PosNum][1];		
				}
					
			return ObjNew;

	};
