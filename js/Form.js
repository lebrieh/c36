class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Ingresa tu nombre");
    this.playButton = createButton("Jugar");
    this.titleImg = createImg("./assets/title.png", "titulo del juego");
    this.greeting = createElement("h2");
  }

  setElementsPosition(){
    this.input.position(width/2-100,height/2 -80);
    this.playButton.position(width/2-90,height/2 -20);
    this.titleImg.position(120,160);
    this.greeting.position(width/2-300,height/2 -100);
  } 

  setElementsStyle() {
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.titleImg.class("gameTitle");
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
  }

}
