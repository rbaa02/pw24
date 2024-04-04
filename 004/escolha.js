function f_carregar(){
    let lst = [
        "Flamengo",
        "Corinthians",
        "São Paulo",
        "Palmeiras",
        "Santos",
        "Vasco da Gama",
        "Grêmio",
        "Internacional",
        "Cruzeiro",
        "Atlético Mineiro"
    ];

    lst.forEach((element, i) => {
        document.write(`Minha escolha ${i + 1} é ${element}` + '<br>');
    });
}