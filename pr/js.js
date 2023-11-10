let character;
let block;
$(()=>{
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
            if(blockPosition <= 40 && blockPosition > 0 && characterPosition>=120){
                alert("you are out")
            }
        console.log(characterPosition+":"+blockPosition)
    },10)
})

const getValue = (ele,css)=>{
     
    return parseInt($(ele).css(css)) 
}

