<template>
    <div>GPT Response: </div>
    <div>{{ errorMessage }}</div>
    <div ref="responseRef" class="transcript">
        <ul>
            <li v-for="r in responses" :key="r">
                {{ r }}
            </li>
        </ul>
    </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useUtil } from '../shared/util'
import { useChatGPTStore } from '../store/useChatGPTStore'
import { storeToRefs } from "pinia"

export default {
    name: 'GPTResponse',
    setup() {
        const { scrollToEnd } = useUtil()
        const responseRef = ref()
        const { response, responses } = storeToRefs(useChatGPTStore())

        watch(response, (text) => {
            console.info("In GPTResponse:response - Error Message:" + text)
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

        scrollToEnd(responseRef.value)

        return { responses, responseRef }
    }
}
</script>

<style scoped>
</style>
