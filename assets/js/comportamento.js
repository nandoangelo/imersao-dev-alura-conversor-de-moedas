/**
 * Cotação usada nesse exemplo baseada no valor 
 * do Real Brasileiro (R$) no dia 02/02/2023
 */

const cotacaoDoDolar = 5.0307; // 5,03 reais
const cotacaoDoEuro = 5.4496; // 5,45 reais
const cotacaoDaLibra = 6.1350; // 6,13 reais
const cotacaoDoBitcoin = 120135.69; // 120.135,69 reais

// Moedas:
// 'BRL' = Real brasileiro (valor padrão)
// 'USD' = Dólar americano
// 'EUR' = Euro
// 'GBP' = Libras esterlinas
// 'BTC' = Bitcoins
function formataValores(valor, moeda = 'BRL') {
  const valorFormatado = new Intl.NumberFormat('pt-BR', {style:'currency', currency: moeda}).format(valor);
  return valorFormatado;
}

function converterMoedas() {
  let valorParaConverter = document.getElementById('valorParaConverter');
  let moedaOrigem = document.getElementById('moedaOrigem');
  let res = document.getElementById('resposta');
  let valorConvertido = 0;

  valorParaConverter = Number(valorParaConverter.value);

  switch (moedaOrigem.value) {
    case 'USD':
      valorConvertido = valorParaConverter * cotacaoDoDolar;
    break;
    case 'EUR':
      valorConvertido = valorParaConverter * cotacaoDoEuro;
    break;
    case 'GBP':
      valorConvertido = valorParaConverter * cotacaoDaLibra;
    break;
    case 'BTC':
      valorConvertido = valorParaConverter * cotacaoDoBitcoin;
    break;
    default:
    alert('Desculpe. Não encontrei o valor que vc queria')
  }

  res.innerText = formataValores(valorConvertido);

  console.log(valorConvertido);

}