<template>
<main class="main-content">

<div class="mt-10 mb-44">
<img src="public/Projet_web/pp-profil.png" alt="photo de profil" class="mx-auto w-44 mb-4">
<p class="text-center">Élia</p>
<p class="text-center">elia13@gmail.com</p>

<div class="flex justify-center space-x-4 mt-5">
<RouterLink to="">
<button class="bg-white text-black py-2 px-5 rounded inline-flex items-center lg:flex-row">Partager</button>
</RouterLink>
<RouterLink to="/editprofil">
<button class="bg-violet-500 text-white py-2 px-5 rounded inline-flex items-center lg:flex-row">Modifier mon profil</button>
</RouterLink>
</div>

<div class="flex justify-center mt-10">
<div class="flex items-center space-x-4">
<button id="mes-propositions" class="text-lg text-white focus:outline-none">Mes propositions</button>
<button id="enregistres" class="text-lg text-white focus:outline-none">Enregistrés</button>
</div>
</div>

<div class="flex justify-center mt-4">
<div id="barre" class="w-24 h-1 rounded-lg bg-white transition-transform"></div>
</div>

<div class="flex justify-center mt-4">
<div id="contenu-mes-propositions" class="hidden">
<div class="grid md:grid-cols-2 gap-5">
<img src="public/Projet_web/profil-1.png" alt="image ia" class="w-44">
<img src="public/Projet_web/profil-2.png" alt="image ia" class="w-44">
<img src="public/Projet_web/profil-3.png" alt="image ia" class="w-44">
<img src="public/Projet_web/profil-4.png" alt="image ia" class="w-44">
</div>
</div>
<div id="contenu-enregistres" class="hidden">
<img src="public/Projet_web/looka.webp" alt="image ia" class="w-44">
</div>
</div>
</div>

</main>
</template>

<script>

    $(document).ready(function() {
var containerOffset = $('.flex.items-center.space-x-4').offset().left;
var barreWidth = $('#barre').width();
    
$('#mes-propositions').click(function() {
$('#contenu-mes-propositions').show();
$('#contenu-enregistres').hide();
var textWidth = $(this).outerWidth();
var newBarreOffset = $(this).offset().left - containerOffset + (textWidth - barreWidth) / 2;
$('#barre').css('transform', 'translateX(' + newBarreOffset + 'px)');
});
    
$('#enregistres').click(function() {
$('#contenu-enregistres').show();
$('#contenu-mes-propositions').hide();
var textWidth = $(this).outerWidth();
var newBarreOffset = $(this).offset().left - containerOffset + (textWidth - barreWidth) / 2;
$('#barre').css('transform', 'translateX(' + newBarreOffset + 'px)');
});
    });
    
</script>