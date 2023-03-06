//grid 5 x 5 letters

let display =[
    [` `,` `,` `,` `,` `,` `, `<br>`],
    [` `,` `,` `,` `,` `, `<br>`],
    [` `,` `,` `,` `,` `, `<br>`],
    [` `,` `,` `,` `,` `, `<br>`],
    [` `,` `,` `,` `,` `, `<br>`]
];


let startOpponent = "<b>W</b>";
let OPP_Row = 0;
let OPP_Col = 4;
let move = 1;

let startBullet = ` `;
let BULLET_Row = 3;
let BULLET_Col = 4;
let shoot = -1;
let fire = false;


let Myself_Row = 4;
let Myself_Col = 4;

function Opponent(row,col){
    display[row] =[` `,` `,` `,` `,` `,` `, `<br>`]
display[row][col] =startOpponent;

}

function Bullet(row,col){
    display[row-1] =[` `,` `,` `,` `,` `,` `, `<br>`]
display[row][col] =startBullet;
if(fire == true){startBullet = `<i>|</i>`}
if(row+1<4){
display[row+1] =[` `,` `,` `,` `,` `,` `, `<br>`]}
}


 function Myself(row,col){
        display[row] =[` `,` `,` `,` `,` `, `<br>`]
        display[row][col] ="<b>M</b>";
        
        
        
        }

        function left(){
          Myself_Col--;
          if(Myself_Col < 0){Myself_Col = 0 }
        }

        function right(){
            Myself_Col++;
          if(Myself_Col > 4){Myself_Col = 4 }

          }
        
        function firegun(){
            fire = true;
        }


function loadGame(){
    // if(BULLET_Row==OPP_Row&&&&fire == true){

    //     startBullet = `<b class="hit">W</b>`
    //     display[OPP_Row][OPP_Col] = startBullet;  
    // }
    

   if(OPP_Col<2 ||OPP_Col>4){
    move = -move;
   }
    OPP_Col = OPP_Col + move;
Opponent(OPP_Row,OPP_Col);

    Myself(Myself_Row,Myself_Col);

    

    if(fire === true){
       
        shoot++;
        
       BULLET_Col = Myself_Col;
      BULLET_Row = Myself_Row-1-shoot; 

     startBullet = `<i>|</i>`;
    
     
    }
Bullet(BULLET_Row,BULLET_Col);

    if(BULLET_Row == 0&&BULLET_Col==OPP_Col){
        display[0]=[` `,` `,` `,` `,` `,` `, `<br>`]
      display[0][BULLET_Col] = `<b class="hit">W</b>`;
      BULLET_Row=3;
      shoot = -1;
      fire = false;
      
    }

    


   

        document.getElementById('display').innerHTML = display;
     
}


setInterval(loadGame, 500);



