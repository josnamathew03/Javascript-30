const timeLeft = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')
const timerC = document.querySelector('.timer__controls')
const input = document.querySelector('input')
let countDown
let backTime


function timer(seconds) {
    clearInterval(countDown)
    const now = Date.now()
    const then = now + seconds * 1000
    displayEndTIme(then)

    displayTime(seconds)

    countDown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000)  
        if(secondsLeft<=0){
            clearInterval(countDown)
        }                                                        
        displayTime(secondsLeft)

    }, 1000)
             
}
function displayTime(seconds) {
    const [min, sec] = [Math.floor((seconds / 60)), (seconds % 60)]
    timeLeft.innerHTML =`${min<10 ? '0':''}${min} : ${sec<10 ? '0':''}${sec}`
    document.title =   `${min<10 ? '0':''}${min} : ${sec<10 ? '0':''}${sec}`                                                                                                                            
}         

function displayEndTIme(then){
    const end  = new Date(then)
    const hr = end.getHours()>12 ? end.getHours()-12 : end.getHours()
    
    const m = end.getMinutes()
    endTime.innerHTML = `Be back at ${hr<10? '0':''}${hr} : ${m<10? '0':''}${m}`        
    
}

timerC.addEventListener('click',(e)=>{
    const seconds = e.target.dataset.time
    if(!seconds) return
    timer(seconds)
})

input.addEventListener('change',(e)=>{
    timer((e.target.value)*60)                                       
})

                                                   

                               




                                                                    


                      









                                      
        
                                                                 






