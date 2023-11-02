> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je, zoals altijd, in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# b-RAIN website
Wij hebben de taak gekregen om een landingspagina te maken voor b-RAIN
waar alles wordt verteld over hoe b-RAIN in zijn werking gaat en over de app.

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
Voor deze opdracht had ik de volgende User Story gekregen:
"Create landing page where potential clients see the advantages of using b-RAIN"

Ik heb een landingspagina gemaakt waarop je alle informatie kan lezen en zien over b-RAIN.
Het bevat ook een slider die het process laat zien van hoe b-RAIN precies werkt en een 
contact formulier om een mail te sturen naar b-RAIN.
Als extra heb ik een lijst van foto's en een ervaringen section gemaakt om de website wat aan te vullen.

<!-- Voeg een mooie poster visual toe 📸 -->
![b-RAIN ontwerp](https://github.com/Mossati/the-client-website/assets/47789542/70c39395-85a3-40b1-84d6-9fc0fc4a2f0b)
<!-- Voeg een link toe naar Github Pages 🌐-->
Je kan de website [hier](mossati.github.io/the-client-website/) bekijken.

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->
Deze website is gemaakt met HTML, CSS en Javascript.
De structuur van het HTML bestand bestaat uit HEADER, MAIN, ARTICLE en SECTION.
Voor CSS heb ik een aantal kleuren gedefinieerd in de root zodat ik de variabelen meerdere keren kan gebruiken en ze ook allemaal makkelijk
kan veranderen.
```CSS
:root {
    --darkblue: #384b61;
    --blue: #7faec5;
    --green: #4ecd5d;
    --darkgreen: #287530;
    --yellow: #e1bf24;
    --red: #b33838;
    --white: #ffffff;
    --cloud: #ffffff;
    --grey: #919ea1;
    --black: #1a1a1a;
    --normalfont: 'Open Sans', sans-serif;
    --titlefont: 'Raleway', sans-serif;
  }
```

De website bevat ook een aangepaste scrollbar die met behulp van webkits is gemaakt.
Ook heb ik Font Awesome gebruikt voor speciale icoontjes.

Voor Javascript heb ik meerdere functies gebouwd zoals:

### Tekst
Met deze functie kan ik kleine stukjes tekst laten zien en wanneer je op een button klikt komt de hele tekst tevoorschijn.

### Navbar toggle
Met deze functie verander ik de 3 bar toggle button naar een X als je erop klikt.

### Scroll To Top
Met deze functie kan je naar de top van de pagina scrollen als je op de button rechts onderin klikt.

## Bronnen
[Font Awesome](https://fontawesome.com/)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
