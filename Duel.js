class Duel{
    constructor(){
        this.battleSymbols = ['rock','paper','scissors'];
        this.isChecked = false;
        this.playerPick = '';
    }

    computerChoice(){
        const currentIndex = Math.floor(Math.random()*this.battleSymbols.length);
        // console.log(this.battleSymbols[currentIndex])
        return this.battleSymbols[currentIndex];
    }

    selection(gameSymbols){
        
        gameSymbols.forEach(gameSymbol => {
            gameSymbol.addEventListener('click',()=>{
                
                gameSymbols.forEach(gameIcon => {
                    gameIcon.classList.remove('active');
                })
                gameSymbol.classList.add('active');
                this.isChecked = true;
                this.playerPick = gameSymbol.id;
                // console.log(gameSymbol.id)
                // return gameSymbol.id;
            })
        })
    }

    playerChoice(){
        // console.log(this.playerPick);
        return this.playerPick;
    }

    checkCanPlay(){
        if(this.isChecked === true){
            return true;
        }else{
            return false;
        }
    }
}
// const duel = new Duel();