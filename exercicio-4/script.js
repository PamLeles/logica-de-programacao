function inicio(){
  const preco = window.prompt(`Qual é o preço do produto?:`);
  const imposto = Number(preco * 60) / Number(100);
  window.alert(`O imposto será de US$: ${imposto}`);
}
inicio()