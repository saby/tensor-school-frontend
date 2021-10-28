# Sources
# Breakpoints
# Overrides
You might have been in this situation before: you just want to experiment with a few changes, but might be quite afraid to accidentally hit “Refresh” in the browser to lose all the changes made on the page. Perhaps you can’t really run the site locally, or perhaps you just don’t want to run your entire build for some minor local modifications. In such cases, Chrome’s “Local Overrides” can be a godsend.

Once you’ve defined your local overrides, Chrome will intercept network requests and use your code instead of the actual response. It will also watch out for modifications made to the file and inject changes into the page automatically, very much as if you had a local development installed with the watch mode on. Any files that are overwritten by local overrides will have a little purple dot next to them in the “Elements” panel.

The best part: now you can open the file in your text editor and make changes from there, while seeing these changes appearing in DevTools as well — and if you need to switch to DevTools to add breakpoints, you can do it from DevTools, make changes to the code, and these changes will be visible in your text editor as well. Almost magic!

# Snippets
In general, if you find yourself running a routine task over and over again, there is a good chance that you might want to place it in “Code Snippets” and automate this task with a script.    
DevTools Snippets includes some useful scripts for cache busting, showing headers and saving objects as .json files from the console, but you could use it to modify the DOM or display any useful information, such as performance marks (which is what we do).    
Plus, you could also plug in a performance diagnostics CSS to indicate lazy-loaded images, unsized images or synchronous scripts.


