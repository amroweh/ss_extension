import {AKAMAI_FAIL_MESSAGE, AKAMAI_SUCCESS_MESSAGE, AKAMAI_URL_PORT} from './constants.js'

let akamaiPurgeButton,
	akamaiPurgeButtonSpinner,
	akamaiPurgeMessage,
	akamaiPurgeMessageResult,
	akamaiPurgeMessageContent = null

;(() => {
	akamaiPurgeButton = document.querySelector('#akamai_purge_button')
	akamaiPurgeButtonSpinner = document.querySelector('#akamai_purge_button_spinner')
	akamaiPurgeMessage = document.querySelector('#akamai_purge_message')
	akamaiPurgeMessageResult = document.querySelector('#akamai_purge_message_result')
	akamaiPurgeMessageContent = document.querySelector('#akamai_purge_message_content')
	akamaiPurgeButton.addEventListener('click', () => {
		clearakamaiPurgeMessage()
		hideakamaiPurgeMessage()
		showSpinner()
		purgeCurrentUrl()
	})
})()

const purgeCurrentUrl = async () => {
	chrome.tabs.query({active: true, currentWindow: true}, async tabs => {
		const url = tabs[0].url
		let purgeResponse
		try {
			purgeResponse = await sendPurgeRequest(url)
            alert(purgeResponse)
		} catch (err) {
			return failFetch(err)
		}
		successFetch(purgeResponse)
	})
}

// DOM Functions
const showSpinner = () => akamaiPurgeButtonSpinner.classList.add('active')
const hideSpinner = () => akamaiPurgeButtonSpinner.classList.remove('active')
const clearakamaiPurgeMessage = () => (akamaiPurgeMessage.innerHtml = '')
const hideakamaiPurgeMessage = () => akamaiPurgeMessage.classList.add('hide')
const addAkamaiPurgeMessage = message => (akamaiPurgeMessageContent.innerHTML = message)
const addAkamaiPurgeMessageResult = result => (akamaiPurgeMessageResult.innerHTML = result)

// API Call
const sendPurgeRequest = async url => {
	alert(url)
    const res = await fetch(`127.0.0.1:${AKAMAI_URL_PORT}/akamaipurge`, {
		method: 'POST',
		cache: 'no-cache',
		body: url
	})
    alert(res)
	if (!res.ok) throw new Error(`Error sending request to server: ${res.status}\n${res.text()}`)
	return res.text()
}

// Utility
const failFetch = message => {
	addAkamaiPurgeMessageResult(AKAMAI_FAIL_MESSAGE)
	addAkamaiPurgeMessage(message)
	akamaiPurgeMessage.classList.remove('hide', 'success')
	akamaiPurgeMessage.classList.add('fail')
	hideSpinner()
}

const successFetch = message => {
	addAkamaiPurgeMessageResult(AKAMAI_SUCCESS_MESSAGE)
	addAkamaiPurgeMessage(message)
	akamaiPurgeMessage.classList.remove('hide', 'fail')
	akamaiPurgeMessage.classList.add('success')
	hideSpinner()
}
