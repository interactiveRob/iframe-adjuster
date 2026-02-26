# iFrame Adjuster
A tiny no-config javascript plugin for resizing the height of iFrame elements when the iFrame's content changes size.

- handles multiple iframes per page
- handles iframes that reload (e.g. form submits)
<br><br>

This plugin will ALWAYS be free and open-source. It can be used for commercial projects with no restrictions.
<br><br>

## How to use:
**NPM package coming soon**

1. Add iFrame Adjuster to both the page and the iframe:  

    **Import from NPM**:  
    `import 'iframe-adjuster';` <br><br>
    
    **or load it from the CDN:**<br>
    ```<script type="text/javascript" src="{{://cdn-tbd}}/dist/iframe-adjuster.min.js"></script>```
    <br><br>

2. Call `iFrameAdjuster()` on the page once, anytime after the Document is ready. 

    ```javascript
        document.addEventListener("DOMContentLoaded", () => {
            iFrameAdjuster();
        });
    ```

    > It's not necessary to call `iFrameAdjuster()` from within the iFrame.

<br>

## Throw me a bone:
https://www.buymeacoffee.com/interactiverob

## Author: 
Rob Kirkner