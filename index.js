#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
	title: pkgJSON.name,
	tagLine: `Howdy, nice to meet ya!`,
	description: pkgJSON.description,
	version: pkgJSON.version,
	bgColor: `#FADC00`,
	color: `#000000`,
	bold: true,
	clear: true,
});

console.log( `
Varun Sridharan

A self-taught person than a main stream academic, I started development with core PHP for development of websites and applications very early in life. 
I was introduced to WordPress for the first time in 2004.

I have been a hardcore open-source developer building plugins for WordPress and WooCommerce since 2007. 
It has been an amazing 13-year journey with WordPress, and I look forward to more!

> I ❤️ Open Source!

🐦 Twitter: https://twitter.com/varunsridharan2
📠 Telegram: https://go.svarun.dev/telegram/
📖 GitHub:  https://github.com/varunsridharan
😎 Website: https://varunsridharan.in
` );
