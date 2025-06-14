const {Configuration ,OpenAIApi} = require('openai')
const Configuration = new Configuration({apikey: "         "})
const openai = new OpenAIApi(Configuration);

export async function sendMsgToOpenAI(message) {
    const res = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: message,
        temprature : 0.7,
        max_tokens: 256 ,
        

    })
}