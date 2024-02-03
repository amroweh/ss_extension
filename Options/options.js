// Saves options to chrome.storage
const saveOptions = () => {
	const siteIdentifier = document.getElementById('site_identifier').checked

	chrome.storage.sync.set({siteIdentifier: siteIdentifier}, () => {
		// Update status to let user know options were saved.
		const status = document.getElementById('status')
		status.textContent = 'Options saved.'
		setTimeout(() => {
			status.textContent = ''
		}, 1500)
	})
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
	chrome.storage.sync.get({siteIdentifier: true}, items => {
		document.getElementById('site_identifier').checked = items.siteIdentifier
	})
}

document.addEventListener('DOMContentLoaded', restoreOptions)
document.getElementById('save').addEventListener('click', saveOptions)
