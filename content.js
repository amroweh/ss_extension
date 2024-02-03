import jira_injector from './Services/jira_injector/main.js'
import shak_decacher from './Services/shak_decacher/main.js'
import site_identifier from './Services/site_identifier/main.js'

console.log('Content script has been loaded. This will run the your services defined in the "Services" folder')

document.addEventListener('DOMContentLoaded', function () {
	console.log('hello from content script...')
	// Services
	site_identifier()
	shak_decacher()
	jira_injector()
})
