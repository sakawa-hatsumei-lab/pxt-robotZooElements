/*
 * LED(digital):P0(L),P1(R)
 * sound(PWM):P2
 * servo(PWM):P15(L), P16(R)
 */

/*
 * P15 : left f180
 * P16 : right f0
 */

//LEDピン番号
const ledLeftPin = DigitalPin.P0;
const ledRightPin = DigitalPin.P1;

//スピーカーピン番号
const speakerPin = AnalogPin.P2;

//サーボピン番号
const servoLeftPin = AnalogPin.P15;
const servoRightPin = AnalogPin.P16;

// 左右
enum direction {
    //% block="ひだり"
    left = -1,
    //% block="みぎ"
    right = 1
}

//スピード
enum presetSpeed {
    //% block="ゆっくり"
    slow = 12,
    //% block="ふつうに"
    mid = 32,
    //% block="はやく"
    fast = 90,
    //% block="とまる"
    // stop = 0
}

// 鳴き声
enum presetSound {}

//初期設定
function init(){
    //スピーカー
    //P2を音声出力のピンに設定
    pins.analogSetPitchPin(speakerPin);
    music.setVolume(0);
    //サーボモーター
    pins.servoWritePin(AnalogPin.P15, 90);
    pins.servoWritePin(AnalogPin.P16, 90);
    pins.analogWritePin(servoLeftPin, 0);
    pins.analogWritePin(servoRightPin, 0);
    //LED
    RobotZoo.openEyes();
    basic.pause(300);
}

init();
//% block="ロボット動物園"
//% weight=200 color=#ff8308 icon=""
//% groups="['じっとする','かんさつ']"

//つくる
namespace RobotZoo {
    /**
     * ロボットを指定した時間静止させます。
     */
    //% block="じっとする"
    //% _duration.shadow="timePicker"
    //% _duration.defl=500
    //% group="じっとする"
    //% color="#7bc700"
    //% block=""
    //% weight=550
    export function keepStillMS(_duration: number): void {
        //サーボを設定
        pins.servoWritePin(servoLeftPin, 90);
        pins.servoWritePin(servoRightPin, 90);
        pins.analogWritePin(servoLeftPin, 0);
        pins.analogWritePin(servoRightPin, 0);
        basic.pause(_duration);
    }

    /**
     * ロボットを500ms静止させます。
     */
    //% block="じっとする"
    //% group="じっとする"
    //% color="#7bc700"
    // block=""
    //% weight=550
    export function keepStill(): void {
        //サーボを設定
        pins.servoWritePin(servoLeftPin, 90);
        pins.servoWritePin(servoRightPin, 90);
        pins.analogWritePin(servoLeftPin, 0);
        pins.analogWritePin(servoRightPin, 0);
        basic.pause(500);
    }

    /**
     * ロボットが進む向き、スピード、動く時間を決めます。
     */
    //% block="$_duration|ミリ秒で、$_speed|まえに すすむ"
    //% _speed.min=0 _speed.max=90
    //% _duration.shadow="timePicker"
    //% _duration.defl=500
    //% group="うごき"
    //% weight=1000
    //% block=""
    export function goStraigt(_speed: presetSpeed, _duration: number): void {
        pins.servoWritePin(servoLeftPin, 90+_speed);
        pins.servoWritePin(servoRightPin, 90-_speed);
        basic.pause(_duration);
        keepStillMS(0);
    }

    /**
     * ロボットが下がる向き、スピード、動く時間を決めます。
     */
    //% block="$_duration|ミリ秒で、$_speed|うしろに さがる"
    //% _speed.min=0 _speed.max=90
    //% _duration.shadow="timePicker"
    //% _duration.defl=500
    //% group="うごき"
    //% weight=900
    //% block=""
    export function goBack(_speed: presetSpeed, _duration: number): void {
        pins.servoWritePin(servoLeftPin, 90-_speed);
        pins.servoWritePin(servoRightPin, 90+_speed);
        basic.pause(_duration);
        keepStillMS(0);
    }

    /**
     * ロボットが曲がる向き、スピード、動く時間を決めます。
     */
    //% block="$_duration|ミリ秒で、$_speed|$_dir|に まがる"
    //% _speed.min=0 _speed.max=90
    //% _duration.shadow="timePicker"
    //% _duration.defl=500
    //% group="うごき"
    //% weight=800
    //% block=""
    export function turn(_dir: direction, _speed: presetSpeed, _duration: number): void {
        //サーボを設定
        if(_dir==1){ //right
            pins.servoWritePin(servoLeftPin, 90+_speed);
            pins.servoWritePin(servoRightPin, 90);
        }else if(_dir==-1){ //left
            pins.servoWritePin(servoLeftPin, 90);
            pins.servoWritePin(servoRightPin, 90-_speed);
        }
        basic.pause(_duration);
        keepStillMS(0);
    }

    /**
     * ロボットがどちらに振り向くか、スピード、動く時間を決めます。
     */
    //% block="$_duration|ミリ秒で、$_speed|$_dir|に ふりむく"
    //% _speed.min=0 _speed.max=90
    //% _duration.shadow="timePicker"
    //% _duration.defl=500
    //% group="うごき"
    //% weight=700
    //% block=""
    export function lookBack(_dir: direction, _speed: presetSpeed, _duration: number): void {
        if(_dir==1){ //right
            pins.servoWritePin(servoLeftPin, 90+_speed);
            pins.servoWritePin(servoRightPin, 90+_speed);
        }else if(_dir==-1){ //left
            pins.servoWritePin(servoLeftPin, 90-_speed);
            pins.servoWritePin(servoRightPin, 90-_speed);
        }
        basic.pause(_duration);
        keepStillMS(0);
    }

    /**
     * 直前の動きを指定した時間続けます。
     */
    //% block="$_duration|ミリ秒間 つづける"
    //% _duration.shadow="timePicker"
    //% _duration.defl=500
    //% group="うごき"
    //% weight=90
    //% block=""
    export function keep(_duration: number): void {
        basic.pause(_duration);
    }

    /**
     * 目を開けます。
     */
    //% block="めをあける"
    //% group="まばたき"
    //% weight=400
    //% block=""
    export function openEyes(): void {
        pins.digitalWritePin(ledLeftPin, 1);
        pins.digitalWritePin(ledRightPin, 1);
        basic.pause(300);
    }

    /**
     * 目をつぶります。
     */
    //% block="めをつぶる"
    //% group="まばたき"
    //% weight=300
    //% block=""
    export function closeEyes(): void {
        pins.digitalWritePin(ledLeftPin, 0);
        pins.digitalWritePin(ledRightPin, 0);
        basic.pause(300);
    }

    /**
     * ロボットのまばたきの回数、かける時間を決めます。
     */
    //% block="$_duration|ミリ秒で、$_count|回 まばたきする "
    //% _duration.shadow="timePicker"
    //% _duration.defl=500
    //% _count.defl=3
    //% group="まばたき"
    //% weight=200
    //% block=""
    export function blink(_count:number, _duration: number): void {
        let _elapse = _duration/(_count*2);
        for(let i = 0; i < _count; i++) {
            RobotZoo.closeEyes();
            basic.pause(_elapse);
            RobotZoo.openEyes();
            basic.pause(_elapse);
        }
    }

    /**
     * 何ミリ秒かけてどちらの目をウインクするかを決めます。
     */
    //% block="$_duration|ミリ秒かけて、$_dir|の目を ウインクする"
    //% _duration.shadow="timePicker"
    //% _duration.defl=500
    //% group="まばたき"
    //% weight=100
    //% block=""
    export function wink(_dir:direction, _duration: number): void {
        if(_dir==-1){ //left
            pins.digitalWritePin(ledLeftPin, 0);
            pins.digitalWritePin(ledRightPin, 1);
        }else if(_dir==1){ //right
            pins.digitalWritePin(ledLeftPin, 1);
            pins.digitalWritePin(ledRightPin, 0);
        }
        basic.pause(_duration/2);
        pins.digitalWritePin(ledLeftPin, 1);
        pins.digitalWritePin(ledRightPin, 1);
        basic.pause(_duration/2);
    }
}