export const JIRA_TICKET_TEMPLATE_TASK = `
<h2>Background</h2>
<p>I want<br>So that</p>
<h2>Description</h2>
<p>-brief description of problem here-</p>
<h2>Dependencies</h2>
<p>-List any dependencies external to the squad to get this ticket to done-</p>
<h2>Acceptance Criteria</h2>
<ul><li></li><li></li></ul>
<h2>Dev Tasks</h2>
<ul><li></li><li></li></ul>
<h2>QA Tasks</h2>
<ul><li></li><li></li></ul>
<h2>Notes</h2>
<ul><li></li><li></li></ul>
`

export const JIRA_TICKET_TEMPLATE_BUG = `
<h2>Description</h2>
<p>-brief summary of defect. If Incident, incident number should be listed-</p>
<h2>Dependencies</h2>
<p>-List any dependencies external to the squad to get this ticket to done-</p>
<h2>Steps to Recreate</h2>
<ul><li></li><li></li></ul>
<h2>Expected Result</h2>
<p>-what should have happened-</p>
<h2>Actual Result</h2>
<p>-what actually happened-</p>
<h2>Dev Tasks</h2>
<ul><li></li><li></li></ul>
<h2>Notes</h2>
<ul><li></li><li></li></ul>
`

export const JIRA_TICKET_TEMPLATE_SPIKE = `
<p>-prefix title with Spike and link User Story ticket where applicable-</p>
<h2>Background/Problem Statement</h2>
<p>-A brief description of the reason for the spike here-</p>
<p>In order to -achieve some goal-, -a person or system- needs to -some action-</p>
<h2>Dependencies</h2>
<p>-List any dependencies external to the squad to get this ticket to done-</p>
<h2>Tasks Required/Questions to Answer</h2>
<ul><li></li><li></li></ul>
<h2>Notes</h2>
<ul><li></li><li></li></ul>
<h2>Output</h2>
<ul><li></li><li></li></ul>
`
