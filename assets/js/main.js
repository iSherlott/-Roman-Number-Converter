function romanoParaDecimal(numero) {
  let table = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let r = 0;
  let ln = null;
  numero = numero.toUpperCase();
  for (let i = numero.length - 1; i >= 0; i--) {
    let char = numero.charAt(i);
    for (let key in table) {
      if (char === key) {
        let nc = parseInt(table[key]);
        if (ln !== null) {
          if (nc < ln) {
            nc = nc * -1;
          }
        }
        r = r + nc;
        ln = nc;
      }
    }
  }
  return r;
}

function decimalParaRomano(numero) {
  let r = "";
  let divisao = 0;
  let resto = numero;
  let vetorNumeros = [1000, 500, 100, 50, 10];
  let vetorRomanos = ["M", "D", "C", "L", "X"];
  let vetorDezena = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  for (let i = 0; i < vetorNumeros.length; i++) {
    divisao = parseInt(resto / vetorNumeros[i]);
    resto = numero % vetorNumeros[i];
    if (divisao > 0) {
      for (let x = 0; x < divisao; x++) {
        r = r + vetorRomanos[i];
      }
    }
    if (resto < 10) {
      r = r + vetorDezena[resto - 1];
      break;
    }
  }
  return r;
}

function valid_romano(number) {
  var regExp;

  switch (document.querySelector("#opc").value) {
    case "romano":
      regExp = /[a-b,e-h,j,k,m-u,w,y,z,0-9,@¨!#$%^&*()/\\\'\"\`\-\+\{\}]/i;
      return !regExp.test(number);

    case "decimal":
      regExp = /[a-z,¨@!#$%^&*()/\\\'\"\`\-\+\{\}]/i;
      return !regExp.test(number);

    default:
      return false;
  }
}

function calc() {
  let input = document.querySelector("#input_date").value;
  document.querySelector(".content").style.color = "black";
  document.querySelector(".content").style.fontSize = "80px";

  if (valid_romano(input)) {
    switch (document.querySelector("#opc").value) {
      case "romano":
        document.querySelector(".content").innerHTML = romanoParaDecimal(input);
        break;
      case "decimal":
        document.querySelector(".content").innerHTML = decimalParaRomano(input);
        break;
      default:
        document.querySelector(".content").innerHTML = "Erro Interno";
    }
  } else {
    document.querySelector(".content").style.color = "red";
    document.querySelector(".content").style.fontSize = "50px";
    document.querySelector(".content").innerHTML = "Valor Informado Inválido";
  }
}
