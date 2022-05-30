// // helper function to convert weights to probabilies
// function weightsToProbabilities(__weights) {
//   // [10,20,30,40] -> [0.1,0.2,0.3,0.4]
//   const total = __weights.reduce((a, b) => Number(a) + Number(b)); // find total of all weights
//   return __weights.map((x) => Number(x / total)); // return mapped probabilities
// } // ([10,20,30,40])

// function weightedRandomChoice(_options, _weights) {
//   let probs = weightsToProbabilities(_weights); // convert weights to probabilies
//   let sum = 0;
//   const  r = Math.random(); // initalize var and pick a random number 0-1
//   for (let i in _options) {
//     // for every option
//     sum += probs[i]; // sum the probability
//     if (r <= sum) {
//       // if chosen value is less than total probability
//       return _options[i];
//     }
//   }
// }

// export const combinatorialCreature = (
//   _parts,
//   _genes,
//   _weights,
//   _combinatorialWeights
// ) => {

//   // choose shortest from parts or genes
//   let len = _genes.length < _parts.length ? _genes.length : _parts.length;
//   // use only the weights that are attainable
//   let combinatorialWeights = _combinatorialWeights.slice(0, len);
//   // create array of choices indexed from 1
//   let a = Array(combinatorialWeights.length)
//     .fill()
//     .map((x, i) => i + 1);
//   // randomly pick number of genes creature should have according to combinatorial weights provided
//   const numberGenesToChoose = Number(
//     weightedRandomChoice(a, _combinatorialWeights)
//   );

//   const creature, uniqueGenes;
//   while (true) {
//     creature = simpleCreature(_parts, _genes, _weights).creature; // create creature
//     uniqueGenes = Object.values(creature).filter(onlyUnique); // count unique genes

//     // allow any but pure
//     // if( uniqueGenes.length !== 1) { break; } // Add pure guys later :)

//     // if the creature has desired number of genes complete loop
//     if (uniqueGenes.length === numberGenesToChoose) {
//       break;
//     }
//   }
//   return { genomeCount: uniqueGenes.length, creature: creature };
// };
export const toto = "";
