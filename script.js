function play(electionUser) {
    let options = ['rock💎', 'paper🧻', 'scissors✂'];
    let pcElection = options[Math.floor(Math.random() * 3)];

    let results = determinarResultado(electionUser, pcElection);

    document.getElementById('resultsMenssage').innerHTML = `You select ${electionUser}. The PC select ${pcElection}. ${results}`;
    
  }

  function determinarResultado(electionUser, pcElection) {
    if (electionUser === pcElection) {
      return "Tie.";
    } else if (
      (electionUser === 'rock💎' && pcElection === 'scissors✂') ||
      (electionUser === 'paper🧻' && pcElection === 'rock💎') ||
      (electionUser === 'scissors✂' && pcElection === 'paper🧻')
    ) {
      return "¡You Win!";
      victory=victory+1;
    } else {
      return "¡You Lose!";
    }
  }
 


window.addEventListener('load', play)