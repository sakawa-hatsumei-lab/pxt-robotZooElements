//% weight=200 color=#ff8308 icon=""
//% block="ロボット動物園"
//% groups="['じっとする','うごき','まばたき','かんさつ']"
//かんさつ
namespace RobotZoo {
    /**
     * 動きサンプル1 : 
     * 左右交互に少しずつ前に進む
     */
    //% block="*ちょこちょこ*" block.loc.ja="*ちょこちょこ*"
    //% group="かんさつ"
    //% color="#f75707"
    //% weight=600
    export function toddle() {
        // 4回繰り返す
        for(let i = 0; i < 4; i++) {
            // 200ミリ秒で、ふつうに ひだりに まがる
            RobotZoo.turn(direction.left, presetSpeed.mid, 200);
            // 200ミリ秒で、ふつうに みぎに まがる
            RobotZoo.turn(direction.right, presetSpeed.mid, 200);
        }
        RobotZoo.keepStill(0);
    }

    /**
     * 動きサンプル2 : 
     * 緩やかにカーブしながら前に進む
     */
    //% block="*すいすい*"
    //% group="かんさつ"
    //% color="#f75707"
    //% weight=500
    export function swift() {
        // 2回繰り返す
        for(let i = 0; i < 2; i++) {
            // 700ミリ秒で、ひだりに まがる
            pins.servoWritePin(servoLeftPin, 100); //+10
            pins.servoWritePin(servoRightPin, 40); //-50
            basic.pause(700);
            // 700ミリ秒で、みぎに まがる
            pins.servoWritePin(servoLeftPin, 140); //+50
            pins.servoWritePin(servoRightPin, 80); //-10
            basic.pause(700);
        }
        RobotZoo.keepStill(0);
    }
    

    /**
     * 動きサンプル3 : 
     * ちょっと進んでちょっと止まる
     */
    //% block="*つんつん*"
    //% group="かんさつ"
    //% color="#f75707"
    //% weight=400
    export function poke() {
        // 8回繰り返す
        for(let i = 0; i < 8; i++) {
            // 300ミリ秒で、ふつうに まえに すすむ
            RobotZoo.goStraigt(presetSpeed.mid, 300);
            // 150ミリ秒間 じっとする
            RobotZoo.keepStill(150);
        }
    }

    /**
     * 動きサンプル4 : 
     * 前に進んでどこかを向き、また前に進む
     */
    //% block="*うろうろ*"
    //% group="かんさつ"
    //% color="#f75707"
    //% weight=300
    export function stroll() {
        // 3回繰り返す
        for(let i = 0; i < 3; i++) {
            // 500ミリ秒で、ゆっくり まえに すすむ
            RobotZoo.goStraigt(presetSpeed.slow, 500);
            // 700ミリ秒間 じっとする
            RobotZoo.keepStill(700);
            // 500ミリ秒で、ゆっくり ひだりに ふりむく
            RobotZoo.lookBack(direction.left, presetSpeed.slow, 500);
            // 100ミリ秒間 じっとする
            RobotZoo.keepStill(100);
            // 700ミリ秒で、ふつうに まえに すすむ
            RobotZoo.goStraigt(presetSpeed.mid, 700);
            // 700ミリ秒間 じっとする
            RobotZoo.keepStill(700);
            // 800ミリ秒で、ふつうに みぎに ふりむく
            RobotZoo.lookBack(direction.right, presetSpeed.mid, 800);
            // 300ミリ秒間 じっとする
            RobotZoo.keepStill(300);
        }
    }
    
    /**
     * 動きサンプル5 : 
     * 少し進んであたりを見る
     */
    //% block="*きょろきょろ*"
    //% group="かんさつ"
    //% color="#f75707"
    //% weight=200
    export function lookAlound() {
        // 3回繰り返す
        for(let i = 0; i < 3; i++) {
            // 500ミリ秒で、ふつうに まえに すすむ
            RobotZoo.goStraigt(presetSpeed.mid, 500);
            // 400ミリ秒間 じっとする
            RobotZoo.keepStill(400);
            // 150ミリ秒で、ふつうに ひだりに ふりむく
            RobotZoo.lookBack(direction.left, presetSpeed.mid, 150);
            // 500ミリ秒間 じっとする
            RobotZoo.keepStill(500);
            // 300ミリ秒で、ふつうに みぎに ふりむく
            RobotZoo.lookBack(direction.right, presetSpeed.mid, 300);
            // 500ミリ秒間 じっとする
            RobotZoo.keepStill(500);
            // 150ミリ秒で、ふつうに ひだりに ふりむく
            RobotZoo.lookBack(direction.left, presetSpeed.mid, 150);
            // 300ミリ秒間 じっとする
            RobotZoo.keepStill(300);
        }
    }

    /**
     * 動きサンプル6 : 
     * 勢いよくまっすぐ前に進む
     */
    //% block="*ぐんぐん*"
    //% group="かんさつ"
    //% color="#f75707"
    //% weight=100
    export function rush() {
        // 1000ミリ秒で、はやく まえに すすむ
        RobotZoo.goStraigt(presetSpeed.fast, 1000);
        // 100ミリ秒間 じっとする
        RobotZoo.keepStill(100);
    }
}