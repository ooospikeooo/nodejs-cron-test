const express = require('express');
const CronJob = require('cron').CronJob;
const CronTime = require('cron').CronTime;

const app = express()

console.log('Before job instantiation');
const job = new CronJob('*/10 * * * * *', function () {
	const d = new Date();
	console.log('At Ten Minutes:', d);
});
console.log('After job instantiation');

app.get('/start', function (req, res) {
    job.start();
    res.send("cronJob started.");
})

app.get('/change', function (req, res) {
    let time='*/5 * * * * *';
    job.setTime(new CronTime(time))
    res.send("cron time change.");
})

app.listen(3000)