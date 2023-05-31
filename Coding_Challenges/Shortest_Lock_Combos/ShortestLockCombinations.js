//given two arrays, the first is the key for the lock, the second is the hidden combo
//try to open the lock with minimum rotations .
//example: ShortestLockCombinations("926","487") ==> ['5 Rotations ', '4 Rotations ', '1 Rotations ']


function CombosDifference(num1,num2) {
	var sum1= num1-num2
	var sum2= num2-num1
	var combos=[]
	
	if(sum1<0){
		sum1=Math.abs((sum1)+10)
		combos.push(sum1)
		combos.push(sum2)
	} else {
		sum2=Math.abs((sum2)+10)
		combos.push(sum1)
		combos.push(sum2)
	}
	

	if(combos[0]<=combos[1]){
		return combos[0]
	} else{
		return combos[1]
	}
}

function ShortestLockCombinations(key, hidden) {
	var result=[]
	//check if argument length is eqaul to 2
	if(arguments.length !== 2){
		return "Enter a key and a hidden combo"
	} else {
	//check also if entered arguments are strings
	//and if any of entered strings lengths is different than 3
		if(typeof key !== 'string' || typeof hidden !== 'string' || key.length !== 3 || hidden.length !== 3){
			return "Enter 2 valid strings"
		}
	  else {
		for(var i=0; i<key.length;i++){
			var temp = CombosDifference(key[i], hidden[i])
			result.push((temp+" Rotations "))
		}
	   }
	}
	return result
}