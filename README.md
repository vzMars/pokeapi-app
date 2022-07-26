# PokeAPI App

This app uses the PokeAPI to display the first 151 Pokemon.

**Link to project:** https://vzmars.github.io/pokeapi-app/

![alt text](https://i.imgur.com/ay3jlMc.png)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

This app at first fetches an array of results that contains the first 151 Pokemon’s names and URLs. Then we map through the array and fetch all the details of each Pokemon and return an array of promises. Finally, we use Promise.all() that resolves all the Pokemon details and renders each of them on the page.

## Optimizations:

I would like to go back and make this app more interactive and add the ability to allow the user to click on a Pokemon and see more details related to that Pokemon. I would also like to change the overall design of this app to resemble an actual PokeDex.

## Lessons Learned:

This was another great opportunity to experiment more with APIs. I learned how useful Promise.all() is and how it can take in an array of promises and resolve it only if all the promises in the array themselves get resolved.

## More Projects:

Take a look at these other projects that I have in my portfolio:

**Jikan App:** https://github.com/vzMars/jikan-app

**Weather App:** https://github.com/vzMars/weather-app

**Breaking Bad API App:** https://github.com/vzMars/breaking-bad-app
