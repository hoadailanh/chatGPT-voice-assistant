<template>
    <h1>ChatGPT Voice Assistant</h1>
    <div class="error">Error: {{ errorMessage }}</div>
    <div class="container">
        <div class="transcript">
            <Transcript />
        </div>
        <div class="gpt-response">
            <GPTResponse />
        </div>
    </div>
</template>

<script>
import { watch } from 'vue'
import Transcript from '../components/Transcript.vue'
import GPTResponse from '../components/GPTResponse.vue'
import { useChatGPTStore } from '../store/useChatGPTStore'
import { storeToRefs } from "pinia"

export default {
    name: 'Home',
    components: {
        Transcript, GPTResponse
    },
    setup() {
        const { errorMessage } = storeToRefs(useChatGPTStore())
        watch(errorMessage, (text) => {
            const msg = new SpeechSynthesisUtterance();
            msg.text = text;
            msg.volume = 1.0; // speech volume (default: 1.0)
            msg.pitch = 1.0; // speech pitch (default: 1.0)
            msg.rate = 1.0; // speech rate (default: 1.0)
            msg.lang = 'en-US'; // speech language (default: 'en-US')
            const voices = window.speechSynthesis.getVoices();
            msg.voice = voices.find(voice => voice.name === 'Google UK English Female'); // voice URI (default: platform-dependent)
            msg.onboundary = function (event) {
                console.log('Speech reached a boundary:', event.name);
            };
            msg.onpause = function (event) {
                console.log('Speech paused:', event.utterance.text.substring(event.charIndex));
            };
            window.speechSynthesis.speak(msg);
        })
         return { errorMessage }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container {
        display: flex;
        margin: 0 20px;
    }
    .transcript {
        width: 50%;
        height: 100vh;
        overflow: auto;
    }
    .gpt-response {
        width: 50%;
        height: 100vh;
        overflow: auto;
    }
    .error {
        color: red
    }
</style>
