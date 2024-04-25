let cacheBusterButton, cacheBusterButtonSpinner
;(() => {
	cacheBusterButton = document.querySelector('#cache_buster_button')
	cacheBusterButton.addEventListener('click', () => {
		decacheCurrentURL()
	})
})()

const decacheCurrentURL = async () => {
	chrome.tabs.query({active: true, currentWindow: true}, async tabs => {
		const previousUrl = tabs[0].url
		const bustedUrl = appendToUrl(removeTrailingSlash(removeExistingCacheBuster(previousUrl)))
		chrome.tabs.update({url: bustedUrl})
	})
}

// Utility Functions
const removeExistingCacheBuster = url => {
	const cbIndex = url.indexOf('?cb')
	if (cbIndex > -1) return url.slice(0, cbIndex)
	return url
}
const removeTrailingSlash = url => (url.endsWith('/') ? url.slice(0, -1) : url)
const appendToUrl = url => url + '?cb=' + Date.now()
