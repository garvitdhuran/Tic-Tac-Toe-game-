var squares = ['','','','','','','','','']
var myturn  = 'X'
var gameon = true




var xscore = 0 
var oscore = 0 


var winlines  = [ 
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]






var board = document.getElementById('gamebox')
var msg = document.getElementById('msg')





function setup(){
    board.innerHTML = ''
    for(var i = 0; i<9; i++){
        var btn = document.createElement('button')
        btn.className = 'cell'
        btn.id='c' + i
        btn.onclick = clicked 
        
        board.appendChild(btn)
    }
}

/* clicked if this doesnt work chanhe the function clicked() */



function clicked(){
    var num = parseInt(this.id.replace('c',''))


    if(!gameon) return
    if(squares[num] != '')return


    squares[num] = myturn
    this.innerText = myturn

    if(myturn == 'X'){
        this.style.color = '#e74c3c'
    } else {
        this.style.color = '#3498db'
    }





    var winner = checkwin()

    if(winner){
        msg.innerText = 'player' + winner + 'wins!!!'

        if(winner =='X'){
            xscore++
            document.getElementById('sc1').innerText = xscore

        } else {
            oscore++
            document.getElementById('sc2').innerText = oscore
        }

        showwinner()
        gameon = false



        setTimeout(function(){
            document.getElementById('result').innerText = 'Player ' + winner + ' wins!!!'
            document.getElementById('overlay').style.display = 'flex'

        }, 400)

        return


    }


    var full = true 
    for(var j = 0; j<squares.length; j++){
        if(squares[j]== ''){
            full = false
        }

    }

    if(full){
        msg.innerText = "its a draw lol"
        gameon = false 
        setTimeout(function(){
            document.getElementById('result').innerText = 'draw!!'
            document.getElementById('overlay').style.display = 'flex'
        }, 400)

        return 
    }


    myturn = myturn == 'X' ? 'O' : 'X'
    msg.innerText = 'player ' + myturn + " 's turn"



}



function checkwin(){
    for(var k = 0; k<winlines.length; k++){

        var a = winlines[k][0]
        var b = winlines[k][1]
        var c = winlines[k][2]

        if(squares[a] != '' && squares[a]==squares[b] && squares[b]==squares[c]){ 
            return squares[a]
        }


    }
    return null 

}

function showwinner(){
    for(var k = 0; k< winlines.length; k++){
        var a = winlines[k][0],b= winlines[k][1], c= winlines[k][2]
        if(squares[a] != '' && squares[a]==squares[b] && squares[b]==squares[c]){  

            document.getElementById('c'+ a).classList.add('win')
            document.getElementById('c'+ b).classList.add('win')
            document.getElementById('c'+ c).classList.add('win')

    
            
        }
    }
}




function restart(){
    squares = ['','','','','','','','','']
    myturn = 'X'
    gameon = true 
    msg.innerText = 'x goes first'
    document.getElementById('overlay').style.display = 'none'

    setup()
}


document.getElementById('newgame').onclick = restart 

document.getElementById('again').onclick = restart 




document.getElementById('resetbtn').onclick = function(){
    xscore = 0 
    oscore = 0 
    document.getElementById('sc1').innerText = 0 
    document.getElementById('sc2').innerText = 0 



    restart()


}




setup()









           





