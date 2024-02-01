import jira_injector from './Services/jira_injector/main'
import shak_decacher from './Services/shak_decacher/main'
import site_identifier from './Services/site_identifier/main'

console.log('Content script has been loaded. This will run the your services defined in the "Services" folder')

document.addEventListener('DOMContentLoaded', function () {
	// Services
	site_identifier()
	shak_decacher()
	jira_injector()
})
