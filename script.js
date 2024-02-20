function whatever() {
    const ptext = (document.getElementById("ptext").value).toLowerCase();
    const keyword = (document.getElementById("keyword").value).toLowerCase();
    let results = ""
    let cpair = [];
  
    for (let i = 0; i < ptext.length; i++) {
      cpair.push(keyword[i%keyword.length] + ptext[i]);
    }
  
    for (let x of cpair){
      let h1 = x.charCodeAt(0) - 96
      let h2 = x.charCodeAt(1) - 96
      let char = String.fromCharCode((h1 + h2)%26 + 95)
      if (char === "_") {
        char = "y"
      } else if (char === "`") {
        char = "z"
      }
      results += char
    }
  
    document.getElementById("result").innerHTML = results;
  }