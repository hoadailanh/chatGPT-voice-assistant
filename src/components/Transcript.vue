<template>
    <div>Transcript: </div>
    <div ref="transcriptRef" class="transcript">
        <ul>
            <li v-for="p in prompts" :key="p">
                {{ p }}
            </li>
        </ul>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useUtil } from '../shared/util'
import { useChatGPTStore } from '../store/useChatGPTStore'
import { storeToRefs } from "pinia"

export default {
    name: 'Transcript',
    setup() {
        const transcript = ref('')
        const transcriptRef = ref()
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
        const sr = new SpeechRecognition()
        const { scrollToEnd } = useUtil()
        const { setPrompt, askChatGPT } = useChatGPTStore()
        const {prompts } = storeToRefs(useChatGPTStore())

        onMounted(() => {
            sr.continuous = true
            sr.interimResults = true

            sr.onstart = () => {
                console.log('SpeechRecognition Started')
            }
            sr.onresult = (evt) => {
                const t = Array.from(evt.results)
                    .map(result => result[0])
                    .map(result => result.transcript)
                    .join('<br />')
                transcript.value = t || ' '
                let prompt = evt.results[evt.results.length - 1][0].transcript
                console.info("prompt: " + prompt)
                if (evt.results[evt.results.length - 1].isFinal && prompt.trim().toLowerCase().indexOf("asterisk") != 0) {

                    setPrompt(prompt)
                    askChatGPT()

                }

                scrollToEnd(transcriptRef.value)
            }
            sr.start()
        })

        return {transcript, transcriptRef, prompts }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
