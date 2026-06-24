export function generarLorem(n: number): string {

  if (n<1){
    return "."
  }
  else if (n<2){
    return "Lorem ipsum" + generarLorem(n-1)
  }
  else{
    return "Lorem ipsum" + " " + generarLorem(n-1)
  }
}

console.log(generarLorem(5));
