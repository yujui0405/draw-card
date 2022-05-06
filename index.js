model={

}

view={
  renderCard(){
    const cards = document.querySelector(".cards")
    cards.innerHTML = `<div class="card back" />`
  }
}

controller={
  generateCard(){
    view.renderCard()
  }
}

controller.generateCard()