let jiraInjectionBugButton = document.querySelector('#jira_injection_bug')
let jiraInjectionTaskButton = document.querySelector('#jira_injection_task')

jiraInjectionBugButton.addEventListener('click', async () =>
	callContentScript({
		action: 'JIRA_TEMPLATE',
		jiraTemplateType: 'BUG',
		jiraTemplateContentId: apiIdMapper('BUG')
	})
)
jiraInjectionTaskButton.addEventListener('click', async () =>
	callContentScript({
		action: 'JIRA_TEMPLATE',
		jiraTemplateType: 'TASK',
		jiraTemplateContentId: apiIdMapper('TASK')
	})
)

const callContentScript = async ({action, jiraTemplateType, jiraTemplateContentId}) => {
	console.log({action, jiraTemplateType, jiraTemplateContentId})
	const [tab] = await chrome.tabs.query({active: true, currentWindow: true})
	const response = await chrome.tabs.sendMessage(tab.id, {
		action,
		jiraTemplateType,
		jiraTemplateContentId
	})
	// You can do something with the response here...
	console.log(response)
}

const apiIdMapper = id => {
	if(id==='STORY') return "6958332"
	if(id==='TASK') return "739058"
	if(id==='SPIKE') return "695834"
	if(id==='BUG') return "695835"
	if(id==='MAINTENANCE') return "854392"
	if(id==='EPIC') return "1368423"
}