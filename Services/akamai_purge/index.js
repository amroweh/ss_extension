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
		} catch (err) {
			return failFetch(err)
		}
		if (purgeResponse.includes('Error')) return failFetch(purgeResponse)
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
const sendPurgeRequest = async purgeUrl => {
	const apiUrl = `http://127.0.0.1:${AKAMAI_URL_PORT}/akamaipurge`
	let res
	try {
		res = await fetch(apiUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'text/plain'
			},
			body: purgeUrl
		})
	} catch (err) {
		throw new Error(`Couldn't send request. Are you sure the SS Toolbox app is running?\n${err}`)
	}
	if (!res.ok) throw new Error(`The server returned with an error : ${res.status}\n${await res.text()}`)
	return await res.text()
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
