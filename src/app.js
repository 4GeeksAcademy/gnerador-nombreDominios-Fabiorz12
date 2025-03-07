window.onload = function() {
  let pronoun = ["your","our","my"];
  let adj = ["strong","smart","brave","fast","friendly"]
  let noun = ["engineer","farmer","leader","musician","teacher"];

  for(let i = 0 ; i< pronoun.length;i++){
    for(let j = 0; j < adj.length; j++){
      for(let k = 0; k < noun.length; k++){
        console.log(pronoun[i] + adj[j] + noun[k] + '.com')
        document.querySelector("#generator").innerHTML = pronoun[i] + adj[i] + noun[i] + ".com"
      }
    }
  }



  
}
