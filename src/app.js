window.onload = function() {
  let pronoun = ["your","our","my"];
  let adj = ["strong","smart","brave","fast","friendly"]
  let noun = ["engineer","farmer","leader","musician","teacher"];

  let result= " "

  for(let i = 0 ; i< pronoun.length;i++){
    for(let j = 0; j < adj.length; j++){
      for(let k = 0; k < noun.length; k++){
        let domain = pronoun[i] + adj[j] + noun[k] + '.com';
        console.log(domain);
        result += domain + "<br>";
      }
    }
  }
  document.querySelector("#generator").innerHTML = result;
}
