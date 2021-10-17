const showTime = document.querySelector('#stopwatch')

class StopWatch {
    constructor(){
        this.timer;
        this.sec = 0;
        this.min = 0;
        this.disSec = 0;
        this.disMin = 0;
    }

    start() {
        this.timer = setInterval(() => {
            this.sec ++;
            if(this.sec < 10){
                this.disSec = "0" + this.sec.toString();
            } else {
                this.disSec = this.sec;
            }

            if(this.min < 10){
                this.disMin = "0" + this.min.toString();
            } else {
                this.disMin = this.min;
            }
            if(this.sec >= 59) {
                this.sec = 0 - 1;
                this.min++;
            }
            showTime.innerHTML = `${this.disMin} : ${this.disSec}`
        }, 1000);

    }

    stop() {
        clearInterval(this.timer)
    }

    reset() {
        this.min = 0;
        this.sec = 0;
    }
}
const setTimer = new StopWatch();

document.querySelector('.start').addEventListener('click', () =>{
    setTimer.start()
})
document.querySelector('.stop').addEventListener('click', () =>{
    setTimer.stop()
})
document.querySelector('.reset').addEventListener('click', () =>{
    setTimer.reset()
    setTimer.stop()
    showTime.innerHTML = '00 : 00';
})