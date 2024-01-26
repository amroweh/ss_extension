console.log('CONTENT SCRIPT LOADED!!!')
console.log(document.querySelector('html').classList)
const generatePopup = isHexa => {
	const popup = document.createElement('span')
	popup.classList.add('sky_toolbox_popup')
	popup.textContent = isHexa ? 'HEXA' : 'LEGACY'
	popup.style.backgroundColor = isHexa ? 'blue' : 'purple'
	popup.style.color = 'white'
	popup.style.fontWeight = 'bold'
	popup.style.padding = '10px 15px'
	popup.style.position = 'fixed'
	popup.style.zIndex = 1000000
	popup.style.top = 0
	popup.style.right = 0
	return popup
}

const addPopup = () => {
	if (window.location.host !== 'www.skysports.com') return
	document.querySelector('body').append(generatePopup(document.querySelector('html').classList.contains('is-modern')))
}
addPopup()

const injectIntoTicket = content => {
	const ticketBody = document
		.getElementsByClassName('tox-edit-area__iframe')[0]
		.contentWindow.document.querySelector('body#tinymce.mce-content-body')
	if (!ticketBody) throw new Error("Couldn't find the ticket description. Are you sure you've clicked into it?")
	else ticketBody.innerHTML = content
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	console.log(sender.tab ? 'from a content script:' + sender.tab.url : 'from the extension')
	if (request.action === 'JIRA_TEMPLATE') {
		injectIntoTicket(request.jiraTemplateContent)
		sendResponse('Received JIRA TEMPLATE signal from background!')
	}
})
