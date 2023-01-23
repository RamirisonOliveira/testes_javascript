const financiamento = (divida, pagamento) => {
    var meses = 1
    var total = 0
    
    while(divida > 0) {
        console.log(`Mês ${meses}: R$ ${divida.toFixed(2)} + 2% = R$ ${(divida * 1.02).toFixed(2)} - R$ ${pagamento.toFixed(2)} = ${(divida * 1.02-pagamento).toFixed(2)}`)
        aux    = divida * 1.02;
        divida = divida * 1.02 - pagamento;
        meses += 1;

        if(divida > 0) {
            total += pagamento;
        } else if(divida <= 0) {
            total += aux;
        }
    }

    return {meses : meses-1, total_pago : total.toFixed(2)}
}

res = financiamento(20000, 1000)

console.log(`total de meses ${res.meses} e valor total pago R$ ${res.total_pago}`);