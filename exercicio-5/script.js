function inicio(){
  const emprest = window.prompt(`Qual valor do emprestimo?: `);
  const parcela = window.prompt(`Quantas parcelas?: `);
  const valor_total = Number(emprest) * Number(1 + 0.2) / Number(parcela);
  window.alert(`Vou pagar:  ${parcela} parcelas de R$: ${valor_total}`);
}
inicio();