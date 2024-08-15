<script setup>
// import "@/utils/letterAnimation.js"
import loadModel from "@/utils/3dAnimation.js"
import { onMounted } from "vue";


onMounted(() => {

  loadModel()



  // function ajustarAlturaContainers() {
  //   const alturaTela = window.innerHeight
  //   const containersPortifolio = document.querySelectorAll('.container-portifolio')

  //   containersPortifolio.forEach((container) => {
  //     container.style.height = alturaTela + 'px'
  //   })
  // }

  // ajustarAlturaContainers()
  // window.addEventListener('resize', ajustarAlturaContainers)

  const portfolioBoxes = document.querySelectorAll('.box-portifolio')

  portfolioBoxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
      expandBox(box)
    })

    box.addEventListener('mouseout', () => {
      resetBoxes()
    })
  })

  function expandBox(box) {
    box.style.width = '40%'

    portfolioBoxes.forEach((otherBox) => {
      if (otherBox !== box) {
        otherBox.style.width = '20%'
      }
    })
  }

  function resetBoxes() {
    portfolioBoxes.forEach((box) => {
      if (window.innerWidth > 800) {
        box.style.width = '25%' // Set width to 25% for smaller screens
      } else {
        box.style.width = '50%' // Keep the original width for tablets and larger
      }
    })
  }

})

</script>

<template>
  <canvas id="3d" class="d-none d-md-block"></canvas>

  <!-- <div id="loading-wrapper">
  <div class="loading">
    <div class="wave"></div>
    <img
      src="@/assets/img/logo-magmeta-white.svg"
      alt="logo-magmeta"
      height="32px"
      data-aos="fade"
      data-aos-delay="2000"
    />
  </div>
</div> -->


  <main>
    <section id="primeira-sessao">
      <div class="container box-1">
        <div class="row linha-1 align-items-center">
          <div class="box-texto-magmetize col-sm-12 col-md-6">
            <div class="texto1 d-flex">
              <div class="texto-center">
                <h1 id="texto-magnetize-metas">
                  Magnetize as metas do seu negócio!
                </h1>
                <h6>
                  Dinamismo, agilidade e criatividade para <br />
                  transformar sua ideia em um
                  <br class="d-md-none" />
                  <span id="key-words">
                    <span class="word wisteria">aplicativo</span>
                    <span class="word belize">sistema</span>
                    <span class="word wisteria">website</span>
                    <span class="word belize">projeto</span>
                    <span class="word belize">e-commerce</span>
                    <span class="word belize">ERP</span>
                    <span class="word belize">ERP</span>
                  </span>
                </h6>
              </div>
            </div>

            <div class="d-none d-md-block">
              <ul class="d-flex">
                <li class="mx-2 my-2">
                  <img src="@/assets/img/logo-instagram-white.svg" alt="LogoInsta" class="img-fluid mr-3 logo" />
                </li>

                <li class="mx-2 my-2">
                  <img src="@/assets/img/logo-bolinha-white.svg" alt="LogoBolinha" class="img-fluid mr-3 logo" />
                </li>

                <li class="mx-2 my-2 logo-behance">
                  <img src="@/assets/img/logo-behance-white.svg" alt="LogoBehance" class="img-fluid mr-3 logo" />
                </li>
              </ul>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 d-flex justify-content-end container-img-app-magmeta">
            <div class="img-app-magmeta d-md-none">
              <img class="app-magmeta" src="@/assets/img/img-app-magmeta.png" alt="" data-aos="zoom-in" />

              <img class="pop-up" src="@/assets/img/pop-uiux.png" id="pop-up-1" data-aos="fade-up" alt="" />
              <img class="pop-up" src="@/assets/img/pop-brand.png" id="pop-up-2" data-aos="fade-up" alt="" />
              <img class="pop-up" src="@/assets/img/pop-web.png" id="pop-up-3" data-aos="fade-up" alt="" />
              <img class="pop-up" src="@/assets/img/pop-app.png" id="pop-up-4" data-aos="fade-up" alt="" />
            </div>
          </div>
        </div>

        <div class="row align-items-end pt-5 pb-5">
          <a href="https://api.whatsapp.com/send?phone=SEU_NÚMERO_DE_TELEFONE&text=Olá equipe Magmeta%20vim pelo site e gostaria de orçar meu projeto com vocês!"
            target="_blank" class="botao-whatsapp d-flex justify-content-end col-3">
            <img src="@/assets/img/logo-wpp.svg" alt="IconeWpp" />
          </a>
        </div>
      </div>
    </section>

    <section id="segunda-sessao">
      <div class="container" id="texto-projetos">
        <div class="row text-center" id="linha-txt-projetos">
          <h2>Projetos selecionados</h2>
        </div>
        <div class="row gx-2 gy-2 tag-portifolio">
          <div class="col">
            <div class="tag" data-aos="fade-up">
              <h5>Aplicativo mobile</h5>
            </div>
          </div>
          <div class="col">
            <div class="tag" data-aos="fade-up" data-aos-delay="200">
              <h5>UI/UX Design</h5>
            </div>
          </div>
          <div class="col">
            <div class="tag" data-aos="fade-up" data-aos-delay="400">
              <h5>Ilustrações</h5>
            </div>
          </div>
          <div class="col">
            <div class="tag" data-aos="fade-up" data-aos-delay="600">
              <h5>Branding</h5>
            </div>
          </div>
          <div class="col">
            <div class="tag" data-aos="fade-up" data-aos-delay="800">
              <h5>Sites</h5>
            </div>
          </div>
          <div class="col">
            <div class="tag" data-aos="fade-up" data-aos-delay="100">
              <h5>Aplicativo mobile</h5>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid" id="portifolio-desktop" data-aos="fade">
        <div class="d-flex flex-wrap portifolio align-items-center">
          <div class="box-portifolio" id="container-portifolio-1" width="">
            <div class="container-portifolio">
              <div class="texto-portifolio">
                <h6 class="texto-h6-port">V Tel</h6>
                <h4 class="texto-h4-port">Aplicativo</h4>
              </div>

              <img src="@/assets/img/app-oak.png" alt="" />

              <div class="box-texto-p1">
                <p>
                  Somos a revolução da internet com qualidade e confiabilidade
                  no Brasil.
                </p>

                <button type="button" class="btn botao-portifolio white-space text-nowrap btn-outline-light">
                  Explorar
                  <img src="@/assets/img/setinha-portifolio.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div class="box-portifolio" id="container-portifolio-2" width="">
            <div class="container-portifolio">
              <div class="texto-portifolio">
                <h6 class="texto-h6-port">NFT Marketplace</h6>
                <h4 class="texto-h4-port">Ui/Ux Design</h4>
              </div>

              <img src="@/assets/img/app-nft.png" alt="" />

              <div class="box-texto-p1">
                <p>
                  Somos a revolução da internet com qualidade e confiabilidade
                  no Brasil.
                </p>

                <button type="button" class="btn botao-portifolio white-space text-nowrap btn-outline-light">
                  Explorar
                  <img src="@/assets/img/setinha-portifolio.svg" alt="" />
                </button>
              </div>
            </div>
          </div>

          <div class="box-portifolio" id="container-portifolio-3" width="">
            <div class="container-portifolio">
              <div class="texto-portifolio">
                <h6 class="texto-h6-port">McLovs Barbearia</h6>
                <h4 class="texto-h4-port">Branding</h4>
              </div>

              <img src="@/assets/img/app-mclove.png" alt="" />

              <div class="box-texto-p1">
                <p>
                  Somos a revolução da internet com qualidade e confiabilidade
                  no Brasil.
                </p>
                <button type="button" class="btn botao-portifolio white-space text-nowrap btn-outline-light">
                  Explorar
                  <img src="@/assets/img/setinha-portifolio.svg" alt="" />
                </button>
              </div>
            </div>
          </div>

          <div class="box-portifolio" id="container-portifolio-4" width="">
            <div class="container-portifolio">
              <div class="texto-portifolio">
                <h6 class="texto-h6-port">Klubi</h6>
                <h4 class="texto-h4-port">Website/Blog</h4>
              </div>

              <img src="@/assets/img/site-klubi.png" alt="" />

              <div class="box-texto-p1">
                <p>
                  Somos a revolução da internet com qualidade e confiabilidade
                  no Brasil.
                </p>
                <button type="button" class="btn botao-portifolio white-space text-nowrap btn-outline-light">
                  Explorar
                  <img src="@/assets/img/setinha-portifolio.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid" id="portifolio-mobile">
        <div class="d-flex portifolio align-items-center">
          <div class="box-portifolio" id="container-portifolio-1" width="">
            <div class="container-portifolio">
              <div class="texto-portifolio">
                <h6 class="texto-h6-port">V Telecom</h6>
                <h4 class="texto-h4-port">Aplicativo</h4>
              </div>

              <img src="@/assets/img/app-oak.png" alt="" />

              <div class="box-texto-p1">
                <p>
                  Somos a revolução da internet com qualidade e confiabilidade
                  no Brasil.
                </p>

                <button type="button" class="btn botao-portifolio white-space text-nowrap btn-outline-light">
                  Explorar
                  <img src="@/assets/img/setinha-portifolio.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div class="box-portifolio" id="container-portifolio-2" width="">
            <div class="container-portifolio">
              <div class="texto-portifolio">
                <h6 class="texto-h6-port">NFT Marketplace</h6>
                <h4 class="texto-h4-port">Ui/Ux Design</h4>
              </div>

              <img src="@/assets/img/app-nft.png" alt="" />

              <div class="d-flex box-texto-p1 text justify-content-between">
                <p>
                  Somos a revolução da internet com qualidade e confiabilidade
                  no Brasil.
                </p>

                <button type="button" class="btn botao-portifolio white-space text-nowrap btn-outline-light">
                  Explorar
                  <img src="@/assets/img/setinha-portifolio.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex portifolio align-items-center">
          <div class="box-portifolio" id="container-portifolio-3" width="">
            <div class="container-portifolio">
              <div class="texto-portifolio">
                <h6 class="texto-h6-port">V Telecom</h6>
                <h4 class="texto-h4-port">Aplicativo</h4>
              </div>

              <img src="@/assets/img/app-mclove.png" alt="" />

              <div class="box-texto-p1">
                <p>
                  Somos a revolução da internet com qualidade e confiabilidade
                  no Brasil.
                </p>

                <button type="button" class="btn botao-portifolio white-space text-nowrap btn-outline-light">
                  Explorar
                  <img src="@/assets/img/setinha-portifolio.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div class="box-portifolio" id="container-portifolio-4" width="">
            <div class="container-portifolio">
              <div class="texto-portifolio">
                <h6 class="texto-h6-port">NFT Marketplace</h6>
                <h4 class="texto-h4-port">Ui/Ux Design</h4>
              </div>

              <img src="@/assets/img/site-klubi.png" alt="" />

              <div class="d-flex box-texto-p1 text justify-content-between">
                <p>
                  Somos a revolução da internet com qualidade e confiabilidade
                  no Brasil.
                </p>

                <button type="button" class="btn botao-portifolio white-space text-nowrap btn-outline-light">
                  Explorar
                  <img src="@/assets/img/setinha-portifolio.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="terceira-sessao">
      <div class="container">
        <div class="row">
          <div class="d-flex pt-5 botao-nossa-ex">
            <button class="botao-roxo botao-nossa-ex">
              <h5 class="texto-botao">
                Nossa expertise
                <img src="@/assets/img/seta-botao.svg" class="seta-botao-ex" alt="" />
              </h5>
            </button>
          </div>
        </div>

        <div class="row pt-5 pb-5 mt-5 mb-5">
          <div class="col-md-6 d-sm-flex d-md-none justify-content-end align-items-center">
            <img class="img-fluid" src="@/assets/img/img-caminho.png" alt="" />
          </div>

          <div class="col-md-6">
            <div class="box-texto-caminho">
              <h1 class="texto1 text-right">
                Sabemos o caminho para<br />dar vida à sua ideia
              </h1>
              <h6>
                Validamos a ideia, construímos do zero ou evoluímos produtos
                já existentes.<br />
                Estamos prontos para ajudar em qualquer etapa do ciclo de vida
                de seu produto.
              </h6>
              <button class="botao-roxo botao-nossa-ex">
                <h5 class="texto-botao">
                  Nossa expertise
                  <img src="@/assets/img/seta-botao.svg" class="seta-botao-ex" alt="" />
                </h5>
              </button>
            </div>
          </div>

          <div class="col-md-6 d-md-flex d-none justify-content-end align-items-center">
            <img class="img-fluid" src="@/assets/img/img-caminho.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section id="quarta-sessao">
      <div class="container text-center mt-5">
        <div class="row texto-construimos-juntos">
          <h2>Já construímos juntos com:</h2>
        </div>
        <div class="row linha-logos mb-5 pb-3">
          <div class="col">
            <img src="@/assets/img/logo-cadcam-white.svg" alt="logo-usados-cad" class="logo-marca logo" />
          </div>
          <div class="col">
            <img src="@/assets/img/logo-mclove-white.svg" alt="logo-mclove" class="logo-marca logo" />
          </div>
          <div class="col">
            <img src="@/assets/img/logo-klubi-white.svg" alt="logo-klubi" class="logo-marca logo" />
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-6">
            <div>
              <img class="img-fluid" src="@/assets/img/MagmetaImg.png" id="img-mag" width="100%" alt="" />
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-6 mt-5 pt-5 mb-5">
            <div class="box-sobre-nos">
              <h1 class="texto-sobre-nos-1">Sobre nós</h1>
              <div class="d-flex justify-content-between">
                <div class="d-flex align-items-center gap-2">
                  <img src="@/assets/img/icone-check-white.svg" class="logo-check-1" alt="" />
                  <h4 class="logo-check m-0">Design</h4>
                </div>
                <div class="d-flex align-items-center gap-2">
                  <img src="@/assets/img/icone-check-white.svg" class="logo-check-2" alt="" />
                  <h4 class="logo-check m-0">Dev</h4>
                </div>
                <div class="d-flex align-items-center gap-2">
                  <img src="@/assets/img/icone-check-white.svg" class="logo-check-3" alt="" />
                  <h4 class="logo-check m-0">Valores</h4>
                </div>
              </div>

              <div class="d-flex texto-sobre-nos-2">
                <h6>
                  Validamos a ideia, construímos do zero ou evoluímos produtos
                  já existentes. Estamos prontos para ajudar em qualquer etapa
                  do ciclo<br />
                  de vida de seu produto.
                </h6>
              </div>

              <div class="d-flex pt-1 botao-nossa-ex">
                <button class="botao-roxo">
                  <h5 class="texto-botao">
                    Nossa expertise
                    <img src="@/assets/img/seta-botao.svg" class="seta-botao-ex" alt="" />
                  </h5>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="quinta-sessao">
      <div class="container text-center">
        <div class="row pt-5 pb-5">
          <div class="col-sm-12 col-md-6 mt-5 mb-5">
            <div class="box-texto-caminho">
              <h1 class="texto1 text-right">
                Tem uma ideia?<br />
                Vamos conversar!
              </h1>

              <button class="botao-roxo botao-nossa-ex">
                <h5 class="texto-botao">Vamos conversar</h5>
              </button>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 d-flex img-vamos-conversar">
            <div>
              <img class="img-fluid pb-5rem" src="@/assets/img/desenho magmeta 1 1.png" width="400px"
                id="mascote-magmeta" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

</template>
