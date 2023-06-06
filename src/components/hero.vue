<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>

    <section>
      
    <div class="flex items-center justify-center mt-20 md:grid md:grid-cols-2 md:mt-32 lg:mt-62">

 <div class="hidden md:block order-1 md:order-2 mx-auto">
                
                <div class="flex justify-center">
                  <img src="/Projet_web/ia_illustration_1.png"
                    class="w-2/3 md:full lg:1/3" alt="illustration" />
                </div>

                </div>





  <div class="order-2 md:order-1 mx-12 md:mx-22 lg:mx-40">              
  <div class="lg:flex">
    <h1 class="text-4xl text-center md:text-justify font-Helvetica font-bold mt-3 text-white">ClassifAI</h1>
  </div>

  <div class="lg:flex text-center md:text-justify mt-5 font-bold text-white  ">
    <p >Open your AI’s</p>
  </div>

      <div class="order-3 md:hidden mt-20 mx-auto">
        <div class="flex justify-center">
          <img src="/Projet_web/ia_illustration_1.png" class="w-2/3 md:w-full" alt="illustration" />
        </div>
        </div>

  <div class="lg:flex mt-6 text-white text-center md:text-left mx-4 md:mx-0">
    <p>ClassifAI est un site web conçu pour aider les personnes intéressées par l'intelligence artificielle, à mieux comprendre et naviguer dans le domaine de l'IA.</p>
  </div>

<div class="flex justify-center md:float-left">
      <button class="bg-purple-900 hover:bg-gray-400 text-white mt-10 py-4 px-14 rounded inline-flex items-center border-2 border-whiter lg:flex-row">
        <RouterLink to="/DecouvrirlesIA">Découvrir les IA</RouterLink>
      </button>
    </div>

  </div>

    </div>  
 

      
      <!-- Jumbotron -->
    </section>
    <!-- Section: Design Block -->

    </template>