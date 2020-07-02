var arr = [0, 1, 4, 1, 2];

function lastIndexOf (num) {
  
  for(let i = arr.length-1; i >= 0; i--){
    if (arr[i]===num){
      

    }
}
}
/*  if (i === num){
  return true;}
  else{ return -1;}

}
}
console.log(lastIndexOf(9))

for(int i=a.length()-1;i>=b.length()-1;i--){
			if(b.equals(a.substring(i-b.length()+1,i+1))){
				to_return = i-b.length()+1;
				break;
			}
		}

		return to_return;*/
console.log(lastIndexOf(4))

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = moves => {
 let  position = [0,0]

  for (var i = 0; i < moves.length; i++){
  
    if (moves[i]=== 'north'){ 
      position[1] +=1
    } else if (moves[i]=== 'south'){
      position[1] -=1    
    } else if (moves[i]=== 'east' ){
       position[0]+= 1    
    } else if (moves[i]=== 'west'){
       position[0] -= 1}
  }//end of for loop
  return position;
