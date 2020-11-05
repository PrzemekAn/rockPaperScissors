class Statistics{
    constructor(){
        this.games = [];
        this.wins = [];
        this.losses = [];
        this.draws = []
    }

    getStatistics(result){
        this.games.push(result);
        if(result === true){;
            this.wins.push(result)
        }else if(result === false){
            this.losses.push(result);
        }else if(result === undefined){
            this.draws.push(result);
        }
    }

    showStatistics(){
        this.gamesNumber = this.games.length;
        this.winsNumber = this.wins.length;
        this.lossesNumber = this.losses.length;
        this.drawsNumber = this.draws.length;

        return [this.gamesNumber,this.winsNumber,this.lossesNumber,this.drawsNumber];
    }
}