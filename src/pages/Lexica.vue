<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { RouterLink } from 'vue-router'

import Iconview from '@/components/icons/Iconview.vue';

</script>


<template> 
    <main class="main-content">
        <h2 class="font-bold mb-3"> Lexica</h2>
       
    <a href="https://lexica.art/">
      <button class="flex bg-violet-900 text-white rounded-lg py-2 px-5 items-center justify-center">
        <Iconview />
        Voir le site
      </button>
    </a>

      <img src="/Projet_web/LS.png" class="h-auto rounded-lg lg:w-1/2 mt-10" alt="Lexica IA" />


      <h2 class="font-bold mb-3">Description</h2>

      <div class="lg:w-1/2">
      <p> Lexica est une plateforme d'IA qui utilise des techniques d'apprentissage automatique pour créer des œuvres d'art uniques en leur genre. 
       La plateforme utilise une combinaison de réseaux neuronaux et de modèles de langage pour analyser des milliers d'images et de textes 
      afin de générer des peintures abstraites et des poèmes originaux.</p>
     <p class="mt-4">Les utilisateurs peuvent interagir avec la plateforme en soumettant des phrases ou des mots clés qui seront utilisés pour générer une œuvre d'art. 
      En outre, la plateforme permet également aux utilisateurs d'explorer les œuvres d'art générées précédemment, ainsi que de les acheter sous
     forme de NFT (jetons non fongibles).</p>
    </div>

     <h2 class="font-bold mb-3">Utile pour...</h2>
    
      <ul>
        <li>Les artistes</li>
        <li>Les illustrateurs</li>
        <li>Les graphistes</li>
      </ul>
  
      <h2 class="font-bold mb-3">Caractéristiques</h2>

      <img src="/Projet_web/lexica_2.png" class="h-auto rounded-lg lg:w-1/2" alt="caractéristiques IA"/>

      <ul class="space-y-4 mt-10 mb-44">
        <li>- Utilise des techniques d'apprentissage automatique pour créer des œuvres d'art uniques</li>
        <li>- Combine des réseaux neuronaux et des modèles de langage pour générer des peintures abstraites et des poèmes originaux</li>
        <li>- Permet aux utilisateurs d'interagir avec la plateforme en soumettant des phrases ou des mots clés</li>
        <li>- Permet aux utilisateurs d'interagir avec la plateforme en soumettant des phrases ou des mots clés</li>
        <li>- Les œuvres d'art générées peuvent être explorées et achetées sous forme de NFT</li>
        <li>- Utilise des algorithmes d'apprentissage profond pour créer des sorties uniques en fonction des données d'entrée</li>
        <li>- Crée des œuvres d'art originales qui reflètent les données d'entrée et l'esthétique de l'IA elle-même</li>
      </ul>
    

    </main>
<RouterView />
  
  </template>