
$(()=>{

    let audio = $("#backgroundAudio")[0];
    let collisionaudio = $("#collisionaudio")[0];
    let jumpaudio = $("#jumpaudio")[0];

    // Play the audio when the page is loaded
    audio.play();

    audio.addEventListener('error', function(e) {
        console.log('Error during audio playback:', e);
      });

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
    $('#btn1').click((e)=>{
        // e.stopPropagation()
        location.reload();

    })


    character = $('#character');
    block = $('#block');

    $('html').click(()=>{
        character.addClass('animate')
        setTimeout(()=>{
        character.removeClass('animate')
        },500)
        console.log('Mouse click')
        jumpaudio.play()
    })
    $(document).keydown((e)=>{
        if(e.which === 32 ||e.which === 38){
            character.addClass('animate')
        setTimeout(()=>{
        character.removeClass('animate')
        },1500)
        console.log('Keydown')
        jumpaudio.play()
        }

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
                    collisionaudio.play()
                    $('#score').html("Game Over")
                    $('#block').removeClass('blockMove')
                    // $('#block').removeClass('blockMove')
                    let blockEl = $('#block')
                    let characterEl = $('#character')
                    blockEl.css('display','none')
                    characterEl.css('display','none')
                    setTimeout(()=>{
                        $('#score').html('Your Score: '+Math.floor(score)+'</br> play again ?'+'</br> ').append($('<button id="btn1" onclick="reloadPage()">Play</button>'))
                    },2000)
                    // setTimeout(()=>{
                    //     location.reload();
                    // },50000)
                    clearInterval(stateCheck)
                } else{
                    collisionaudio.play()
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

        if(Math.floor(score) >= 20  && Math.floor(score) <= 30){
            let blockEl = $('#block')
            blockEl.attr('class','blockMove1')
        }else if(Math.floor(score) >= 31  && Math.floor(score) <= 40){
            let blockEl = $('#block')
            blockEl.attr('class','blockMove2')
        }else if(Math.floor(score) >= 41  && Math.floor(score) <= 50){
            let blockEl = $('#block')
            blockEl.attr('class','blockMove3')
        }else if(Math.floor(score) >= 50){
            let blockEl = $('#block')
            let characterEl = $('#character')
            // $('#time1').html("Time: "+Math.floor(score))
            // set
            $('#time1').html("You Win")
            $('#score').html('Your Score: '+Math.floor(score)+'</br> play again ?'+'</br> ').append($('<button id="btn1">Play</button>'))

            blockEl.css('display','none')
            characterEl.css('display','none')

            clearInterval(stateCheck)
            // break;
        }

        if(Math.floor(score) < 50){

            $('#time1').html("Time: "+Math.floor(score))
        }

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

function reloadPage(){
    location.reload();
}