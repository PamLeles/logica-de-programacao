function inicio(){
  const reais = window.prompt(`quantos reais eu tenho?: `);
  const dolar = Number(reais) / Number(2.20);
  window.alert(`Posso ter US$: ${dolar}` )
}
inicio();