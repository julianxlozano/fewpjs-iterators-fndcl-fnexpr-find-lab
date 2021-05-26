function superbowlWin(array){
   let win = array.find(function(record){return record.result === "W" })
   if (!!win === false){
        return 
   }else{
    return win.year}

};
