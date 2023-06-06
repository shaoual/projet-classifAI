<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { RouterLink } from 'vue-router'

</script>


<template> 
    <main class="main-content">

<h2>À PROPOS</h2>

<div class="lg:w-1/2 mb-20">
<p>Bienvenue sur ClassifAI, l'outil en ligne qui vous permet de découvrir et d'apprendre les différentes applications de l'intelligence artificielle.</p>

<p class="mt-10">L'IA est en constante évolution et elle est aujourd'hui présente dans de nombreuses industries et domaines, tels que la santé, la finance, le transport, la sécurité, l'éducation, etc. Cependant, il peut être difficile de naviguer dans cette jungle de termes techniques et de comprendre comment utiliser au mieux cette technologie.</p>

<p class="mt-10">C'est pourquoi nous avons créé ClassifIA, un outil en ligne qui vous permet de répertorier les différentes applications de l'IA et de les classer en catégories pour vous aider à mieux comprendre leur utilisation et leur fonctionnement.
Vous trouverez sur notre plateforme une liste complète de toutes les applications d'IA disponibles, classées par secteur d'activité. Chaque application est accompagnée d'une description claire et détaillée, ainsi que d'exemples concrets d'utilisation.
</p>

<p class="mt-10">Que vous soyez novice en IA ou que vous ayez déjà une expérience dans ce domaine, ClassifIA est l'outil idéal pour vous aider à découvrir et à apprendre les différentes applications de l'IA. Vous pouvez également contribuer à notre base de données en soumettant de nouvelles applications que nous pourrons ajouter à notre liste.</p>
<p class="mt-10">N'hésitez pas à explorer notre site pour découvrir toutes les fonctionnalités de ClassifIA et à nous contacter si vous avez des questions ou des suggestions. Merci d'avoir choisi ClassifIA, l'outil en ligne de référence pour l'intelligence artificielle.</p>
</div>

    </main>
    <RouterView />
</template>


