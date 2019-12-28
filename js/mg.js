class MemoryGame {
    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.flag = [0, 0];
        this.score = 0;
        this.i = 0;
        this.canContinue = 1;
    }


    start() {

    }



    reset() {



        let checkedArrayId = [];
        let checkedArrayImg = [];

        let counter = 0;
        for (let i = 0; i < (this.row * this.col) / 2; i++) {
            checkedArrayImg.push(0);
        }
        for (let i = 0; i < this.row * this.col; i++) {
            checkedArrayId.push(0);
        }

        for (let i = 0; i < this.row; i++) {
            var row = document.createElement('div');
            row.setAttribute('class', 'row');
            document.querySelector('#cards').appendChild(row);
            for (let j = 0; j < this.col; j++) {
                counter++;
                var card = document.createElement('div');
                card.setAttribute('class', 'card');
                card.setAttribute('id', `${counter}`);
                card.style.backgroundSize = "0px";
                row.appendChild(card);
                // document.getElementById(`${counter}`).style.backgroundImage = `url('./img/${counter}.png')`;
            }
        }

        while (checkedArrayId.includes(0)) {
            let randPic = Math.floor(Math.random() * 15) + 1; //random number between 1 to 15
            let randId = Math.floor(Math.random() * 30) + 1; //random number between 1 to 30
            if (checkedArrayImg[randPic - 1] < 2) {
                if (checkedArrayId[randId - 1] != 1) {
                    document.getElementById(`${randId}`).style.backgroundImage = `url('./img/${randPic}.png')`;
                    checkedArrayId[randId - 1] = 1;
                    checkedArrayImg[randPic - 1]++;

                }
            }

        }

        this.clicked();

    }



    clicked() {


        let listenerArray = document.querySelectorAll(".card");
        for (const card of listenerArray) {
            card.addEventListener('click', this.addE);
        }

    }




    addE(e) {
        //
        if (memoryGame.canContinue == 1) {

            if (e.target.style.backgroundSize == "0px")
                e.target.style.backgroundSize = "70px";

            memoryGame.canContinue = 0;


            memoryGame.flag[memoryGame.i] = e.target;

            memoryGame.i++;
            console.log(memoryGame.flag);
            if (memoryGame.i == 2) {
                if (memoryGame.flag[0].style.backgroundImage == memoryGame.flag[1].style.backgroundImage && memoryGame.flag[0].id != memoryGame.flag[1].id) {
                    memoryGame.i = 0;
                    memoryGame.flag[0] = 0;
                    memoryGame.flag[1] = 0;
                    console.log("win");
                    memoryGame.canContinue = 1;
                    memoryGame.score++;
                    document.getElementById("h1").innerHTML = `Memory Game &nbsp &nbsp Score:${memoryGame.score}`;
                    if (memoryGame.score == 15) {
                        document.getElementById("h1").innerHTML = `Memory Game &nbsp &nbsp YOU WON!`;
                    }

                } else {


                    setTimeout(function() {
                        console.log("else");
                        memoryGame.flag[0].style.backgroundSize = "0px";
                        memoryGame.flag[1].style.backgroundSize = "0px";
                        memoryGame.flag[0] = 0;
                        memoryGame.flag[1] = 0;
                        memoryGame.i = 0;
                        memoryGame.canContinue = 1;
                    }, 1000);


                    // memoryGame.flag[0].style.backgroundSize = "0px";
                    // memoryGame.flag[1].style.backgroundSize = "0px";




                }

            } else
                setTimeout(function() {
                    if (memoryGame.canContinue != 1)
                        memoryGame.canContinue = 1;
                }, 1000);
        }



    }




}

const memoryGame = new MemoryGame(5, 6);
memoryGame.reset();



// if (memoryGame.flag.includes(0)) {

//     memoryGame.flag[memoryGame.i] = e.target;

//     memoryGame.i++;
//     console.log(memoryGame.flag);
//     if (memoryGame.i == 2) {
//         memoryGame.i = 0;
//         memoryGame.flag[0] = 0;
//         memoryGame.flag[1] = 0;
//     }
// } else {
//     if (memoryGame.flag[0].style.backgroundImage == memoryGame.flag[1].style.backgroundImage) {
//         memoryGame.i = 0;
//         memoryGame.flag[0] = 0;
//         memoryGame.flag[1] = 0;
//         console.log("win");

//     } else {
//         memoryGame.flag[0].style.backgroundSize == "0px";
//         memoryGame.flag[1].style.backgroundSize == "0px";
//         memoryGame.i = 0;
//         memoryGame.flag[0] = 0;
//         memoryGame.flag[1] = 0;
//     }
// }












// //works:
// addE(e) {



//     if (e.target.style.backgroundSize == "0px")
//         e.target.style.backgroundSize = "95px";


//     memoryGame.flag[memoryGame.i] = e.target;

//     memoryGame.i++;
//     console.log(memoryGame.flag);
//     if (memoryGame.i == 2) {
//         if (memoryGame.flag[0].style.backgroundImage == memoryGame.flag[1].style.backgroundImage) {
//             memoryGame.i = 0;
//             memoryGame.flag[0] = 0;
//             memoryGame.flag[1] = 0;
//             console.log("win");
//         } else {
//             console.log("else");

//             setTimeout(function() {
//                 memoryGame.flag[0].style.backgroundSize = "0px";
//                 memoryGame.flag[1].style.backgroundSize = "0px";
//             }, 500);


//             // memoryGame.flag[0].style.backgroundSize = "0px";
//             // memoryGame.flag[1].style.backgroundSize = "0px";


//             memoryGame.i = 0;
//             memoryGame.flag[0] = 0;
//             memoryGame.flag[1] = 0;

//         }

//     }

// }