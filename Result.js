class Result{
    constructor(){

    }
    isWin(playerCh,computerCh){
        if(playerCh === 'rock' && computerCh === 'scissors' || playerCh === 'paper' && computerCh === 'rock' || playerCh === 'scissors' && computerCh === 'paper'){
            console.log(playerCh,computerCh, "win");
            return true;
        }else if(playerCh === computerCh){
            console.log(playerCh,computerCh, "draw");
            return undefined;
        }
        else{
            console.log(playerCh,computerCh, "lose");
            return false;
        }
    }
}