//Declaro los valores a tipar con un TYPE // declare a value w/a type

type Result = "Victoria" | "Derrota";
//creo un estado // create a state
export const state = {
  name:"",
  transitioned: false,
  playerId:"" as any,
  playerTwoId:"" as any,
  playerNames:{},
  roomId:"",
  roomLargeId:"",
  createNewRoom:false,
  p1Choice:"",
  p2Choice: "",
  matchCounter: { pc: 0, me: 0 }, 
  listeners: [],
  results: [],
  

  
  //obtengo el resultado
  getResults: function () {
    return this.results;
  },
  
  notifyListeners: function () {
    this.listeners.forEach((listener) => listener());
  },


  resetState: function () {
    this.p1Choice = "";
    this.results = [];
    this.notifyListeners();

 },

  //funcion donde la pc escoge entre p,p o t // function where the pc chooses between r,p or s
  pcSelectChoice: function () {
    //buscar un numero aleatorio entre 0 y 2 // search a aleatory number between 0 and 2
    const ppot = Math.floor(Math.random() * 3);
    if (ppot === 0) {
      // si mi numero aleatorio es x entonces la eleccion es... // if my aleatory number is x so the election is
      this.p2Choice = "piedra";
    } else if (ppot === 1) {
      this.p2Choice = "papel";
    } else if (ppot === 2) {
      this.p2Choice = "tijera";
    }
    
  },

  //funcion donde el usuario escoge entre p,p o t // function where the user chooses between r,p or s

  subscribe: function (listener:Function) {
    this.listeners.push(listener);
  },

  //manejar victoria/derrota // handle victory or lose
  handleVictory: function (result: Result) {
    console.log("Manejando victoria/derrota:", result);
  this.results.push(result)
    if (result === "Victoria") {
        this.matchCounter.me++;
        console.log(this.matchCounter);
        
    } else if (result === "Derrota") {
        this.matchCounter.pc++;
    }
    this.notifyListeners(); // Notifica a los suscriptores
},

  //procesar resultado // process results
  processResult: function () {
    console.log("Ejecutando processResult", this.p1Choice, this.p2Choice);

    if (!this.p1Choice || !this.p2Choice) {
        console.error("No se puede procesar el resultado porque falta una elección.");
        return;
    }

    if (this.p1Choice === this.p2Choice) {
        console.log("Empate");
        this.results.push("Empate");
    } else if (
        (this.p1Choice === "piedra" && this.p2Choice === "tijera") ||
        (this.p1Choice === "papel" && this.p2Choice === "piedra") ||
        (this.p1Choice === "tijera" && this.p2Choice === "papel")
    ) {
        console.log("Victoria");
        this.handleVictory("Victoria");
    } else {
        console.log("Derrota");
        this.handleVictory("Derrota");
    }
    console.log("Resultados actuales:", this.results);
},


};


