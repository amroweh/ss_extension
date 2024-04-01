export const JIRA_TICKET_TEMPLATE_USER_STORY = `
<h2>Story & Background</h2>
<p>As A <br>I want<br>So that</p>
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

export const JIRA_TICKET_TEMPLATE_MAINTENANCE = `
<h2>Story and Background</h2><p><strong><em>As a HEXA User...</em></strong><br>I want to have dependencies updated...<br>So that the web apps have the latest versions and prevent tickets from being blocked</p><h2>Description</h2><p>Update the following sections to the latest Minor|Major versions</p><ul><li>PHP Packages</li><li>UI Components</li></ul><h2>Dependencies</h2><p>&lt;List any dependencies external to the squad to get this ticket to done&gt;</p><h2>Acceptance Criteria</h2><ul><li>Versions updated to the lastest Minor|Major</li><li>Regression packs pass 100%</li></ul><h2>Dev Tasks</h2><h3>PHP Packages:</h3><ul><li><span style="color: #FF0000;">composer outdated --direct --locked --minor-only</span>&nbsp;show the outed composer versions</li><li>Update composer.json &amp; regenerate lock file</li><li>Run tests (phpunit &amp; regression pack)</li></ul><h3>UI Components:</h3><ul><li>Run <tt>npm outdated</tt>&nbsp;to list outdated npm packages</li><li>Run <tt>npm update</tt> to update all npm packages</li><li>Run tests (phpunit &amp; regression pack)</li><li>List all updated components below (for QA awareness), and check for visual differences across screen sizes before passing to review</li></ul><h2>QA Tasks</h2><p>&lt;A bullet pointed list of QA tasks required for the quality assurance that this work meets the definition of done including any automation tests required here&gt; consider using <img class="emoticon" src="https://agile.at.sky/images/icons/emoticons/error.png" height="16" width="16" align="absmiddle" alt="" border="0" data-mce-src="https://agile.at.sky/images/icons/emoticons/error.png"> &amp; <img class="emoticon" src="https://agile.at.sky/images/icons/emoticons/check.png" height="16" width="16" align="absmiddle" alt="" border="0" data-mce-src="https://agile.at.sky/images/icons/emoticons/check.png"></p><p>Once npm update has been run, list the updated UI components here. This will help with QA:</p><ul><li><br></li></ul><h2>Notes</h2><p>&lt;A bullet pointed list of any notes, questions or assumptions about the work here&gt;</p>`

export const JIRA_TICKET_TEMPLATE_EPIC = `<h2>Requested By</h2><h2>Target Date</h2><p><br></p><h2>Target Date Rationale</h2><p><em>&lt;Is there a legal / compliance deadline? Is this event driven? Is this purely aspirational?&gt;</em></p><h2>Product &amp; Territory Scope</h2><div class="table-wrap"><table class="confluenceTable"><tbody><tr><th class="confluenceTh">Territory</th><td class="confluenceTd"><strong>Web</strong></td><td class="confluenceTd"><strong>Global App</strong></td><td class="confluenceTd"><strong>Vanguard</strong></td><td class="confluenceTd"><strong>Other</strong></td></tr><tr><th class="confluenceTh">All</th><td class="confluenceTd"><br></td><td class="confluenceTd"><br></td><td class="confluenceTd"><br></td><td class="confluenceTd"><br></td></tr><tr><th class="confluenceTh">UK</th><td class="confluenceTd"><br></td><td class="confluenceTd"><br></td><td class="confluenceTd"><br></td><td class="confluenceTd"><br></td></tr><tr><th class="confluenceTh">DE</th><td class="confluenceTd"><br></td><td class="confluenceTd"><br></td><td class="confluenceTd"><br></td><td class="confluenceTd"><br></td></tr><tr><th class="confluenceTh">ITA</th><td class="confluenceTd"><br></td><td class="confluenceTd"><br></td><td class="confluenceTd"><br></td><td class="confluenceTd"><br></td></tr></tbody></table></div><p><img class="emoticon" src="https://agile.at.sky/images/icons/emoticons/check.png" height="16" width="16" align="absmiddle" alt="" border="0" data-mce-src="https://agile.at.sky/images/icons/emoticons/check.png">&nbsp;</p><h2>Summary</h2><p><em>&lt;Include the Problem statement / opportunity and any background/context of the request&gt;</em></p><h2>Success Metrics</h2><p><em>&lt;How will we measure whether this work achieved what we hoped?&gt;</em></p><p><strong>What if we don’t do this?</strong></p><p><em>&lt;What would be the consequences if we didn't do this work?&gt;</em></p><h2>Pre-Reqs</h2><div class="table-wrap"><table class="confluenceTable"><tbody><tr><td class="confluenceTd"><strong>Type</strong></td><td class="confluenceTd"><strong>Responsible</strong>&nbsp;</td><td class="confluenceTd"><strong>Passed or N/A</strong></td></tr><tr><td class="confluenceTd">iComply</td><td class="confluenceTd">Product Lead</td><td class="confluenceTd"><br></td></tr><tr><td class="confluenceTd">Central Record of Processing (CRoP)</td><td class="confluenceTd">Product Lead</td><td class="confluenceTd"><br></td></tr><tr><td class="confluenceTd">3rd Party Integration Assessment</td><td class="confluenceTd">Analyst</td><td class="confluenceTd"><br></td></tr></tbody></table></div><h2>High Level Requirements</h2><div class="table-wrap"><table class="confluenceTable"><tbody><tr><th class="confluenceTh">ID</th><td class="confluenceTd"><strong>Area</strong></td><td class="confluenceTd"><strong>User Story</strong></td><td class="confluenceTd"><strong>Acceptance Criteria</strong></td><td class="confluenceTd"><strong>MoSCoW</strong></td><td class="confluenceTd"><strong>Size</strong></td></tr><tr><th class="confluenceTh"><br></th><td class="confluenceTd"><br></td><td class="confluenceTd"><br></td><td class="confluenceTd"><br></td><td class="confluenceTd"><br></td><td class="confluenceTd"><br></td></tr><tr><th class="confluenceTh"><br></th><td class="confluenceTd"><br></td><td class="confluenceTd"><br></td><td class="confluenceTd"><br></td><td class="confluenceTd"><br></td><td class="confluenceTd"><br></td></tr></tbody></table></div><p>Ensure Consent Management, Analytics and Accessibility are considered.</p><h2>Out of Scope</h2><p><em>&lt;Anything specifically worth calling out of scope&gt;</em></p><h2>Assumptions, Dependencies &amp; Risks</h2><div class="table-wrap"><table class="confluenceTable"><tbody><tr><th class="confluenceTh">ID</th><td class="confluenceTd"><strong>Type</strong></td><td class="confluenceTd"><strong>Description</strong></td><td class="confluenceTd"><strong>Comments</strong></td></tr><tr><th class="confluenceTh"><br></th><td class="confluenceTd"><br></td><td class="confluenceTd"><br></td><td class="confluenceTd"><br></td></tr><tr><th class="confluenceTh"><br></th><td class="confluenceTd"><br></td><td class="confluenceTd"><br></td><td class="confluenceTd"><br></td></tr></tbody></table></div><p><br></p><h2>Outstanding Questions</h2><div class="table-wrap"><table class="confluenceTable"><tbody><tr><th class="confluenceTh">ID</th><td class="confluenceTd"><strong>Question</strong></td><td class="confluenceTd"><strong>Raised By</strong></td><td class="confluenceTd"><strong>Owner</strong></td></tr><tr><th class="confluenceTh"><br></th><td class="confluenceTd"><br></td><td class="confluenceTd"><br></td><td class="confluenceTd"><br></td></tr><tr><th class="confluenceTh"><br></th><td class="confluenceTd"><br></td><td class="confluenceTd"><br></td><td class="confluenceTd"><br></td></tr></tbody></table></div><h2>Design</h2><p><em>&lt;Figma Links&gt;</em></p><h2>Solution</h2><p><em>&lt;Solution Doc Link&gt;</em></p><h2>Useful Links / Attachments</h2><p><em>&lt;Any other useful links&gt;</em></p><h2>Estimates</h2><div class="table-wrap"><table class="confluenceTable"><tbody><tr><td class="confluenceTd"><strong>T-Shirt</strong></td><td class="confluenceTd"><strong>Weeks</strong></td></tr><tr><td class="confluenceTd">XS</td><td class="confluenceTd">1&nbsp;</td></tr><tr><td class="confluenceTd">S&nbsp;</td><td class="confluenceTd">2</td></tr><tr><td class="confluenceTd">M</td><td class="confluenceTd">3-4</td></tr><tr><td class="confluenceTd">L</td><td class="confluenceTd">4-6</td></tr><tr><td class="confluenceTd">XL</td><td class="confluenceTd">6-8</td></tr><tr><td class="confluenceTd">XXL</td><td class="confluenceTd">8+ (prototypes, spikes required to narrow feature down)</td></tr></tbody></table></div>`
