import {JIRA_TICKET_TEMPLATE_BUG, JIRA_TICKET_TEMPLATE_EPIC, JIRA_TICKET_TEMPLATE_MAINTENANCE, JIRA_TICKET_TEMPLATE_SPIKE, JIRA_TICKET_TEMPLATE_TASK, JIRA_TICKET_TEMPLATE_USER_STORY} from './templates.js'

let jiraInjectionBugButton = document.querySelector('#jira_injection_bug')
let jiraInjectionTaskButton = document.querySelector('#jira_injection_task')
let jiraInjectionSpikeButton = document.querySelector('#jira_injection_spike')
let jiraInjectionStoryButton = document.querySelector('#jira_injection_story')
let jiraInjectionEpicButton = document.querySelector('#jira_injection_epic')
let jiraInjectionMaintenanceButton = document.querySelector('#jira_injection_maintenance')

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
jiraInjectionSpikeButton.addEventListener('click', async () =>
	callContentScript({
		action: 'JIRA_TEMPLATE',
		jiraTemplateType: 'SPIKE',
		jiraTemplateContent: JIRA_TICKET_TEMPLATE_SPIKE
	})
)
jiraInjectionStoryButton.addEventListener('click', async () =>
	callContentScript({
		action: 'JIRA_TEMPLATE',
		jiraTemplateType: 'STORY',
		jiraTemplateContent: JIRA_TICKET_TEMPLATE_USER_STORY
	})
)
jiraInjectionEpicButton.addEventListener('click', async () =>
	callContentScript({
		action: 'JIRA_TEMPLATE',
		jiraTemplateType: 'EPIC',
		jiraTemplateContent: JIRA_TICKET_TEMPLATE_EPIC
	})
)
jiraInjectionMaintenanceButton.addEventListener('click', async () =>
	callContentScript({
		action: 'JIRA_TEMPLATE',
		jiraTemplateType: 'MAINTENANCE',
		jiraTemplateContent: JIRA_TICKET_TEMPLATE_MAINTENANCE
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
