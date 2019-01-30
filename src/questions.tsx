/**
 * Filter ideas
 *  - subjective (who has the best car)
 *
 */

export const questions = [
  {
  text: 'The player who has the nearest birthday'
  },
  {
    text: 'The player to first sing a song lyric'
  },
  {
    text: 'The player that last won a board game'
  },
  {
    text: 'The player that last won this board game'
  },
  {
    text: 'The player who most recently slept in a tent'
  },
  {
    text: 'The player whose first name would be first in alphabetical order'
  },
  {
    text: 'The player who most recently went to a music concert'
  },
  {
    text: 'The player who most recently went to a convention'
  },
  {
    text: 'The player who most recently was in a different city'
  },
  {
    text: 'The player who has the nearest birthday'
  },
  {
    text: 'The player currently reading this'
  },
  {
    text: 'The player with the longest hair'
  },
  {
    text: 'The player with the shortest hair'
  },
  {
    text: 'The player closest to the rule book'
  },
  {
    text: 'The player to the left of the player reading this'
  },
  {
    text: 'The player to the right of the player reading this'
  },
  {
    text: 'The player who hasn\'t played board games the longest'
  },
  {
    text: 'The player who last played pinball'
  },
  {
    text: 'The player who last walked a dog'
  },
  {
    text: 'The player who most recently ate eggs'
  },
  {
    text: 'The player who was last in a foreign country'
  },
  {
    text: 'The player who last listened to a podcast'
  },
  {
    text: 'The player with the largest phone'
  },
  {
    text: 'The player with the smallest phone'
  },
  {
    text: 'The most colorfully dressed player'
  },
  {
    text: 'The player who last built a campfire'
  },
  {
    text: 'The player who most recently watched a movie'
  },
  {
    text: 'The player most recently inside of a school'
  },
  {
    text: 'The player who last changed a diaper'
  },
  {
    text: 'The first player to give a huge smile'
  },
  {
    text: 'The player who was last on a farm'
  },
  {
    text: 'The player who last drank coffee'
  },
  {
    text: 'The player who last drank tea'
  },
  {
    text: 'The player who has gone the longest without coffee'
  },
  {
    text: 'The player who has gone the longest without tea'
  },
  {
    text: 'The player who was born the farthest away'
  },
  {
    text: 'The player who was born the closest to the host\'s house'
  },
  {
    text: 'The player who last watched a movie in a theatre'
  },
  {
    text: 'The player who last talked on the phone'
  },
  {
    text: 'The player who lives farthest from the host\'s house'
  },
  {
    text: 'The player who lives closest to the host\'s house, other than the host'
  },
  {
    text: 'The player with the longest beard'
  },
];

export function getRandomQuestion(previousQuestions?: string[]): string {
  let question: string;
  do {
    question = questions[getRandomNumber(0, questions.length - 1)].text
  } while((previousQuestions || []).includes(question));
  return question;
}

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
