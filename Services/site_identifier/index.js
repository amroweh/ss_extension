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

chrome.storage.sync.get({siteIdentifier: true}, options => {
	if (options.siteIdentifier && window.location.host.includes('skysports.com')) {
		const isHexa = document.querySelector('html').classList.contains('is-modern') || window.location.pathname.includes('/amp/')
		document.querySelector('body').append(generatePopup(isHexa))
	}
})
