import {JIRA_TICKET_TEMPLATE_TASK, JIRA_TICKET_TEMPLATE_BUG} from '../jira_injector/templates.js'

import {SHAK_DECACHE_MATCHES, SHAK_FAIL_MESSAGE, SHAK_SUCCESS_MESSAGE, SHAK_URL} from './constants.js'

let shakDecacheButton,
	shakDecacheButtonSpinner,
	shakDecacheMessage,
	shakDecacheMessageResult,
	shakDecacheMessageContent,
	jiraInjectionBugButton,
	jiraInjectionTaskButton = null

export default () => {
	document.addEventListener('DOMContentLoaded', function () {
		shakDecacheButton = document.querySelector('#shak_decache_button')
		shakDecacheButtonSpinner = document.querySelector('#shak_decache_button_spinner')
		shakDecacheMessage = document.querySelector('#shak_decache_message')
		shakDecacheMessageResult = document.querySelector('#shak_decache_message_result')
		shakDecacheMessageContent = document.querySelector('#shak_decache_message_content')
		jiraInjectionBugButton = document.querySelector('#jira_injection_bug')
		jiraInjectionTaskButton = document.querySelector('#jira_injection_task')

		shakDecacheButton.addEventListener('click', () => {
			clearShakDecacheMessage()
			hideShakDecacheMessage()
			showSpinner()
			decacheCurrentURL()
		})


	})
}

const decacheCurrentURL = async () => {
	chrome.tabs.query({active: true, currentWindow: true}, async tabs => {
		const url = tabs[0].url
		const urlMatch = matchPath(getURLParts(url).pathname)
		// CASE 1: Couldn't find a match
		if (!urlMatch) failFetch('No Match for this URL Path')
		// CASE 2: Found a match and initiating decache request
		let res = null
		try {
			res = await fetch(SHAK_URL + urlMatch, {
				headers: {
					Accept: 'application/json'
				}
			})
		} catch (e) {
			// CASE 3: Decache request had an issue (could be because of unconnected VPN)
			return failFetch('Unable to fetch from SHAK. Are you connected to the VPN?')
		}
		const response = await res.json()
		// CASE 4: Request sent to SHAK but issue on the server side
		if (response.message) {
			return failFetch(response.message)
		}
		// CASE 5: Success :)
		else successFetch(response['@text'])
	})
}

// DOM Functions
const showSpinner = () => shakDecacheButtonSpinner.classList.add('active')
const hideSpinner = () => shakDecacheButtonSpinner.classList.remove('active')
const clearShakDecacheMessage = () => (shakDecacheMessage.innerHtml = '')
const hideShakDecacheMessage = () => shakDecacheMessage.classList.add('hide')
const addShakDecacheMessage = message => (shakDecacheMessageContent.innerHTML = message)
const addShakDecacheMessageResult = result => (shakDecacheMessageResult.innerHTML = result)

// Utility Functions
const getURLParts = url => {
	const myURL = new URL(url)
	return {
		origin: myURL.origin,
		hostname: myURL.hostname,
		port: myURL.port,
		pathname: myURL.pathname,
		href: myURL.href
	}
}

const failFetch = message => {
	addShakDecacheMessageResult(SHAK_FAIL_MESSAGE)
	addShakDecacheMessage(message)
	shakDecacheMessage.classList.remove('hide', 'success')
	shakDecacheMessage.classList.add('fail')
	hideSpinner()
}

const successFetch = message => {
	addShakDecacheMessageResult(SHAK_SUCCESS_MESSAGE)
	addShakDecacheMessage(message)
	shakDecacheMessage.classList.remove('hide', 'fail')
	shakDecacheMessage.classList.add('success')
	hideSpinner()
}

const matchPath = pathname => SHAK_DECACHE_MATCHES.find(entry => entry.url === pathname)?.match
