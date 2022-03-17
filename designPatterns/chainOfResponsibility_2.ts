interface ScoreInterface {
	organiser: string;
	participant: string;
	score: number;
}

/**
 * Which we can use to ensure we have the
 * correct properties for our Score class
 */
class Score implements ScoreInterface {
	organiser: string;
	participant: string;
	score: number;
	
	constructor(organiser: string, participant: string, score: number) {
		this.organiser = organiser;
		this.participant = participant;
		this.score = score;
	}
}

/**
 * The handler interface requires 3 things
 * 1. a handle method. You can pass it anything you want - but
 * whatever you pass it has to go through every other handler.
 * In this example, I'm using scores.
 * 
 * 2. a handler property. This references the next handler class
 * in the chain of handlers.
 * 
 * 3. a addHandler method. This allows you to add handlers separate from
 * class instantiation.
 */
interface HandlerInterface {
	handler: HandlerInterface;
	handle(scores: ScoreInterface[]);
	addHandler(handler: HandlerInterface);
}

class AboveScoreHandler implements HandlerInterface {
	minimumscore: number;
	handler: HandlerInterface;
	
	constructor(minimumscore?: number) {
		this.minimumscore = (typeof minimumscore === 'undefined') ? 0 : minimumscore;
	}
	
	handle(scores: ScoreInterface[]) {
		if (scores[0].score < this.minimumscore) {
			return false;
		} else {
			if (typeof this.handler !== 'undefined') {
				return this.handler.handle(scores);
			} else {
				return true;
			}
		}
		
	}
	
	addHandler(handler: HandlerInterface) {
		this.handler = handler;
	}
}

var scores = [
	new Score('s1', 'p1', 3),
	new Score('s1', 'p2', 6),
	new Score('s1', 'p3', 4),
	new Score('s2', 'p1', 4),
	new Score('s2', 'p2', 0),
	new Score('s2', 'p3', 1)
]

var acceptedScores: ScoreInterface[] = [];

while (scores.length > 0) {
	var handler = new AboveScoreHandler(4);
	if (handler.handle(scores)) {
		acceptedScores.push(scores[0]);
	}
	scores.splice(0, 1);
}

for (var i in acceptedScores) {
	document.write(acceptedScores[i].organiser + ' - ' + 
		acceptedScores[i].participant + ' - ' + 
		acceptedScores[i].score + '<br>');
}