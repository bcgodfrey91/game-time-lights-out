# Lights Out&copy;
---

Lights Out is a classic game build Tiger Electronics from 1995.  

>Lights Out was created by a group of people including Avi Olti, Gyora Benedek, Zvi Herman, Revital Bloomberg, Avi Weiner and Michael Ganor. The members of the group together and individually also invented several other games, such as Hidato, NimX, iTop and many more.

You can learn more at: https://en.wikipedia.org/wiki/Lights_Out_  

#### The Strategy of Lights Out

The game consists of a 5 by 5 grid of lights. When the game starts, a random number or a stored pattern of these lights is switched on.  
Pressing any of the lights will toggle it and the four adjacent lights.  
The goal of the puzzle is to switch all the lights off, preferably in as few button presses as possible.  
If a light is on, it must be toggled an odd number of times to be turned off.  
If a light is off, it must be toggled an even number of times (including none at all) for it to remain off.  
Several conclusion are used for the game's strategy. Firstly, the order in which the lights are pressed does not matter, as the result will be the same.  
Secondly, in a minimal solution, each light needs to be pressed no more than once, because pressing a light twice is equivalent to not pressing it at all.

#### Play Lights Out

Have fun!: https://bcgodfrey91.github.io/game-time-lights-out/

---

To install the dependencies:

```
npm install
```

To fire up a development server:

```
npm start
```

Once the server is running, you can visit:

* `http://localhost:8080/webpack-dev-server/` to run your application.
* `http://localhost:8080/webpack-dev-server/test.html` to run your test suite in the browser.

To build the static files:

```js
npm run build
```


To run tests in Node:

```js
npm test
```
