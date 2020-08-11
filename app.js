const bill = [4, 5, 6, 2, 4, 1, 5, 1, 2, 9]
let count = 0;
for (var a = 0; a < bill.length; a++){
   if(bill[a]!=a+1){
            let temp = bill[a];
            bill[bill.indexOf(a+1)] =temp;
            bill[a] = a+1;
            count =count+1;
        }
   for (var b = 0; b < bill.length - 1; b++){
      if (bill[b] > bill[b + 1]) {
         var temp = bill[b]
         bill[b] = bill[b + 1]
         bill[b+1] = temp
      }
   }
   console.log([count, bill])
}