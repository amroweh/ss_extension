import {callContentScript} from '../../background.js'
import {JIRA_TICKET_TEMPLATE_BUG, JIRA_TICKET_TEMPLATE_TASK} from './templates.js'
console.log('hello from jira injector')

const injectIntoTicket = content => {
	const ticketBody = document
		.getElementsByClassName('tox-edit-area__iframe')[0]
		.contentWindow.document.querySelector('body#tinymce.mce-content-body')
	if (!ticketBody) throw new Error("Couldn't find the ticket description. Are you sure you've clicked into it?")
	else ticketBody.innerHTML = content
}

;(() => {
	let jiraInjectionBugButton = document.querySelector('#jira_injection_bug')
	let jiraInjectionTaskButton = document.querySelector('#jira_injection_task')

	chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
		console.log(sender.tab ? 'from a content script:' + sender.tab.url : 'from the extension')
		if (request.action === 'JIRA_TEMPLATE') {
			injectIntoTicket(request.jiraTemplateContent)
			sendResponse('Received JIRA TEMPLATE signal from background!')
		}
	})

	jiraInjectionBugButton?.addEventListener('click', async () =>
		callContentScript({
			action: 'JIRA_TEMPLATE',
			jiraTemplateType: 'BUG',
			jiraTemplateContent: JIRA_TICKET_TEMPLATE_BUG
		})
	)
	jiraInjectionTaskButton?.addEventListener('click', async () =>
		callContentScript({
			action: 'JIRA_TEMPLATE',
			jiraTemplateType: 'TASK',
			jiraTemplateContent: JIRA_TICKET_TEMPLATE_TASK
		})
	)
})()
