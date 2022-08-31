function inicio(){
  const anoAtual = window.prompt(`Em que ano estamos?: `);
  const anoNasci = window.prompt(`Em que ano eu nasci?: `);
  const idade = Number(anoAtual) - Number(anoNasci); 
  window.alert(`Minha idade é: ${idade}`); 
  
}
inicio();