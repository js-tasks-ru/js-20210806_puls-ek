/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {

			// проверки для теста
			if(size == 0) { return ''; }
			if(size == undefined) { return string; }

			for(let i=0; i<string.length; i++){
					string = searchDouble(string, size, i, string[i]);
				}
			
			return string;
			
}


function searchDouble(string, size, posCurrent, simCurrent){
			
			let strNew = simCurrent;
			let i = posCurrent+1;
			
			for(i ; i < string.length; i++){
					
					if(simCurrent == string.charAt(i)){
							strNew = strNew + simCurrent;
						}
					
					if(simCurrent != string.charAt(i)){
							break;
						}				
				}
			
			// взять нужное количество
			if(strNew.length > size) { strNew = strNew.slice(0, size);}		
			
			// объединить с куском строки слева
			strNew = string.slice(0, posCurrent) + strNew;		
			
			// объединить с куском строки справа
			strNew = strNew + string.slice((i));
			
			return strNew;
			
		}
