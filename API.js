import JSpell from './JSpell.js'
import GrammarBot from './GrammarBot.js'
import TextGear from './TextGear.js'
import WebSpellChecker from './WebSpellChecker.js'

export default async function (text) {

	let json = {};

	let jspell = JSON.parse( await JSpell(text) );
	//console.log(jspell)

	let grammarbot = JSON.parse( await GrammarBot(text) );
	delete grammarbot.software;
	delete grammarbot.language;
	//console.log(grammarbot)

	let textgear = JSON.parse( await TextGear(text) );
	//console.log(textgear)

	let webgrammarchecker = JSON.parse( await WebSpellChecker(text, "grammar") );
	//console.log(webgrammarchecker)

	let webspellchecker = JSON.parse( await WebSpellChecker(text, "spell") );
	//console.log(webspellchecker)


	json["Jspell"] = jspell;
	json["GrammarBot"] = grammarbot;
	json["TextGear"] = textgear;
	json["WebSpellChecker_Grammar"] = webgrammarchecker;
	json["WebSpellChecker_Spell"] = webspellchecker

	return json;
}


