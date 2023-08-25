import { defineStore } from 'pinia'
import { ref } from 'vue'
import api from "../service/api"

export const useChatGPTStore = defineStore('chatGPT', () => {
    const prompt = ref('')
    const prompts = ref([])
    const responses = ref([])
    const response = ref('')
    const errorMessage = ref('')
  
    async function askChatGPT() {
        console.info("sending prompt to chatGPT: " + prompt.value)
        errorMessage.value = ''
        await api.post("/v1/chat/completions", {
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": prompt.value}]
        }).then(
            response => {
                response.value = response.choices
                    .map(choice => choice.message.content)
                response.value = `* ${response.value}`
                responses.value.push(response.value)
             },
            error => {
                console.error(error)
                errorMessage.value = `*: ${error.response.data.error.message}`
            }
        )
    }
    function setPrompt(p) {
        console.info("set prompt: " + p)
        prompt.value = p
        prompts.value.push(p)
    }
    return {prompt, prompts, response, responses, errorMessage, setPrompt, askChatGPT}
})
