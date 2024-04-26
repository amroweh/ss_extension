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
		const bustedUrl = generateNewUrl(previousUrl)
		chrome.tabs.update({url: bustedUrl})
	})
}

// Utility Functions
const removeTrailingSlash = url => (url.endsWith('/') ? url.slice(0, -1) : url)
const generateNewUrl = url => {
	const cbIndexH = url.indexOf('&cb')
	if (cbIndexH > -1) {
		return appendToUrl(removeTrailingSlash(url.slice(0, cbIndexH)), '&')
	}
	const cbIndexQ = url.indexOf('?cb')
	if (cbIndexQ > -1) {
		return appendToUrl(removeTrailingSlash(url.slice(0, cbIndexQ)), '?')
	}
	const indexQ = url.indexOf('?')
	if (indexQ > -1) {
		return appendToUrl(removeTrailingSlash(url), '&')
	}
	return appendToUrl(removeTrailingSlash(url), '?')
}
const appendToUrl = (url, tag) => url + tag + 'cb=' + Date.now()