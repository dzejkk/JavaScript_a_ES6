#Backgrounf highliting

## Core JavaScript Logic:

```javascript
function updateTextHighlight() {
    const text = textarea.value;
    const currentLength = text.length;
    
    if (currentLength > maxLength) {
        const normalText = text.slice(0, maxLength);  // Text within limit
        const excessText = text.slice(maxLength);     // Text beyond limit
        
        // Show normal text + highlighted excess text in overlay
        overlay.innerHTML = normalText + '<span class="excess-text">' + excessText + '</span>';
    } else {
        overlay.innerHTML = ''; // No highlighting needed
    }
}
```

## How it works:

1. **Overlay Technique**: A div positioned exactly over the textarea shows the highlighted excess text
2. **Text Splitting**: Split text at the character limit (280 chars)
3. **Selective Highlighting**: Only the excess portion gets the red background
4. **Transparent Background**: The textarea itself remains transparent so you see the overlay behind it
5. **Scroll Sync**: The overlay scrolls with the textarea to maintain alignment

## Key CSS for the overlay:

```css
.textarea-overlay {
    position: absolute;
    pointer-events: none; /* Allows clicks to pass through to textarea */
    color: transparent;   /* Hide normal text, show only highlighted parts */
    background: transparent;
    /* Match textarea styling exactly */
}

.excess-text {
    background-color: #fee2e2; /* Light red background */
    color: #dc2626;           /* Red text color */
}
```

This approach gives you the exact Twitter-like behavior where only the characters beyond the limit have a red background, while maintaining full textarea functionality for editing.