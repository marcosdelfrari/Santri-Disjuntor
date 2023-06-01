<template>
 <nav><div class="navbar">
  <div class="logo">
    <img src="../../assets/images/logo.png" alt="Logo" />
  </div>
  <button class="menu-button" @click="toggleMenu">
    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="style=linear">
    <g id="menu-hamburger">
      <path id="vector" d="M3 6H21" stroke="#e26424" stroke-width="1.5" stroke-linecap="round"/>
      <path id="vector_2" d="M3 12H21" stroke="#e26424" stroke-width="1.5" stroke-linecap="round"/>
      <path id="vector_3" d="M3 18H21" stroke="#e26424" stroke-width="1.5" stroke-linecap="round"/>
    </g>
  </g>
</svg>

  </button>
  </div>
 </nav>
<div class="promo"><p>Potência e segurança garantidas: Desconto especial!</p></div>
<div class="menu" :class="{ 'menu-open': isMenuOpen }">
  <ul v-if="isMenuOpen">
    <li><a href="#inicio" @click="selectLink(1)">INICIO</a></li>
    <li><a href="#recursos" @click="selectLink(2)">RECURSOS</a></li>
    <li><a href="#depoimento" @click="selectLink(3)">DEPOIMENTOS</a></li>
    <li><a href="#contato" @click="selectLink(4)">CONTATO</a></li>
  </ul>
</div>

</template>

<script>
import { myFunctions } from "../../mixins/functions.js";
export default {
  mixins: [myFunctions],
};
</script>

<style lang="scss">
@import "../../styles/styles.scss";
@import "../../styles/reset.scss";

path {
  fill: $cor-icone; 
}
</style>
