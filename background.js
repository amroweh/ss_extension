console.log('hello from background...')

export const callContentScript = async ({action, jiraTemplateType, jiraTemplateContent}) => {
	console.log({action, jiraTemplateType})
	const [tab] = await chrome.tabs.query({active: true, currentWindow: true})
	const response = await chrome.tabs.sendMessage(tab.id, {
		action,
		jiraTemplateType,
        jiraTemplateContent
	})
	// You can do something with the response here...
	console.log(response)
}
