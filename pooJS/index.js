class Persona{
  constructor(nombre,edad,sexo){
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
  }

  getNombre(){
    return this.nombre;
  }

  getEdad(){
    return this.edad;
  }

  getSexo(){
    return sexo;
  }

  saludo(){
    return `Hola ${this.nombre}, tienes ${this.edad} años y eres del sexo ${this.sexo}`
  }
}


const usuarios = []

const registrarUsuario = (nombre,edad,sexo) =>{
  usuarios.push(new Persona(nombre,edad,sexo));
}


registrarUsuario('Daniela',22,'Femenino')
registrarUsuario('Roberto',35,'Masculino')
registrarUsuario('Xavier',30,'Masculino')

console.log(usuarios)

