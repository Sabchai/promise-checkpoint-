//1st task 
function delay(str) {
    return new Promise(resolve => setTimeout(resolve, str));
  }
  
  async function iterateWithAsyncAwait() {
    for (let i = 0; i < 5; i++) {
      console.log(i);
      await delay(1000); 
    }
  }
  
  iterateWithAsyncAwait();

// 2nd and 3rd task 
  async function call() {
    try {
        const data= await fetch('https://covid-19-data.p.rapidapi.com/country/code?format=json&code=it')
   return data
    } catch (err) {
        console.log(err)
    }
    
  }
  // 4th task 
  async function fetchAPI1() {
    try {
        const [res1,res2]= await Promise.all([fetch('https://covid-19-data.p.rapidapi.com/country/code?format=json&code=it'), fecth('https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1')])
    return [res1, res2]
    } catch (err) {
        console.log(err)
    }
    
  }