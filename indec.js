let userscore=0;
let computerscore=0;

const choicess= document.querySelectorAll(".choices");
const msg=document.querySelector("#msg");

const user_score=document.querySelector("#User-Score");
const computer_score=document.querySelector("#Computer-score");

const genComputer = () => {
    const options = ["rock", "paper", "scissors"];
    const random_index = Math.floor(Math.random() * 3);
    let p =options[random_index];
    return p;
};


const drowGame=()=>{
    msg.innerHTML="Drow game";
    msg.style.backgroundColor = "orange";  
};

const showWinner=(userwin,user_choice,computerChoice)=>{
    if(userwin){
        userscore++;
        user_score.innerHTML=userscore;
      msg.innerHTML=`you win the match! Yor choice ${user_choice} beats ${computerChoice}` ;
      msg.style.backgroundColor = "green";
    }
    else{
        computerscore++;
        computer_score.innerHTML=computerscore;
        msg.innerHTML=`you lost the match! ${computerChoice} beats your choice ${user_choice}`; 
        msg.style.backgroundColor = "red";
    }
};


const playGame = (user_choice) => {
    console.log("user choice =", user_choice);

    const computerChoice = genComputer();
    console.log("computer choice =", computerChoice);

    if(user_choice===computerChoice){
        drowGame();
    }
    else{
        let userwin=true;
        if (user_choice==="rock") {
            userwin=computerChoice==='paper'?false:true;            
        }
        else if (user_choice==="paper") {
            userwin=computerChoice==="scissors"?false:true; 
        } else {
            userwin=computerChoice==="rock"?false:true; 
        }
        showWinner(userwin,user_choice,computerChoice);
    }
    
};



choicess.forEach((choices) => {
    choices.addEventListener("click",()=>{
        const user_choice =choices.getAttribute("id");
        // console.log("Choice was click",user_choice);
        playGame(user_choice);
    })
});

// mathfloor(math.random()) its give output random generate nondacimal value 
// math.random() it gave the random value betweem 0to 1 

