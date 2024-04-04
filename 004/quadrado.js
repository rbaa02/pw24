function f_quadrado(){
    let lst = [1, 2, 3, 4, 5]

    lst.map((element) => {
     document.write(`O quadrado de ${element} é ${element ** 2}` + '<br>');   
    });
}