/**
 * Cotação usada nesse exemplo baseada no valor 
 * do Real Brasileiro (R$) no dia 02/02/2023
 */

const cotacaoDoDolar = 5.0307; // 5.03 reais
const cotacaoDoEuro = 5.4496; // 5.45 reais
const cotacaoDaLibra = 6.1350; // 6.13 reais

let valorParaConverter = 0;
let valorConvertido = 0;

function estrangeiroParaReal (valorParaConverter, moedaEstrangeira) {
  return valorParaConverter * moedaEstrangeira;
}

function realParaEstrangeiro (valorEmReal, moedaEstrangeira) {
  return valorEmReal / moedaEstrangeira;
}

function estrangeiroParaEstrangeiro (moedaOrigem, moedaConverter) {
  return valorParaConverter * (moedaOrigem / moedaConverter);
}

// Moedas:
// 'BRL' = Real brasileiro (valor padrão)
// 'USD' = Dólar americano
// 'EUR' = Euro
// 'GBP' = Libras esterlinas
function formataValores(valor, moeda = 'BRL') {
  const valorFormatado = new Intl.NumberFormat('pt-BR', {style:'currency', currency: moeda}).format(valor);
  return valorFormatado;
}

valorParaConverter = prompt('Informe um valor em dólares (US$):')
valorParaConverter = Number(valorParaConverter);

valorConvertido = estrangeiroParaReal(valorParaConverter, cotacaoDoDolar);

alert(`${formataValores(valorParaConverter, 'USD')} dólares é o mesmo que ${formataValores(valorConvertido)}`)