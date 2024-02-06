/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/

/**
 * Custom blocks
 */
//% weight=100 color=#f41f86 icon=""
namespace foundation {
    /**
     * Sets the track image as the background.
     */
    //% block
    export function SetBackground() {
        track.setTrack()
    }
}

/**
 * Custom blocks
 */
//% weight=100 color=#76b6c4 icon=""
namespace countdown {
    /**
    * Sets the lights-0 image as the background.
    */
    //% block
    export function SetCountdownImage1() {
        lights_1.setCountdownImage1()
    }

    /**
    * Sets the lights-1 image as the background.
    */
    //% block
    export function SetCountdownImage2() {
        lights_1.setCountdownImage2()
    }

    /**
    * Sets the lights-2 image as the background.
    */
    //% block
    export function SetCountdownImage3() {
        lights_2.setCountdownImage3()
    }

    /**
    * Sets the lights-3 image as the background.
    */
    //% block
    export function SetCountdownImage4() {
        lights_2.setCountdownImage4()
    }

    /**
    * Sets the lights-4 image as the background.
    */
    //% block
    export function SetCountdownImage5() {
        lights_3.setCountdownImage5()
        
    }

    /**
    * Sets the lights-5 image as the background.
    */
    //% block
    export function SetCountdownImage6() {
        lights_3.setCountdownImage6()
    }

    /**
    * Sets the lights-go image as the background.
    */
    //% block
    export function SetCountdownImage7() {
        lights_3.setCountdownImage7()
    }

    /**
     * Play the race countdown tone.
     */
    //% block
    export function PlayCountdownTone() {
        music.play(music.tonePlayable(175, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }

    /**
    * Play the race start tone.
    */
    //% block
    export function PlayStartTone() {
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    }
}

/**
 * Custom blocks
 */
//% weight=100 color=#795695 icon=""
namespace finish {
    /**
     * Sets the finish line track image as the background.
     */
    //% block
    export function SetFinishBackground() {
        finish.setFinish()
    }
}