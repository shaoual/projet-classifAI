<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Collections, type IAResponse } from '@/pocketbase-types'

const IAListe :IAResponse[] =[ 
  {
    "Description": "Looka est une plate-forme de conception graphique alimentée par l'IA qui vous permet de concevoir une identité de marque à partir de zéro, en commençant par votre logo. Vous pouvez utiliser Looka pour concevoir, modifier, prévisualiser et enregistrer gratuitement autant de logos que vous le souhaitez. Cependant, si vous souhaitez télécharger et utiliser un logo, ou absorber les droits d'auteur, vous devrez acheter les actifs.",    
    "Image": "looka_design4953_FEIr42rOQs.jpg",
    "URL": "https://looka.com/?gclid=Cj0KCQjwj_ajBhCqARIsAA37s0z-1lZwExCRR1Qweo3ksaApT5JsXec0Pi2wl2RCh0Y8G5Wa87Np-50aAlrgEALw_wcB",
    "collectionId": "hvdg7lutu9xf879",
    collectionName: Collections.IA,
    "created": "2023-06-05 11:55:45.606Z",
    "date": "2023-06-05 00:00:00.000Z",
    "id": "0bnn29co1avbga6",
    "titre": "Looka",
    "updated": "2023-06-05 13:17:23.752Z",
    
  },
  {
    "Description": "Lexica est une plateforme d'IA qui utilise des techniques d'apprentissage automatique pour créer des œuvres d'art uniques. La plate-forme utilise une combinaison de réseaux de neurones et de modèles de langage pour analyser des milliers d'images et de textes afin de générer des peintures et des poèmes abstraits originaux.\r\n\r\nLes utilisateurs peuvent interagir avec la plateforme en soumettant des phrases ou des mots-clés qui seront utilisés pour générer une œuvre d'art. En outre, la plate-forme permet également aux utilisateurs d'explorer des œuvres d'art précédemment générées, ainsi que de les acheter sous forme de NFT (jetons non fongibles).",
    "Image": "lexica_jHpAmqtI73.jpg",
    "URL": "https://lexica.art/",
    "collectionId": "hvdg7lutu9xf879",
    collectionName: Collections.IA,
    "created": "2023-06-05 11:57:34.163Z",
    "date": "2023-06-05 00:00:00.000Z",
    "id": "mon3lyhszitnlyl",
    "titre": "Lexica",
    "updated": "2023-06-05 13:17:40.627Z",
   
  },
  {
    "Description": "Craiyon est une version alternative de DALL·E mini, par les mêmes développeurs. Il s'agit d'un modèle d'IA qui peut dessiner des images à partir de n'importe quelle invite de texte que vous entrez.",
    "Image": "craiyon_logo_4_f84_faf46_d_seeklogo_com_cENvNZm8ud.png",
    "URL": "https://www.craiyon.com/",
    "collectionId": "hvdg7lutu9xf879",
    collectionName: Collections.IA,
    "created": "2023-06-05 12:01:12.806Z",
    "date": "2023-06-05 00:00:00.000Z",
    "id": "z32pm3gbmww292c",
    "titre": "Craiyon",
    "updated": "2023-06-05 13:18:01.333Z",
    
  },
  {
    "Description": "Midjourney est un laboratoire de recherche indépendant explorant de nouveaux médiums de pensée et développant les pouvoirs imaginatifs de l'espèce humaine",      
    "Image": "midjourney_emblem_TRFIlVPD2B.png",
    "URL": "https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F",
    "collectionId": "hvdg7lutu9xf879",
    collectionName: Collections.IA,
    "created": "2023-06-05 12:03:56.358Z",
    "date": "2023-06-05 00:00:00.000Z",
    "id": "23mp521n5554aih",
    "titre": "Midjourney",
    "updated": "2023-06-05 13:17:00.588Z",
   
  },
  {
    "Description": "Pixray est un système de génération d'images. Il combine des idées précédentes, notamment Perception Engines, qui utilise l'augmentation d'image et optimise de manière itérative les images par rapport à un ensemble de classificateurs.",
    "Image": "sans_titre_BImOPBG3uX.png",
    "URL": "https://replicate.com/pixray/text2image",
    "collectionId": "hvdg7lutu9xf879",
    collectionName: Collections.IA,
    "created": "2023-06-05 12:05:10.288Z",
    "date": "2023-06-05 00:00:00.000Z",
    "id": "z2g16nzd3evgata",
    "titre": "Pixray",
    "updated": "2023-06-05 13:16:43.354Z",
   
  },
  
  {
    Description: "Jasper AI est un assistant alimenté par l'IA qui aide les utilisateurs à créer de nouveaux contenus à partir de zéro et à améliorer leur écriture.\r\n",
    "Image":"0x0_GQ1qafDlZc.png",
    "URL": "https://www.jasper.ai/free-trial?_from=ads&fp_sid=1-g-Cj0KCQjwj_ajBhCqARIsAA37s0x5_h59q_zkXLyUeJvtxVnRpdssuRrw6lyfAv3n4NU3cw4AMjKCc64aAqN8EALw_wcB",
    "collectionId": "hvdg7lutu9xf879",
    collectionName: Collections.IA,
    "created": "2023-06-05 12:06:20.423Z",
    "date": "2023-06-05 00:00:00.000Z",
    "id": "jg0hgprjpo20sjr",
    "titre": "Jasper",
    "updated": "2023-06-05 13:18:14.952Z",
   
  }
]