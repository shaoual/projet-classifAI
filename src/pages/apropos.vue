<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { RouterLink } from 'vue-router'

</script>


<template> 

<h1 class="text-xl font-bold m-[60px] text-white">A PROPOS</h1>

<p class="text-sm  mb-[-45px] m-[60px] text-white">
Bienvenue sur ClassifAI, l'outil en ligne qui vous permet de découvrir et d'apprendre les différentes applications 
 de l'intelligence artificielle.</p>
 <p class="text-sm  mb-[-45px] m-[60px] text-white"> 
L'IA est en constante évolution et elle est aujourd'hui présente dans de nombreuses industries 
et domaines, tels que la santé, la finance, le transport, la sécurité, l'éducation, etc. Cependant, 
il peut être difficile de naviguer dans cette jungle de termes techniques et de comprendre comment utiliser 
au mieux cette technologie.</p>
<p class="text-sm  mb-[-45px] m-[60px] text-white">
C'est pourquoi nous avons créé ClassifIA, un outil en ligne qui vous permet de répertorier les différentes 
applications de l'IA et de les classer en catégories pour vous aider à mieux comprendre leur utilisation 
et leur fonctionnement.
Vous trouverez sur notre plateforme une liste complète de toutes les applications d'IA disponibles, 
classées par secteur d'activité. Chaque application est accompagnée d'une description claire et détaillée, 
ainsi que d'exemples concrets d'utilisation.</p>

<p class="text-sm  mb-[-45px] m-[60px] text-white">
Que vous soyez novice en IA ou que vous ayez déjà une expérience dans ce domaine, ClassifIA est l'outil idéal 
pour vous aider à découvrir et à apprendre les différentes applications de l'IA. Vous pouvez également contribuer 
à notre base de données en soumettant de nouvelles applications que nous pourrons ajouter à notre liste.
</p>
<p class="text-sm m-[60px] text-white">
N'hésitez pas à explorer notre site pour découvrir toutes les fonctionnalités de ClassifIA et à nous contacter 
si vous avez des questions ou des suggestions. Merci d'avoir choisi ClassifIA, l'outil en ligne de référence pour 
l'intelligence artificielle.</p>


<RouterView />

</template>