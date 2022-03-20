
// // //Asal sayı
function findPrime(...numbers) {
      let control=0;
      for (let i = 0; i < numbers.length; i++) {
          for(let j=2; j<numbers[i];j++){
              if(numbers[i]%j==0){
                  control++;
              }

              
          }
          if(control==0)
          {
              console.log("Asal sayı:"+" "+numbers[i]);
          }
          else{
              console.log("Asal sayı değildir."+" "+numbers[i]);
              control=0;
          }
      }
  }
  
       
      findPrime(2, 3, 5, 7,8, 11,12, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59);
  



// //Arkadaş sayılar
function friendNumber(a,b) {
      let control=0;
      let control1=0;
          for(let j=1; j<a;j++){
              if(a%j==0){
                  control=control+j;
              }
              
          }
          for(let j=1; j<b;j++){
            if(b%j==0){
                control1=control1+j;
            }
           
        }
          if(control==b&&control1==a)
          {
             
                console.log("Arkadaş sayıyıdır.")
              
            
          }
          else{
              console.log("Arkadaş sayı değildir")
          }
      }
  friendNumber(220,284);
  friendNumber(210,456);


// //1000'e kadarki tüm mükemmel sayılar

        let control=0;
            for(let j=1; j<=1000;j++){
              for(let i=1;i<j;i++){
                if(j%i==0){
                    control=control+i;
                }
              }
              if(control==j){
                console.log("Mükemmel sayı:"+" "+j);
               
              }
              control=0;
            }
            
        
// //1000'e kadarki tüm asal sayılar
  let kontrol=0;
  for (let i = 0; i <= 1000; i++) {
      for(let j=2; j<i;j++){
          if(i%j==0){
              kontrol++;
          }

          
      }
      if(kontrol==0)
      {
          console.log("Asal sayı:"+" "+i);
      }
     kontrol=0;
  }


