const player = document.querySelector('.player')
const playerBtn = document.querySelector('.toggle')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const skipBtn = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')
const progressBar = player.querySelector('.progress__filled')
const curr = document.querySelector('.curr')
const dur = document.querySelector('.dur')

dur.innerHTML = video.duration


function togglePlay(){
    const method = video.paused? 'play' : 'pause'
    video[method]()
    updatePlayerBtn()

}
function updatePlayerBtn(){
    const icon = video.paused ? '►' : '❚ ❚'
    playerBtn.textContent = icon
}

function skip(){
    const skipTime =parseFloat( this.dataset.skip)
    console.log(skipTime)
    video.currentTime += skipTime
}

function handleRange(){
    video[this.name] = this.value
}

function handleProgress(){
curr.innerHTML = video.currentTime

    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${percent}%`
}


function scrub(e){
    const scrubtime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = scrubtime
} 

video.addEventListener('click',togglePlay)
playerBtn.addEventListener('click',togglePlay)
video.addEventListener('timeupdate',handleProgress)

skipBtn.forEach(btn=>btn.addEventListener('click',skip))

ranges.forEach(range=>range.addEventListener('change',handleRange))
ranges.forEach(range=>range.addEventListener('mousemove',handleRange))

let mousedown = false
progress.addEventListener('click',scrub)
progress.addEventListener('mousemove',(e)=> mousedown && scrub(e)) // if first is true it moves to ssecond , if first is false it wont move to the second
progress.addEventListener('mousedown',()=>mousedown=true)
progress.addEventListener('mouseup',()=>mousedown=false)


// progress.addEventListener('mousemove',)



