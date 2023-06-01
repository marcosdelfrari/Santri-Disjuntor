<template>
  <section id="depoimento" class="section4">
<h2>Comentários</h2>

    <div class="comment">
  <div class="user">
    <img src="../../assets/images/user.png" alt="Foto do Usuário" />
    <div class="user-info">
      <span class="user-name">Maria Oliveira</span>
      <span class="comment-text">Estou muito satisfeita com o Disjuntor Tripolar Caixa Moldada da Soprano. Ele proporciona uma proteção eficiente e é fácil de instalar. Ótimo produto!</span>
    </div>
  </div>
</div>

<div class="comment">
  <div class="user">
    <img src="../../assets/images/user.png" alt="Foto do Usuário" />
    <div class="user-info">
      <span class="user-name">Carlos Santos</span>
      <span class="comment-text">Esse disjuntor é uma excelente opção para proteger os circuitos elétricos. Estou muito satisfeito com sua performance e qualidade. Recomendo a todos!</span>
    </div>
  </div>
</div>

<div class="comment">
  <div class="user">
    <img src="../../assets/images/user.png" alt="Foto do Usuário" />
    <div class="user-info">
      <span class="user-name">João Silva</span>
      <span class="comment-text">Esse disjuntor tripolar é excelente! Oferece uma proteção confiável para os circuitos de distribuição, geradores e motores. Recomendo!</span>
    </div>
  </div>
</div>

   
    <div v-for="comment in comments" :key="comment.id" class="comment">
      <div class="user">
        <img src="../../assets/images/user.png" alt="Foto do Usuário" />
        <div class="user-info">
          <span class="user-name">{{ comment.name }}</span>
          <span class="comment-text">{{ comment.message }}</span>
        </div>
      </div>
    </div>
    <div class="comentario">
    <button class="expand-button" @click="expandForm">
      Deixar um Comentário
    </button>

    
    <form class=formulario v-if="showForm" @submit.prevent="submitComment">
      <input
        v-model="comment.name"
        type="text"
        placeholder="Seu Nome"
        required
      />
      <textarea
        v-model="comment.message"
        placeholder="Seu Comentário"
        required
      ></textarea>
       <button type="submit">Confirmar</button>
    </form></div>
  </section>
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
