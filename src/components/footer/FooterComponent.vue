<template>
  <div id="contato" class="contato">
    <div class="address">
      <h2>SANTRI HOME CENTER</h2>
      <br />
      <p>
        Rua c-255, 270 - Edificio Empresarial Sebba<br />Setor Nova Suiça -
        Goiânia / GO
      </p><br/>
    </div>
    <div class="contact-buttons">
      <a
        href="https://api.whatsapp.com/send?phone=62952520200&text=Gostaria+de+saber+mais+sobre+o+produto%3A+https%3A%2F%2Fsantriweb.com.br%2Fproduto%2F16991-disjuntor-caixa-moldada-tripolar-dle1600-h-1600a"
      >
        <button class="whatsapp-button">WhatsApp</button>
      </a>
      <a href="tel:6235952695">
        <button class="phone-button">(62) 3595-2695</button>
      </a>
    </div>
  </div>
  <div class="social-icons">
    <a href="#" class="instagram-icon"
      ><svg
        width="60px"
        height="60px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11ZM18 7.5C18 8.32843 17.3284 9 16.5 9C15.6716 9 15 8.32843 15 7.5C15 6.67157 15.6716 6 16.5 6C17.3284 6 18 6.67157 18 7.5ZM14 13C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13C10 11.8954 10.8954 11 12 11C13.1046 11 14 11.8954 14 13ZM16 13C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13C8 10.7909 9.79086 9 12 9C14.2091 9 16 10.7909 16 13Z"
          fill="#222222"
        /></svg
    ></a>
    <a href="#" class="facebook-icon"
      ><svg
        fill="#000000"
        height="45px"
        width="45px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="-143 145 512 512"
        xml:space="preserve"
      >
        <path
          d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M169.5,357.6l-2.9,38.3h-39.3
	v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7c8.7-11.5,20.6-19.3,41.1-19.3c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2
	c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z"
        /></svg
    ></a>
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
</style>
