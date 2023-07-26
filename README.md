# Redirect-New-Tab

This is a minimal Chrome extension for MS Edge. MS Edge does not give you a built in option to redirect a new tab to a specified url. Therefor this extension was made to add this functionality to MS Edge. 

*Call it a quick fix for a small inconvenience.*

**Don't be afraid by the JavaScript**, it's only ***12*** lines of code.

## How to install

- Download this repository as zip
- Unpack it somewhere you will remember it
- Go to `edge://extensions/`
- Enable "Developer mode"
- Click "Load unpacked" and select the `RedirectNewTab` folder.
- **Thats it!**

## Q&A

**Q: Why can't I install it from the extensions webstore?**

**A:** I currently don't care enough about this project to further improve and publish it. Doing it this way allows you to modify the code however you want locally.

**Q: How do I redirect to somewhere else than my favorites?**

**A:** Replace `edge://favorites` in `redirect.js` to any url you want.

**Q: How does this extension work?**

**A:** The manifest file tells chrome to load a specified HTML file as the new tab, this HTML file loads the JavaScript file which overwrites the current tab to the specified address.
