function firstNonRepeatedChar(str) {
	let ch = ""
	for(let v of str){
		if(str.indexOf(v) == str.lastIndexOf(v)){
			ch += v
			break
		}
	}
	if(ch){
		return ch
	}else{
		return null
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
