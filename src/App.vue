<template>
<title>{{ title }}</title>
  <div class="app">
    <HeaderComponent />
    <main>
      <Section1Component />
      <Section2Component />
      <Section3Component />
      <Section4Component />
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "./components/header/HeaderComponent.vue"; // Importa o componente Header
import Section1Component from "./components/main/Section1Component.vue"; // Importa o componente Section1
import Section2Component from "./components/main/Section2Component.vue"; // Importa o componente Section2
import Section3Component from "./components/main/Section3Component.vue"; // Importa o componente Section3
import Section4Component from "./components/main/Section4Component.vue"; // Importa o componente Section4
import FooterComponent from "./components/footer/FooterComponent.vue"; // Importa o componente Footer

export default {
  mounted() {
    document.title = "Santri Home Center";
  },
  components: {
    HeaderComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    FooterComponent,
  },
  // Resto do código do componente
};
</script>

<style>
/* Estilos do componente aqui */
</style>
