import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');

async function loadData() {
    const dogs = await getDogs();
    console.log(dogs);
    const main = document.querySelector('main');

    for (let dog of dogs) {
        const dogDiv = renderDogCard(dog);
        main.append(dogDiv);
    }
}

loadData();
// on load
// fetch all dogs
// render and append all dog cards to the container
