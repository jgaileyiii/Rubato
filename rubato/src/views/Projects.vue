<template>
    <div>
        <button @click="toggle">Audio Recorder</button>
        <audio-recorder v-if="showRecorder"
            upload-url="some url"
            filename="ninja"
            format="wav"
            :attempts="3"
            :time="2"
            :headers="headers"
            :before-recording="callback"
            :pause-recording="callback"
            :after-recording="callback"
            :select-record="callback"
            :before-upload="callback"
            :successful-upload="callback"
            :failed-upload="callback"
            :bit-rate="192"
        />
        <audio-player :src="mp3" v-if="!showRecorder"/>
    </div>

</template>

<script>
export default {
    data() {
        return {
            showRecorder: null
        }
    },
    methods: {
        callback(msg){
            console.debug("Event: ", msg)
        },
        toggle () {
            this.showRecorder = !this.showRecorder
        }
    }
}
</script>

<style scoped>

</style>