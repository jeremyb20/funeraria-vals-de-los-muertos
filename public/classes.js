class Cliente{
  constructor(pnombre,papellidos,pcedula,pprovincia,pcanton,pdistrito,pedad,pgenero,pemail,ppassword){
    this.nombre = pnombre;
    this.apellidos = papellidos;
    this.cedula = pcedula;
    this.provincia = pprovincia;
    this.canton = pcanton;
    this.distrito = pdistrito;
    this.edad = pedad;
    this.genero = pgenero;
    this.email = pemail;
    this.password = ppassword;
  }

  getNombre(){
    return `${this.nombre} ${this.apellidos}`;
  }
}