function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var img = document.createElement("img");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute("src", "kid-masc.png");
        img.width = 400;
        img.height = 400;
      } else if (idade >= 10 && idade < 21) {
        //Jovem
        img.setAttribute("src", "jovem-masc.png");
        img.width = 400;
        img.height = 400;
      } else if (idade >= 21 && idade < 55) {
        //Adulto
        img.setAttribute("src", "adulto-masc.png");
        img.width = 400;
        img.height = 400;
      } else if (idade >= 55) {
        // Idoso
        img.setAttribute("src", "idoso-masc.png");
        img.width = 400;
        img.height = 400;
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute("src", "kid-fem.png");
        img.width = 400;
        img.height = 400;
      } else if (idade >= 10 && idade < 21) {
        //Jovem
        img.setAttribute("src", "jovem-fem.png");
        img.width = 400;
        img.height = 400;
      } else if (idade >= 21 && idade < 55) {
        //Adulto
        img.setAttribute("src", "adulto-fem.png");
        img.width = 400;
        img.height = 400;
      } else if (idade >= 55) {
        // Idoso
        img.setAttribute("src", "idosa-fem.png");
        img.width = 400;
        img.height = 400;
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
