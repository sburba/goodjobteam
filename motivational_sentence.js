document.addEventListener('DOMContentLoaded', () => {
	const goodSynonyms = [
		'Good',
		'Excellent',
		'Exceptional',
		'Favorable',
		'Extraordinary',
		'Great',
		'Marvelous',
		'Satisfying',
		'Superb',
		'Mind-blowing',
		'Wonderous',
		'Stupendous',
	];
	const workSynonyms = [
		'job',
		'work',
		'operation',
		'effort',
		'endeavor',
		'performance',
		'task',
		'undertaking',
		'enterprise',
		'venture',
	];
	const teamSynonyms = [
		'team',
		'comrades',
		'squad',
		'crew',
		'gang',
		'clan',
		'assemblage',
		'posse',
		'troupe',
		'amigos',
	];

	function choose(wordList) {
		return wordList[Math.floor(Math.random() * wordList.length)]
	}

	let motivationalSentence = `${choose(goodSynonyms)} ${choose(workSynonyms)}, ${choose(teamSynonyms)}!`;
	document.getElementById('motivational-sentence').textContent = motivationalSentence;
	document.title = motivationalSentence;
});
