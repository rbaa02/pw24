function f_romano(){
    let valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let romano = [
        "M",'CM','D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'
    ]
    let r = '';
    let n = document.getElementById('nbmr').value;
    n = parseInt(n);

    for (i=0; i<valores.length; i++){
        
        while(valores[i] <= n){
            r+=romano[i]
            n-=valores[i]
        }
    }

    document.getElementById("result").textContent = r;
}