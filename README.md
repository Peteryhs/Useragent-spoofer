# User Agent Spoof Extension

This browser extension spoofs the User Agent string for all websites except those added to a whitelist. This can help with privacy by making your browser more difficult to fingerprint, and also circumvent certain restrictions.

## Installation

### Firefox

1. Open Firefox and navigate to `about:debugging`.
2. Click on "This Firefox".
3. Click on "Load Temporary Add-on”.
4. Navigate to the extension's directory and select any file (e.g., `manifest.json`). This will load the entire extension.
5. Click on the extension's name to open its detail page.
6. Click on the "Options" button to open the options page and add websites to the whitelist.

**Note:** Firefox will unload the extension when it restarts. To load the extension permanently, it must be self-signed or signed by Mozilla.

### Chrome

1. Open Chrome and navigate to `chrome://extensions`.
2. Enable Developer Mode by clicking the toggle switch at the top right.
3. Click the "Load unpacked" button and select the extension's directory. This will load the entire extension.
4. Click on the extension's icon in the toolbar to open the options page and add websites to the whitelist.

## Disclaimer

This extension is provided as-is, with no guarantees. Use it at your own risk. Always respect user privacy and be aware of the potential effects of altering the User Agent string. 
