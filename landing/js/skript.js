

// $(document).ready(function($){
//     $('.ques__block').on("click",function(event){
//         let id_block = 0
//         if(event.target.parentElement.id ==""){
//             id_block = event.target.parentElement.parentElement.id
            
//         }else{
//             id_block= event.target.parentElement.id
           
//         }
        
//         if(id_block == "q1_1" || id_block == "q2_1" || id_block == "q3_1"){
            
//             $(`#${id_block} > .ques__text`).addClass('_actT').removeClass("ques__text")
//             $(`#${id_block} > .ques__true`).css({"display": "block"})
//             // console.log(`#${id_block}:first-child`)
            
//         }
//         else {
//             $(`#${id_block} > .ques__text`).addClass('_actF').removeClass("ques__text")
//             $(`#${id_block} > .ques__false`).css({"display": "block",})
//         }
//     });
// }); 



document.addEventListener('click', function(){ 
        // console.log(arguments[0].target); 
        
        let id_block = 0
            if(arguments[0].target.parentElement.id ==""){
                id_block = arguments[0].target.parentElement.parentElement.id

            }else{
                id_block= arguments[0].target.parentElement.id               
            }
            if(id_block == "q1_1" || id_block == "q2_1" || id_block == "q3_1"){
                    let block = document.querySelector(`#${id_block} > .ques__text`)
                    block.className = '_actT'
              
                    let blockTrue =document.querySelector(`#${id_block} > .ques__true`) 
                    blockTrue.style.display = 'block'    
                    }
                    else {
                        let block = document.querySelector(`#${id_block} > .ques__text`)
                        block.className = '_actF'
                  
                        let blockTrue =document.querySelector(`#${id_block} > .ques__false`) 
                        blockTrue.style.display = 'block'  
                    }
        // console.log(id_block)
});
   

let openV = document.querySelector('.video__open')
let closeV = document.querySelector('.video__close')
let videoBlock = document.querySelector('.video')
let video = document.querySelector('video')

openV.addEventListener('click', ()=>{
    videoBlock.style.display = "inline-flex"
    video.play()
})

closeV.addEventListener('click', ()=>{
    videoBlock.style.display = "none"
    video.pause()
})