function inicio(){
  const f = window.prompt(`Qual é a temperatura aqui nos EUA?: `);
  const c = Number(f - 32) / Number(1.8);
  window.alert(`no Brasil estaria: ${c}`);
}
inicio()