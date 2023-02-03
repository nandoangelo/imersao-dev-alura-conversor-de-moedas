
// Cotações das moedas em Real Brasileiro (02/02/2023)
const cotacaoDoDolar = 5.0307; // 5,03 reais
const cotacaoDoEuro = 5.4496; // 5,45 reais
const cotacaoDaLibra = 6.1350; // 6,13 reais
const cotacaoDoBitcoin = 120135.69; // 120.135,69 reais

// Formata valores conforme as moedas:
// 'BRL' = Real brasileiro (valor padrão)
// 'USD' = Dólar americano
// 'EUR' = Euro
// 'GBP' = Libras esterlinas
// 'BTC' = Bitcoins
function formataValores(valor, moeda = 'BRL') {
  const valorFormatado = new Intl.NumberFormat('pt-BR', {style:'currency', currency: moeda}).format(valor);
  return valorFormatado;
}

// Nossa função principal para converter os valores
function converterMoedas() {

  // Variáveis
  let valorParaConverter = document.getElementById('valorParaConverter');
  let moedaOrigem = document.getElementById('moedaOrigem');
  let res = document.getElementById('resposta');
  let moedaConvertida = document.getElementById('moedaConvertida');
  let valorConvertido = 0;

  // Convertendo o valor digitado em número
  valorParaConverter = Number(valorParaConverter.value);

  // Opções de conversão (conforme a seleção do usuário)
  switch (moedaOrigem.value) {
    case 'USD':
      valorConvertido = valorParaConverter * cotacaoDoDolar;
      moedaConvertida.innerText = `${formataValores(valorParaConverter, 'USD')} dólares`;
    break;
    case 'EUR':
      valorConvertido = valorParaConverter * cotacaoDoEuro;
      moedaConvertida.innerText = `${formataValores(valorParaConverter, 'EUR')} euros`;
    break;
    case 'GBP':
      valorConvertido = valorParaConverter * cotacaoDaLibra;
      moedaConvertida.innerText = `${formataValores(valorParaConverter, 'GBP')} libras esterlinas`;
    break;
    case 'BTC':
      valorConvertido = valorParaConverter * cotacaoDoBitcoin;
      moedaConvertida.innerText = `${formataValores(valorParaConverter, 'BTC')} Bitcoins`;
    break;
    default:
    alert('Desculpe. Não encontrei o valor que vc queria')
  }

  // Insere o valor convertido e formatado na área de respostas
  res.innerText = formataValores(valorConvertido);
}

// Função para limpar os valores digitados e de resposta
function limparValores() {
  // Recebe os elementos do HTML
  let valorParaConverter = document.getElementById('valorParaConverter');
  let res = document.getElementById('resposta');
  let moedaConvertida = document.getElementById('moedaConvertida');

  // Zera seus valores
  valorParaConverter.value = '';
  res.innerText = 'R$ 0,00';
  moedaConvertida.innerText = 'US$ 0,00 dólares';
}