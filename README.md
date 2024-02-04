# SKY Sports Extension

Sky Sports Extension (SS Ext) is a chrome extension that allows you to reduce the time you spend on dealing with repetitive tasks during your daily workflow. It adopts a modular approach where you can add different services when needed, reload the extension, and use them.

## Current Capabilities

Currently, SS Ext can do the following:
1. **JIRA Injector**: Injects a predefined template into a JIRA ticket description. For this to work, click on the desired ticket, click into the description input, click on the extension button that you desire.
2. **SHAK Decacher - _UNDER DEVELOPMENT_**: Click on the SHAK decacher button. This will determine which URL you are at, and using a predefined map of url -> decache url(s), will send a SHAK request to decache those urls
3. **Site Identifier**: When you're on Sky Sports live website, this will automatically know if you're on a HEXA or Legacy page and show it as a badge on the top right side of the screen

## Adding Your Own Service

To add your own new service, make sure to create a PR and then merge into main. In terms of folder structure, please follow the following rules:
1. Create a new folder in the '/Services' folder with the name of your service (please use a naming convention similar to the ones used previously i.e. my_example_service)
2. Add an 'index.js' file in that folder with your desired logic
3. In the '/manifest.json' file, add the path to your index file to the content_scripts js property:

```
"content_scripts": [
    {
        "js": ["Services/my_example_service/index.js"],
        ...
    }
]
```

Note: content scripts are scoped to the actual webpage you are on and NOT to the extension. In order to run your extension logic, add a script tag (preferably different to your index.js) to 'index.html'. You can also add logic to the '/background.js' file for anything that you require to keep running in the background.
