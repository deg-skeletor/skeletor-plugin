# Skeletor Sample Plugin
The purpose of this sample plugin is to provide a starting point for developing your own custom Skeletor plugin that will, one marvelous day, exist within the Skeletor build tools ecosystem. 
This is a functioning plugin that can be installed as-is to a Skeletor-equipped project (although it doesn't do anything useful). 
To learn more about Skeletor, [go here](https://github.com/deg-skeletor/skeletor-core).
## Getting Started
After you have cloned this repository, run `npm install` in a terminal to install some necessary tools, including a testing framework (Jest) and a linter (ESLint). 
## Source Code
The primary source code for this sample plugin is located in the `index.js` file, which contains an example implementation of the [Skeletor plugin API](#Skeletor-Plugin-API). This file is where you will begin writing your own plugin code.
## Running Tests
This sample plugin is pre-configured with the [Jest testing framework](https://facebook.github.io/jest/) and an example test. 
From a terminal, run `npm test`. You should see one test pass and feel pleased.
Test code can be found in the `index.test.js` file. You are highly encouraged to add tests to this file as you develop your plugin. Well-tested Skeletor plugins are what keep the Skeletor family humming along.
## Skeletor Plugin API
For a Skeletor plugin to function within the Skeletor ecosystem, it must expose a simple API that the Skeletor task runner will interact with. This sample plugin contains a basic implementation of the API, which you can find in the `index.js` file.
The method signatures of the API are as follows:
### run(config)
The `run()` method executes a plugin's primary task, whatever that task may be. It is the primary way (and, currently, the *only* way) that the Skeletor task runner interacts with a plugin.
#### Parameters
**config**
Type: `Object`
The `config` parameter is an object that contains configuration information specific to your plugin. The shape and content of this configuration object are based on the needs of your plugin and defined by you, the plugin maker.
#### Return Value
A Promise that resolves to a [Status object](#The-Status-Object).
### The Status Object
The Status object is a simple Javascript `Object` for storing the current status of your plugin. The structure of this object is as follows:
#### Properties
**status**
Type: `String`
Possible Values: `'complete'`, `'error'`
Contains the status of the plugin. If the plugin has completed successfully, the `'complete'` value should be used. If an error was encountered during plugin execution, the `'error'` value should be used.
**message**
Type: `String`
Contains any additional information regarding the status of the plugin. If the plugin executed successfully, this property could include information about what the plugin accomplished. If the plugin encountered an error, this property could include error details. 