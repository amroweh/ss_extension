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
	// cache buster exists and is not at the start
	const cbIndexA = url.indexOf('&cb')
	if (cbIndexA > -1) {
		const indexOfLastDigit = getIndexOfLastDigitInCacheBuster(url, cbIndexA)
		const urlPre = url.slice(0, cbIndexA)
		const urlPost = url.slice(indexOfLastDigit)
		const finalUrl = appendToUrl(removeTrailingSlash(urlPre), '&') + urlPost
		return finalUrl
	}
	// cache buster exists and is at the start
	const cbIndexQ = url.indexOf('?cb')
	if (cbIndexQ > -1) return appendToUrl(removeTrailingSlash(url.slice(0, cbIndexQ)), '?')
	// cache buster doesn't exist and there are query params
	const indexQ = url.indexOf('?')
	if (indexQ > -1) return appendToUrl(removeTrailingSlash(url), '&')
	// cache buster doesn't exist and there are no query params
	return appendToUrl(removeTrailingSlash(url), '?')
}

const appendToUrl = (url, tag) => url + tag + 'cb=' + Date.now()
const getIndexOfLastDigitInCacheBuster = (url, cbIndex) => {
	let i = cbIndex + 4
	while (url[i] !== undefined && url[i] !== null && url[i] < 10) i++
	return i
}
