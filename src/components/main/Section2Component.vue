<template>
  <section class="section2">
    <div class="content">
      <img src="../../assets/images/produto2.png" alt="Imagem do Produto" />
      <div id="recursos" class="options"><a href="https://santriweb.com.br/carrinho">
        <button class="buy-button">Comprar</button></a>
        <button class="info-button" @click="toggleDescription">Saiba Mais</button>
      </div>
      <div v-if="showDescription" class="description">
        <div class="caracteristicas-tecnicas">
          <h2>Características Técnicas:</h2>
          <br />
          <ul>
    <li><strong>Cor:</strong> Branco</li>
    <li><strong>Marca:</strong> Soprano</li>
    <li><strong>Tipos de Pólos:</strong> 3P</li>
    <li><strong>Quantidade de Pólos:</strong> 3</li>
    <li><strong>Material:</strong> Termoplástico</li>
    <li><strong>Tipo de Disjuntor:</strong> DIN</li>
    <li><strong>Corrente elétrica (A):</strong> 1600A</li>
    <li><strong>Código do fornecedor:</strong> 05108.1160.39</li>
    <li><strong>Código de barras:</strong> 7892327535340</li>
    <li><strong>Tensão de isolamento Ui:</strong> 800(Vca)</li>
    <li><strong>Disparador de sobrecorrente:</strong> termomagnético fixo</li>
    <li><strong>Capacidade de interrupção em serviço - Ics:</strong> 50% Icu</li>
    <li><strong>Uso Indicado:</strong> Rede Elétrica</li>
   </ul>
          <br /><br />
          <h2>Dimensões:</h2>
          <br />
          <ul>
    <li><strong>Altura:</strong> 37cm</li>
    <li><strong>Largura:</strong> 21cm</li>
    <li><strong>Comprimento:</strong> 25cm</li>
    <li><strong>Peso:</strong> 23,75g</li>
  </ul>
        </div>
      </div>
    </div>
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
