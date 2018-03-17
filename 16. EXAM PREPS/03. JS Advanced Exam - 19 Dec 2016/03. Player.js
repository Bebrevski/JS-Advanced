class Player {
    constructor(nickName) {
        this.nickName = nickName;

        this.scoreList = [];
    }

    addScore(score) {
        if (!isNaN(score) && score !== null) {
            this.scoreList.push(Number(score));
            this.scoreList.sort((a, b) => b - a);
        }

        return this;
    }

    get scoreCount() {
        return this.scoreList.length;
    }

    get highestScore() {

        return this.scoreList[0];
    }

    get topFiveScore() {
        return this.scoreList.slice(0, 5);
    }

    toString() {
        if (this.scoreList.length === 0){
          return `${this.nickName}: []`;
        } else {
          return `${this.nickName}: [${this.scoreList}]`
        }
    }
}

let player = new Player('Misho');

player.addScore(130);
player.addScore(240);
player.addScore(0);
player.addScore('Pesho');
console.log(player.toString());