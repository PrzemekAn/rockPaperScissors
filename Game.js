class Game{
    constructor(){
        this.duel = new Duel();
        this.result = new Result();
        this.statistics = new Statistics();
        this.gameSymbols = document.querySelectorAll('.fas')
        this.startDuelBtn = document.querySelector('.startDuel');
        this.gamesSpan = document.querySelector('.games');
        this.winsSpan = document.querySelector('.wins');
        this.lossesSpan = document.querySelector('.losses');
        this.drawsSpan = document.querySelector('.draws');
        this.computerPicks = document.querySelector('.computer');
        this.playerPicks = document.querySelector('.player');
        this.currentWinner = document.querySelector('.currentWinner');

        this.startDuelBtn.addEventListener('click', this.render.bind(this))
    }

    startGame(){
        this.duel.selection(this.gameSymbols);
    }

    render(){
        if(this.duel.checkCanPlay()){
            this.playersChoice = this.duel.playerChoice();
            this.computersChoice = this.duel.computerChoice();
        const currentResult = this.result.isWin(this.playersChoice,this.computersChoice);
        const currentStats = this.statistics.getStatistics(currentResult);
        this.result.getPicks(this.playersChoice,this.playerPicks);
        this.result.getPicks(this.computersChoice,this.computerPicks);
        this.currentWinner.textContent = this.statistics.showWinner(currentResult,this.currentWinner)

        this.gamesSpan.textContent = this.statistics.showStatistics()[0];
        this.winsSpan.textContent = this.statistics.showStatistics()[1];
        this.lossesSpan.textContent = this.statistics.showStatistics()[2];
        this.drawsSpan.textContent = this.statistics.showStatistics()[3];
        }
    }
}

const game = new Game();

game.startGame();