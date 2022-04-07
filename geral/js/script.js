function closeWpp(){
  let wpp = document.getElementById('wppId')

  wpp.style.display = "none"

}

function showMoreHidra(){
  let texto = document.getElementById('hidra')
  let space = document.getElementById('space')
  let button = document.getElementById('btnLer')

  if(space.style.display === "none"){

    space.style.display = "block"
    texto.style.display = "none"
    button.innerHTML = "Saiba Mais"

  } else {
    space.style.display = "none"

    texto.style.display = "block"
    texto.style.textAlign = "justify"
    texto.style.whiteSpace = "pre-line"
    texto.style.marginBottom = "20px"

    button.innerHTML = "Fechar"
  }
}

function showMoreEletric(){
  let texto = document.getElementById('eletric')
  let space = document.getElementById('space2')
  let button = document.getElementById('btnLer2')

  if(space.style.display === "none"){

    space.style.display = "block"
    texto.style.display = "none"
    button.innerHTML = "Saiba Mais"

  } else {
    space.style.display = "none"

    texto.style.display = "block"
    texto.style.textAlign = "justify"
    texto.style.whiteSpace = "pre-line"
    texto.style.marginBottom = "20px"

    button.innerHTML = "Fechar"
  }
}

function showMorePaint(){
  let texto = document.getElementById('paint')
  let space = document.getElementById('space3')
  let button = document.getElementById('btnLer3')

  if(space.style.display === "none"){

    space.style.display = "block"
    texto.style.display = "none"
    button.innerHTML = "Saiba Mais"

  } else {
    space.style.display = "none"

    texto.style.display = "block"
    texto.style.textAlign = "justify"
    texto.style.whiteSpace = "pre-line"
    texto.style.marginBottom = "20px"

    button.innerHTML = "Fechar"
  }
}

function showMoreRepair(){
  let texto = document.getElementById('repair')
  let space = document.getElementById('space4')
  let button = document.getElementById('btnLer4')

  if(space.style.display === "none"){

    space.style.display = "block"
    texto.style.display = "none"
    button.innerHTML = "Saiba Mais"

  } else {
    space.style.display = "none"

    texto.style.display = "block"
    texto.style.textAlign = "justify"
    texto.style.whiteSpace = "pre-line"
    texto.style.marginBottom = "20px"

    button.innerHTML = "Fechar"
  }
}

$('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1255,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 498,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });