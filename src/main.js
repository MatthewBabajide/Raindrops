
const rainDrops= (num) => { 
    let code= '';

      if (!Number(num)) return 'invalid input please input a number';
         if (num % 3 === 0) {
            code += "Pling";
          }
          if (num % 5 === 0) {
            code +=  "Plang";
          }
          if (num % 7 === 0) {
            code += "Plong";
          }
          if (code.length ===0) {
            return Number(num);
          }
        return code;
    }   

export default rainDrops;