import { API_Config } from "../config";

export default async function sendCreditHistory(chatId) {
    let response = await fetch([API_Config.url, API_Config.endpoints.send_document, '?', 
        new URLSearchParams({
            chatId: chatId
        })].join(''));

        console.log(response);
    if (!response.ok)
    {
        console.log(`Server gave bad response while it processed to send credit history. Status - ${response.status}, 
        Error - ${response.statusText}`)
    }
    
    return await response.json();
}