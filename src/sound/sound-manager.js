import BirthdayMp3 from 'static/sound/birthday.mp3';

class SoundManager {
    constructor() {
        this._element = document.createElement('audio');
        this._element.autoplay = false;
        this._element.volume = 1;
    }

    init() {
        this._element.src = BirthdayMp3;
        this._element.load();
    }

    play() {
        this._element.play();
    }

    pause() {
        this._element.pause();
    }
}

const Sound = new SoundManager();
export default Sound;
