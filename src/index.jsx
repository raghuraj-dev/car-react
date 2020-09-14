import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
// import {Router, Route} from 'react-router';
import {IndexRoute, browserHistory, BrowserRouter, Router, Route} from 'react-router';
// import {BrowserRouter as Router, Match, Route} from 'react-router-dom'
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Car from './car/car.component.jsx'
import Main from './common/main.component.jsx'
import CarDetail from './car/car-detail.component.jsx'

const data = [
    {
        id: 1,
        name: 'African lion',
        model: 'Wild animal',
        media: 'https://listaka.com/wp-content/uploads/2015/08/African_lion.jpg',
        desc: 'Lions are considered the kings of the jungle, and very rightly so. The African lion has incredible speed, razor sharp claws and teeth to attack a possible prey. They are the biggest of the African carnivores. The females usually do the hunting, and the males are lazy, busy protecting the pride. Their hunting technique includes splitting into groups, where one group chases the animal to a particular area while another group waits to ambush the victims. This technique is highly complex and precise.  Their diet includes large elephants, hyenas, rhinos and even mice. This dangerous animal has attacked people on farms, circuses, zookeepers, etc., causing hundreds of fatalities every year. The world is a mystery and filled with fascinating creatures. But do keep your distance from some, like the ones listed above, when you go on a wildlife trip!'

    },
    {
        id: 2,
        name: 'Cape Buffalo',
        model: 'Wild animal',
        media: 'https://listaka.com/wp-content/uploads/2015/08/Cape-Buffalo.jpg',
        desc: 'Also known as the African buffalo, this is a particularly aggressive inhabitant of the African grasslands. The Cape Buffalo is the only member of the buffalo and cattle tribe that occurs naturally in Africa. Cape buffalo have been known to charge victims without provocation. With over 2,000 pounds of weight and the ability to charge at 40 miles an hour, they are one of the most dangerous wild animals to encounter. These creatures will continue charging even if they are shot in the heart, and have no reservations about charging vehicles. They’ve also been known to attack predators like lions. Having never been successfully domesticated, throughout Africa it is known as the “widowmaker” or “black death” and is responsible for more fatalities every year than any other large animal on the continent.'

    },
    {
        id: 3,
        name: 'Hyenas',
        model: 'Wild animal',
        media: 'https://listaka.com/wp-content/uploads/2015/08/Hyenas.jpg',
        desc: 'The hyena is Africa’s most common large carnivore. Weighing from 90 to 190 pounds, they are reputed to be cowardly and timid but can be bold and dangerous, attacking animals and humans. Different from most other animals, female spotted hyenas are dominant over the males and outweigh them by about 3 pounds. The spotted hyena is a skillful hunter but also a scavenger. Hyenas are pack animals that cause a number of human fatalities every year. They’re physically large and aggressive and have a bite that’s evolved for scavenging, so can easily crush bone and tear flesh.'
    },
    {
        id: 4,
        name: 'Crocodile',
        model: 'Wild animal',
        media: 'https://listaka.com/wp-content/uploads/2015/08/Crocodile.jpg',
        desc: 'Among the 23 recognized species of crocodilians, the saltwater and Nile crocodiles are the most deadly creatures. Being the largest reptile in the world, these kill hundreds of people a year. The crocodile lives throughout the tropics of Africa, Asia and Australia in slow-moving rivers and lakes. Its eyes, ears, and nostrils are located high on the head, which allows a crocodile to see and hear its prey. Ranging from 5 to 20 feet long, they kill up to 800 people annually. And the non-fatal attacks may also be debilitating. The saltwater crocodile is fast and sturdy, whose jaws can apply 3,000 pounds of pressure per square inch! ‘Salties’, as they are known, will pull their victims to the bottom of a river and roll them around until they drown before eating part of them.'
    },
    {
        id: 5,
        name: 'Hyenas',
        model: 'Wild animal',
        media: 'https://listaka.com/wp-content/uploads/2015/08/Rhinoceros.jpg',
        desc: 'The humongous scary looking horn speaks for itself. Rhinoceroses are universally recognized by their massive bodies, stumpy legs, and either one or two dermal horns. Rhino related deaths are not an uncommon occurrence in many parts of the world. Having terrible eyesight, they are easy to startle, and once they have you within their sight, it can be hard to make an escape (unless you can run faster than 40 mph). Rhinoceros are big, fast and formidable fighters—when they want to be. When they feel threatened, they’ll steer their large, dangerous bodies directly toward a fight. You might expect them to use their horns as weapons, but they use their lower incisors, as well as their formidable size and speed: an incensed rhino can knock over a vehicle with people inside.'
    }
];


render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
            <Route path="/cars" component={Car} data={data}/>
            <Route path="/cars/:id" component={CarDetail} data={data}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    document.getElementById('container')
);
