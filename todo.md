# Coffee Shop RL

We start by breaking this into different segments. Tutorial -> prep -> day -> results -> back to prep. We will build a state machine to manage this. The buttons to get past the tutorial will be manual. The RL model will get kicked off once we are past the tutorial

We will use Playwright. BeautifulSoup wont work as we need to interact with the game and not do web scaping

These are the required steps:

 - Handle Consent( Important )
 - Start playing the game
 - Get rid of the tutorial
 - Get all the info we need
 - Be able to track all the info we need
 - Be able to do a loop of the game while knowing all we need

# Architecture

In RL the main characteristics are: The Agent, Actions, The Enviornment, the state and a reward

This is how we should design this system

- Each clickable button is a potential Action. We can create a system where we define each action the agent can take by making an enum of all selectors for the game

- The enviornment is the world around the agent (the coffee shop). The ingredients in the coffee shop, the weather, the time, the people, the profit

- The reward is the profit and the points that we are trying to optimise for


# Issues I've encountered for to write the video on

- Handling consent and play buttons / Getting to gameplay. AI shouldn't have to learn how to press play buttons
- How the hell do you handle sliders (reverse engineering the game to see how the slider works) game.js
- Playwright over BeautifulSoup

# How sliders work

I think that the slider is just css and the javascript changes the value of the product based on the slider position once its been moved