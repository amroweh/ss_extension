const injectIntoTicket = content => {
	const ticketBody = document
		.getElementsByClassName('tox-edit-area__iframe')[0]
		.contentWindow.document.querySelector('body#tinymce.mce-content-body')
	if (!ticketBody) throw new Error("Couldn't find the ticket description. Are you sure you've clicked into it?")
	else ticketBody.innerHTML = content
}

;(() => {
	chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
		console.log(sender.tab ? 'from a content script:' + sender.tab.url : 'from the extension')
		if (request.action === 'JIRA_TEMPLATE') {
			injectIntoTicket(request.jiraTemplateContent)
			sendResponse('Received JIRA TEMPLATE signal from background!')
		}
	})
})()
