const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');

describe('#breedDetails', () => {
  it('returns breed details for the Bombay breed', () => {
    // We expect it to be a function, but will it be?

    const expectedDesc = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
    const expectedDesc2 = "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner."
    const bombay = breedDetails('Bombay');
    const balinese = breedDetails("Balinese")
    assert.equal(expectedDesc, bombay);
    assert.equal(expectedDesc2, balinese);
  });
  it('returns breed details for the Balinese breed', () => {
    // We expect it to be a function, but will it be?

    const expectedDesc = "Balinese are curious, outgoing, intelligent cats with excellent communication skills. They are known for their chatty personalities and are always eager to tell you their views on life, love, and what you’ve served them for dinner."
    const balinese = breedDetails("Balinese")
    assert.equal(expectedDesc, balinese);
  });
  
});