---
name: Proposal Submission
about: Issue to submit project proposal
title: Jesse Turek - Paul Chapman
labels: ''
assignees: ''

---

## Project Choice (Tell us which project you're doing!)
- [ ] Other

- Whack-A-Moji

## Project Description 
'Whack-A-Moji' is a version of whack-a-mole, where instead of whacking moles, the player whacks randomly selected emojis from the Open Emoji API https://emoji-api.com/

The user has 30 seconds to whack as many emojis as they can before the round ends. 

Each round ends when the ball touches the ground.

## Wire Frames

PLease find wireframes in the wireframe directory: https://github.com/turekjesse/wack-a-moji-game/tree/main/wireframes

## User Stories
> Add user stories following the _As a [type of user], I want [what the user wants], so that [what it helps accomplish]_ format.

- As a whack-a-moji player, I want the ability to click on the game board
- As a whack-a-moji player, I want the ability to see my score go up if I click on the right square in time
- As a whack-a-moji player, I want the ability to see how much time is left in the round
- As a whack-a-moji player, I want the ability to start the game whenever I want to

### MVP Goals
- 6 square divs that display in a grid
- Divs randomly change color at a set interval
- Score is added when user clicks the colored div 
- A 30-second countdown timer
- A scoreboard

### Stretch Goals
- tapping into the emoji API
- a modal that pops up displaying the users final score with the option to restart the game
- display highest score
- a function that deducts points if the user clicks on the wrong div
- start & pause buttons to pause the timer function and randomly seleced div function
- display user click average response time
- ability to chose the size of the game board