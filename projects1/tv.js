class TV {
    constructor(chanel, volumeLevel, on) {
        this.chanel = chanel;
        this.volumeLevel = volumeLevel;
        this.on = on;
    }
    turn() {
        this.on = !this.on;
    }

    setChanel(newChanel) {
        if (this.on && newChanel <= 100) {
            this.chanel = newChanel;
        }
    }
    setVolume(newVolumeLevel) {
        if (this.on && newVolumeLevel >= 0 && newVolumeLevel <= 10) {
            this.volumeLevel = newVolumeLevel;
        }
    }
    chanelUp() {
        if (this.on && this.chanel < 100) {
            this.chanel++;
        }
    }
    chanelDown() {
        if (this.on && this.chanel > 0) {
            this.chanel--;
        }
    }
    volumeUp() {
        if (this.on && this.volumeLevel < 10) {
            this.volumeLevel++;
        }
    }
    volumeDown() {
        if (this.on && this.volumeLevel > 0) {
            this.volumeLevel--;
        }
    }
}
const tv = new TV(1, 5, true);
tv.setChanel(45);
tv.volumeUp();
tv.turn()
console.log(tv)