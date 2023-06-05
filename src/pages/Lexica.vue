<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { RouterLink } from 'vue-router'

</script>


<template> 
<div class="m-[60px]" >
    <h1 class="text-3xl mb-4 font-bold text-white"> Lexica</h1>
    <div class="flex justify-start">
    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-10 rounded inline-flex items-center lg:flex-row">
      <svg class="w-4 h-4 mr-2" width="31" height="23" viewBox="0 0 31 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_27_220)">
<path d="M10.5832 6.95447H5.99984C5.51361 6.95447 5.04729 7.14762 4.70347 7.49144C4.35966 7.83526 4.1665 8.30157 4.1665 8.7878V17.0378C4.1665 17.524 4.35966 17.9903 4.70347 18.3342C5.04729 18.678 5.51361 18.8711 5.99984 18.8711H14.2498C14.7361 18.8711 15.2024 18.678 15.5462 18.3342C15.89 17.9903 16.0832 17.524 16.0832 17.0378V12.4545" stroke="#FBFBFB" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.6665 13.3711L18.8332 4.20447" stroke="#FBFBFB" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.25 4.20447H18.8333V8.7878" stroke="#FBFBFB" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_27_220">
<rect width="30" height="22" fill="white" transform="translate(0.5 0.537842)"/>
</clipPath>
</defs>
</svg>

      
      <span>S'inscrire</span>
    </button>

    <div class="w-7"></div>
    

    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-10 rounded inline-flex items-center lg:flex-row">
      <svg class="w-4 h-4 mr-2" width="29" height="35" viewBox="0 0 29 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1_958)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.231 7.50547C16.88 5.11238 23.5017 9.30239 14.231 14.6881C4.96022 9.30239 11.5819 5.11406 14.231 7.50883V7.50547Z" fill="#E6E6E6"/>
<path d="M4 3.53713C4 2.66724 4.3593 1.83298 4.99885 1.21787C5.63841 0.602765 6.50583 0.257202 7.4103 0.257202L21.0515 0.257202C21.956 0.257202 22.8234 0.602765 23.4629 1.21787C24.1025 1.83298 24.4618 2.66724 24.4618 3.53713V25.6767C24.4617 25.825 24.4198 25.9705 24.3405 26.0977C24.2613 26.225 24.1476 26.3291 24.0116 26.3991C23.8757 26.4691 23.7225 26.5024 23.5685 26.4953C23.4144 26.4882 23.2653 26.4411 23.1369 26.3589L14.2309 21.7424L5.3249 26.3589C5.19651 26.4411 5.04735 26.4882 4.89331 26.4953C4.73927 26.5024 4.58612 26.4691 4.45016 26.3991C4.3142 26.3291 4.20053 26.225 4.12126 26.0977C4.04199 25.9705 4.00008 25.825 4 25.6767V3.53713ZM7.4103 1.89717C6.95807 1.89717 6.52435 2.06995 6.20458 2.3775C5.8848 2.68506 5.70515 3.10219 5.70515 3.53713V24.1449L13.7586 20.0745C13.8985 19.985 14.0628 19.9372 14.2309 19.9372C14.399 19.9372 14.5633 19.985 14.7032 20.0745L22.7567 24.1449V3.53713C22.7567 3.10219 22.577 2.68506 22.2572 2.3775C21.9374 2.06995 21.5037 1.89717 21.0515 1.89717H7.4103Z" fill="#E6E6E6"/>
</g>
<defs>
<filter id="filter0_d_1_958" x="0" y="0.257202" width="28.4619" height="34.239" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_958"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_958" result="shape"/>
</filter>
</defs>
</svg>
    </button>
  </div>
</div>
<div class="flex items-center justify-center h-screen">
    <img
      src="/Projet_web/LS.png"
      class="h-auto rounded-lg lg:w-1/2"
      alt="..."
    />
  </div>

  <h1 class="text-xl font-bold mb-8 m-[60px] text-white">
    Description 
  </h1>
  <div class="text-sm text-white m-[60px]">
<div class="mb-8"><p >
  Lexica est une plateforme d'IA qui utilise des techniques d'apprentissage automatique pour créer des œuvres d'art uniques en leur genre. 
</p><p>  La plateforme utilise une combinaison de réseaux neuronaux et de modèles de langage pour analyser des milliers d'images et de textes 
</p><p> afin de générer des peintures abstraites et des poèmes originaux.
</p></div>
 <p > 
Les utilisateurs peuvent interagir avec la plateforme en soumettant des phrases ou des mots clés qui seront utilisés pour générer une œuvre d'art. 
</p><p>En outre, la plateforme permet également aux utilisateurs d'explorer les œuvres d'art générées précédemment, ainsi que de les acheter sous
</p><p>  forme de NFT (jetons non fongibles).
</p>
</div>

<h1 class="text-xl font-bold mb-8 m-[60px] text-white">
  Utile pour....
  </h1>
  <div class="text-sm text-white m-[60px]">
<p class="mb-4">Les artistes</p>
<p class="mb-4">Les illustrateurs</p>
<p>Les graphistes</p>
</div>

  <h1 class="text-xl font-bold mb-8 m-[60px] text-white">
    Caractéristiques
  </h1>

  <div class="flex items-center justify-center h-screen">
    <img
      src="/Projet_web/lexica_2.png"
      class="h-auto rounded-lg lg:w-1/2"
      alt="..."
    />
  </div>
 
  <div class="text-sm text-white m-[60px]">
    <p class="mb-4">
      - Utilise des techniques d'apprentissage automatique pour créer des œuvres d'art uniques
    </p>
    <p class="mb-4">
      Combine des réseaux neuronaux et des modèles de langage pour générer des peintures abstraites et des poèmes originaux
    </p>
    <p class="mb-4">
      - Permet aux utilisateurs d'interagir avec la plateforme en soumettant des phrases ou des mots clés
    </p>
    <p class="mb-4">
      - Les œuvres d'art générées peuvent être explorées et achetées sous forme de NFT
    </p>
    <p class="mb-4">
      - Utilise des algorithmes d'apprentissage profond pour créer des sorties uniques en fonction des données d'entrée
    </p>
    <p>
      - Crée des œuvres d'art originales qui reflètent les données d'entrée et l'esthétique de l'IA elle-même.
    </p>
  </div>
<RouterView />
  
  </template>
  