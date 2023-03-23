const { BaseCommand } = require('kurami');
const { getFirestore, collection, addDoc } = require('firebase/firestore');
const chartData = require('./../charts.json');
const scoreData = require('../scores.cjs');
const { initializeApp } = require("firebase/app");

class pushDefaultValue extends BaseCommand {
    constructor() {
        super({
            name: 'load:default:data',
            description: 'Push some default charts and scores',
        });
    }

    async run() {
        const app = initializeApp({
            // firebase config here
        });

        console.log('Pushing default data...')
        console.log('Pushing default charts...')
        await this.pushDefaultCharts();
        console.log('Pushing default scores...')
        await this.pushDefaultScores();
        console.log('Done!')
    }

    async pushDefaultCharts() {
        // push chartData content to firestore 
        const db = getFirestore();
        const chartsRef = collection(db, 'Chart');
        for (let i = 0; i < chartData.length; i++) {
            const chart = chartData[i];
            await addDoc(chartsRef, chart).then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            }).catch((error) => {
                console.error("Error adding document: ", error);
            });
        }
    }

    async pushDefaultScores() {
        // push scoreData content to firestore 
        const db = getFirestore();
        const scoresRef = collection(db, 'Score');
        for (let i = 0; i < scoreData.length; i++) {
            const score = scoreData[i];
            await addDoc(scoresRef, score).then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            }).catch((error) => {
                console.error("Error adding document: ", error);
            });
        }
    }
}

module.exports = pushDefaultValue;