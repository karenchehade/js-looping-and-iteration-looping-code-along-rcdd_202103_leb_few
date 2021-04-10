function writeCards(arr_str , name){
  for(let i=0 ; i< arr_str.length ; i++){
    arr_str.push(`Thank you, ${arr_str[i]} , for the wonderful ${name} gift!`);

  }
    arr_str.splice(0,3);

    return arr_str;
}
writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");

function countDown(int_number) {
  if(int_number > 0){
while (int_number >= 0) {
      console.log(int_number);
      int_number--;
    }
  }
}
countDown(10);
