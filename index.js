import { bestFruits, bestTime } from './preferences.js';
import { multiply } from './calculation.js';
import aboutMe from './bio.js';


const news = `All ${aboutMe.companyName}'s staff gave Tom ${multiply(7, 129)} ${
  bestFruits[2].toLowerCase() 
}s ${bestTime.toLowerCase()}.`;

console.log(news);
