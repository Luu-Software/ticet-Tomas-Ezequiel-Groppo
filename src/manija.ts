export function generarLorem(n: number): string {
  if (n===0){
    return "."
  }
  else{
    return "Lorem ipsum"
  }
}

console.log(generarLorem(5));
