
$(()=>{
    let lives = 3;
    let score =0
    let welcomeText =["Welcome","To","The DODGER GAMES"]
    let imgArr =["1.png","2.png","3.png"]
    let blockImg =["4.png","5.png","plus.png"]
    let activeBlock= 0

    let i = 0;
    let interval = setInterval(()=>{
        if(i>welcomeText.length){
            clearInterval(interval)
            $('#welcome button#btn').show('300')
        }
        $('p#main-text').html(welcomeText[i++])
    },1000)


    $('#welcome button#btn').click(()=>{
        $('#welcome').hide('1000',()=>{
            $('#game-bg').fadeIn('1000',(run)=>{
                $('#block').addClass('blockMove')
                changeImg('#blockImg',blockImg[0])

                $('#score').html("Go!!!!!")
                setTimeout(()=>{

                    $('#score').html("Lives: +"+lives)
                },2000)
                runCharacter(imgArr)
            })
        })
        console.log('log')
    })
    $('#btn1').click(()=>{
        event.stopPropagation()
        location.reload();

    })


    character = $('#character');
    block = $('#block');

    $('html').click(()=>{
        character.addClass('animate')
        setTimeout(()=>{
        character.removeClass('animate')
        },500)
        console.log('ok')
    })

    let stateCheck = setInterval(()=>{
        let characterPosition = getValue('#character','top')
        let blockPosition = getValue('#block','left')
            if(blockPosition <= 200 && blockPosition > 0 && characterPosition>=120){
                // console.log("you are out")

                if(activeBlock==2){
                    let blockEl = $('#block')
                    let blockClone = blockEl.clone()
                    blockEl.replaceWith(blockClone)
                    $('#score').html("Lives: +"+(++lives))


                    let randomValue = getRandomNumber();
                    changeImg('#blockImg',blockImg[randomValue])
                    activeBlock= randomValue
                }else if(--lives <= 0){
                    $('#score').html("Game Over")
                    $('#block').removeClass('blockMove')
                    // $('#block').removeClass('blockMove')
                    setTimeout(()=>{
                        $('#score').html('Your Score: '+Math.floor(score)+'</br> play again ?'+'</br> ').append($('<button id="btn1">Play</button>'))
                    },2000)
                    setTimeout(()=>{
                        location.reload();
                    },50000)
                } else{
                    let blockEl = $('#block')
                    let blockClone = blockEl.clone()
                    blockEl.replaceWith(blockClone)
                    $('#score').html("Lives: +"+lives)

                    let randomValue = getRandomNumber();
                    changeImg('#blockImg',blockImg[randomValue])
                    activeBlock= randomValue
                }              

            }else if(blockPosition <= 30 && blockPosition > 0){
                let randomValue = getRandomNumber();
                changeImg('#blockImg',blockImg[randomValue])
                activeBlock= randomValue
            }
        // console.log(characterPosition+":"+blockPosition)
        score += 0.01
    },10)

})

const runCharacter=(arr)=>{

    let i =0;
    setInterval(()=>{
        if(i >= arr.length) i=0
        $('#charImg').attr('src','./assets/'+arr[i++])
    },100)

}

const changeImg =(ele,path)=>{
    $(ele).attr('src','./assets/'+path)
}


const getValue = (ele,css)=>{
     
    return parseInt($(ele).css(css)) 
}

function getRandomNumber() {
    let val =Math.floor(Math.random() * 3)
    console.log(val)
    return val;
    // return  2
}