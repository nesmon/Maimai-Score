<!-- Add the image locate in src/assets/test.png -->
<img src="./src/assets/maimai.png" alt="MaiScore" width="15%">

# MaiScore - A Maimai Score viewer
Welcome to MaiScore Project!

## What is MaiScore?
MaiScore is a Maimai Score tracker. It can track your score and show you the score history.
You can look score form precise chart and precise difficulty.
All work manually, you need to post your score in the form linked to each chart. If some chart is missing, a feature to request a new chart is coming soon.

## Set up local server
1. Install Node.js
2. Clone this repository
3. Run `npm install` in the repository
4. Configure your firebase information in 'src/config.js' and in 'Command/pushDeaultValue.cjs'
5. Use Kurami for run the command to push default value in firebase using 'npm run kurami load:default:data'
6. Run `npm run dev` to start local server

## Libraries
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Kurami](https://github.com/nesmon/Kurami)
