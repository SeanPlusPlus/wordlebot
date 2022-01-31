# Wordle Bot

A little side hack that tries to solve the daily wordle

https://wordlebot-seanplusplus.vercel.app/

https://twitter.com/WordleBot_xyz

### Run locally

To run this project locally, follow these steps.

1. Clone the project locally, change into the directory, and install the dependencies:

```sh
git clone git@github.com:SeanPlusPlus/wordlebot.git

cd wordlebot

# install 
npm install
```

2. Start the app

```sh
npm run dev
```

### How To

Here's how to play. After you've woken up, had your coffee, and solved the daily wordle here:

https://www.powerlanguage.co.uk/wordle/

... You will now know the answer to the daily wordle challenge. 

Let's assume, for the sake of this example, that the word is `TACOS`.

Okay, now let's help the 🤖 solve the wordle. And see if it does better than we did!

---

1️⃣ Go to https://wordlebot-seanplusplus.vercel.app/ and click `GENERATE THE FIRST WORD & START`

![one](https://i.imgur.com/KtZhZX3.png)

---

2️⃣ A random word will be generated, in this example it's `SAUCE`. Look at each letter that is in the generated word, and if that letter is in the right position, click that letter one time, and the square will be green. (Remember, the target word in this example is `TACOS`.) Thus, cilck the `A` once. 

Now, look for the letters that are in our target word, but in the wrong position, and click each of those squares twice. Thus, click `S` and `C` two times.

![two](https://i.imgur.com/WuZoJtu.png)

---

3️⃣ Click `GENERATE THE NEXT WORD`

![three](https://i.imgur.com/4OKVoG3.png)

---

4️⃣ WordleBot generated the correct word!!! Click each square and let it know that the bot did a good job!

![four](https://i.imgur.com/heSe2sA.png)

---

⚪️ One thing to note. WordleBot selects the first word at random; so if we refresh the page and try again, another possible output could look like this:

![another_way](https://i.imgur.com/HYUVZJP.png)
