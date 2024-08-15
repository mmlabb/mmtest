<script setup>
import { RouterView } from 'vue-router'
import themeSwitch from "@/utils/themeSwitch.js"
import { ref } from 'vue';

let isDark = ref(0)

function toggleTheme() {
  isDark.value = !isDark.value
  themeSwitch(isDark)
}

</script>


<template>
  <div id="app-theme" class="theme-dark">

    <header>
      <nav class="navbar navbar-expand-lg">
        <div class="container container-nav d-flex justify-content-between align-items-center">
          <a class="nav-brand" href="/">
            <img src="@/assets/img/logo-magmeta-white.svg" alt="logo-magmeta" height="48px" class="logo"
              data-aos="fade" />
          </a>

          <div class="d-flex menu-botao">
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Inicio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Projetos</a>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Menu
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li>
                      <a class="dropdown-item" href="#">Another action</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div class="text-center justify-content-between" id="menu-nav">
              <div class="navbar-nav flex-row">
                <div class="botao-tema">
                  <input @change="toggleTheme" type="checkbox" class="checkbox chk" id="chk-1" />
                  <label class="label" for="chk-1">
                    <div class="ball"></div>
                    <vue-feather type="moon"></vue-feather>
                    <vue-feather type="sun"></vue-feather>

                  </label>
                </div>

                <div class="botao-conversar">
                  <button type="button" class="btn btn-outline-info">
                    Vamos conversar
                  </button>
                </div>
              </div>
            </div>

            <div class="botao-tema btn-mobile">
              <input @change="toggleTheme" type="checkbox" class="checkbox chk" id="chk-2" />
              <label class="label" for="chk-2">
                <div class="ball"></div>
                <vue-feather type="moon"></vue-feather>
                <vue-feather type="sun"></vue-feather>

              </label>
            </div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span>
                <img src="@/assets/img/logo-menu-white.svg" class="logo" alt="" />
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>

    <RouterView />

    <footer>
      <div class="container text-center rodape">
        <div class="d-flex linha-rodape flex-wrap justify-content-between">
          <div class="col-md-2" id="logo-rodape">
            <img src="@/assets/img/logo-magmeta-white.svg" alt="logo-rodape" class="logo img-fluid"
              style="height: 3rem" />
          </div>

          <!-- <div class="col-md-8"></div> -->

          <div class="col-md-2" id="seta-rodape">
            <a href="#" id="btn-scroll-top" class="back-to-top" title="Voltar ao topo"><img
                src="@/assets/img/logo-seta-rodape-white.svg" alt="seta-rodape" class="logo" /></a>
          </div>
        </div>
        <div class="row pt-4">
          <div class="col d-flex justify-content-center">
            <div class="mx-2 my-2">
              <img src="@/assets/img/logo-behance-white.svg" alt="logo-behance" class="logo" />
            </div>
            <div class="mx-2 my-2">
              <img src="@/assets/img/logo-bolinha-white.svg" alt="logo-bolinha" class="logo" />
            </div>
            <div class="mx-2 my-2">
              <img src="@/assets/img/logo-instagram-white.svg" alt="logo-instagram" class="logo" />
            </div>
          </div>
        </div>

        <div class="row pt-5">
          <div class="col-md-6 d-flex justify-content-center justify-content-md-start p-0">
            <small id="texto-localizacao">Brasília - DF 04.704.383/0001-30</small>
          </div>
          <div class="col-md-6 d-flex justify-content-center justify-content-md-end opacity-50">
            <small id="copyright">© &nbsp;<span id="ano-atual"></span>&nbsp; Magmeta Tecnologia -
              Todos os direitos reservados</small>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
