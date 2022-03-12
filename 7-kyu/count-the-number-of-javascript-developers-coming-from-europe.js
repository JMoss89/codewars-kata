/*
    You will be given an array of objects (hashes in ruby) representing data about 
    developers who have signed up to attend the coding meetup that you are 
    organising for the first time.

    Your task is to return the number of JavaScript developers coming from Europe. 
*/

const countDevelopers = list => {
    const wantedDev = list.filter(dev => dev.continent === 'Europe' && dev.language === 'JavaScript');
    return wantedDev.length;
  };