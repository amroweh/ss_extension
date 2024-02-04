import {JIRA_TICKET_TEMPLATE_BUG, JIRA_TICKET_TEMPLATE_TASK} from './templates.js'

let jiraInjectionBugButton = document.querySelector('#jira_injection_bug')
let jiraInjectionTaskButton = document.querySelector('#jira_injection_task')
console.log(jiraInjectionBugButton)

jiraInjectionBugButton.addEventListener('click', async () =>
	callContentScript({
		action: 'JIRA_TEMPLATE',
		jiraTemplateType: 'BUG',
		jiraTemplateContent: JIRA_TICKET_TEMPLATE_BUG
	})
)
jiraInjectionTaskButton.addEventListener('click', async () =>
	callContentScript({
		action: 'JIRA_TEMPLATE',
		jiraTemplateType: 'TASK',
		jiraTemplateContent: JIRA_TICKET_TEMPLATE_TASK
	})
)

const callContentScript = async ({action, jiraTemplateType, jiraTemplateContent}) => {
	console.log({action, jiraTemplateType, jiraTemplateContent})
	const [tab] = await chrome.tabs.query({active: true, currentWindow: true})
	const response = await chrome.tabs.sendMessage(tab.id, {
		action,
		jiraTemplateType,
		jiraTemplateContent
	})
	// You can do something with the response here...
	console.log(response)
}
