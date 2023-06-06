<template>
    <main class="main-content h-screen">

        <p class="mt-40 mb-5 w-2/4">Veuillez saisir l'adresse e-mail associée à votre compte d'utilisateur. 
            Un mail de vérification vous sera adressé. Lorsque vous le recevrez, vous pourrez choisir un nouveau mot de passe</p>

        <form class="flex flex-col md:flex-row mb-4 items-end gap-4">
            <div>
                <label class="block tracking-wide mb-2" for="grid-email">E-mail</label>
                <input class="block text-black border rounded py-3 px-4 h-10" id="login" type="email">
            </div>
            <div>
                <button type="submit" class="px-4 py-2 bg-violet-900 text-white font-bold rounded focus:outline-none">Envoyer</button>
            </div>
        </form>
    </main>
</template>
