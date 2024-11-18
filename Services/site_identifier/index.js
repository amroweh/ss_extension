const generatePopup = (isHexa, isOrigin, environment) => {
	const container = document.createElement('span')
	container.style.display = 'flex'
	container.style.flexDirection = 'column'
	container.style.zIndex = 1000000
	container.style.position = 'fixed'
	container.style.top = 0
	container.style.right = 0
	container.style.textAlign = 'center'
	container.classList.add('sky_toolbox_popup')
	const version = document.createElement('span')
	version.textContent = isHexa ? 'HEXA' : 'LEGACY'
	version.style.backgroundColor = isHexa ? 'blue' : 'purple'
	version.style.color = 'white'
	version.style.fontWeight = 'bold'
	version.style.padding = '6px 15px'
	container.appendChild(version)
	const origin = document.createElement('span')
	origin.textContent = isOrigin ? 'origin' : 'vanity'
	origin.style.backgroundColor = isOrigin ? 'green' : 'grey'
	origin.style.color = 'white'
	origin.style.fontWeight = 'bold'
	origin.style.padding = '2px 15px'
	container.appendChild(origin)
	const env = document.createElement('span')
	env.textContent = environment
	if(environment === "PROD") env.style.backgroundColor = "blue"
	else if(environment === "STAGE") env.style.backgroundColor = "purple"
	else env.style.backgroundColor = "pink"
	env.style.color = 'white'
	env.style.padding = '2px 15px'
	container.appendChild(env)
	return container
}

const readablePages = {
	// UAT
	"uat-1.skysports.com": {"env": "UAT", "isOrigin": false, "isHEXA": document.querySelector('html').classList.contains('is-modern') || window.location.pathname.includes('/amp/')},
	"uat-2.skysports.com": {"env": "UAT", "isOrigin": false, "isHEXA": document.querySelector('html').classList.contains('is-modern') || window.location.pathname.includes('/amp/')},
	"uat-3.skysports.com": {"env": "UAT", "isOrigin": false, "isHEXA": document.querySelector('html').classList.contains('is-modern') || window.location.pathname.includes('/amp/')},
	"uat-4.skysports.com": {"env": "UAT", "isOrigin": false, "isHEXA": document.querySelector('html').classList.contains('is-modern') || window.location.pathname.includes('/amp/')},
	"uat-5.skysports.com": {"env": "UAT", "isOrigin": false, "isHEXA": document.querySelector('html').classList.contains('is-modern') || window.location.pathname.includes('/amp/')},
	"uat-6.skysports.com": {"env": "UAT", "isOrigin": false, "isHEXA": document.querySelector('html').classList.contains('is-modern') || window.location.pathname.includes('/amp/')},
	"uat-7.skysports.com": {"env": "UAT", "isOrigin": false, "isHEXA": document.querySelector('html').classList.contains('is-modern') || window.location.pathname.includes('/amp/')},
	"uat-8.skysports.com": {"env": "UAT", "isOrigin": false, "isHEXA": document.querySelector('html').classList.contains('is-modern') || window.location.pathname.includes('/amp/')},
	"uat-9.skysports.com": {"env": "UAT", "isOrigin": false, "isHEXA": document.querySelector('html').classList.contains('is-modern') || window.location.pathname.includes('/amp/')},
	"uk-sport-web-1.uat": {"env": "UAT", "isOrigin": true, "isHEXA": true},
	"uk-sport-web-2.uat": {"env": "UAT", "isOrigin": true, "isHEXA": true},
	"uk-sport-web-3.uat": {"env": "UAT", "isOrigin": true, "isHEXA": true},
	"uk-sport-web-4.uat": {"env": "UAT", "isOrigin": true, "isHEXA": true},
	"uk-sport-web-5.uat": {"env": "UAT", "isOrigin": true, "isHEXA": true},
	"uk-sport-web-6.uat": {"env": "UAT", "isOrigin": true, "isHEXA": true},
	"uk-sport-web-7.uat": {"env": "UAT", "isOrigin": true, "isHEXA": true},
	"uk-sport-web-8.uat": {"env": "UAT", "isOrigin": true, "isHEXA": true},
	"uk-sport-web-9.uat": {"env": "UAT", "isOrigin": true, "isHEXA": true},
	"skysports-1.uat": {"env": "UAT", "isOrigin": true, "isHEXA": false},
	"skysports-2.uat": {"env": "UAT", "isOrigin": true, "isHEXA": false},
	"skysports-3.uat": {"env": "UAT", "isOrigin": true, "isHEXA": false},
	"skysports-4.uat": {"env": "UAT", "isOrigin": true, "isHEXA": false},
	"skysports-5.uat": {"env": "UAT", "isOrigin": true, "isHEXA": false},
	"skysports-6.uat": {"env": "UAT", "isOrigin": true, "isHEXA": false},
	"skysports-7.uat": {"env": "UAT", "isOrigin": true, "isHEXA": false},
	"skysports-8.uat": {"env": "UAT", "isOrigin": true, "isHEXA": false},
	"skysports-9.uat": {"env": "UAT", "isOrigin": true, "isHEXA": false},
	// Stage
	"stage.skysports.com": {"env": "STAGE", "isOrigin": false, "isHEXA": document.querySelector('html').classList.contains('is-modern') || window.location.pathname.includes('/amp/')},
	"uk-sport-web-1.stage": {"env": "STAGE", "isOrigin": true, "isHEXA": true},
	"uk-sport-web-2.stage": {"env": "STAGE", "isOrigin": true, "isHEXA": true},
	"uk-sport-web-3.stage": {"env": "STAGE", "isOrigin": true, "isHEXA": true},
	"uk-sport-web-4.stage": {"env": "STAGE", "isOrigin": true, "isHEXA": true},
	"skysports-1.stage": {"env": "STAGE", "isOrigin": true, "isHEXA": false},
	"skysports-2.stage": {"env": "STAGE", "isOrigin": true, "isHEXA": false},
	"skysports-3.stage": {"env": "STAGE", "isOrigin": true, "isHEXA": false},
	"skysports-4.stage": {"env": "STAGE", "isOrigin": true, "isHEXA": false},
	// Live
	"skysports.com": {"env": "PROD", "isOrigin": false, "isHEXA": document.querySelector('html').classList.contains('is-modern') || window.location.pathname.includes('/amp/')},
	"uk-sport-web.prod-a": {"env": "PROD", "isOrigin": true, "isHEXA": true},
	"uk-sport-web.prod-b": {"env": "PROD", "isOrigin": true, "isHEXA": true},
	"skysports.prod-a": {"env": "PROD", "isOrigin": true, "isHEXA": false},
	"skysports.prod-b": {"env": "PROD", "isOrigin": true, "isHEXA": false},
}

chrome.storage.sync.get({siteIdentifier: true}, options => {
	if(!options.siteIdentifier) return
	for(const pageName in readablePages){
		if(window.location.host.includes(pageName)) {
			console.log("Includes!");document.querySelector('body').append(generatePopup(readablePages[pageName]['isHEXA'], readablePages[pageName]['isOrigin'], readablePages[pageName]['env']))
			return
		}
	}
})
