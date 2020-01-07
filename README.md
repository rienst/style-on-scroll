# Style on scroll
Add classes when the page is scrolled or reaches the top, right from your HTML file.

- Appies 'data-scrollclass' when the page is scrolled and 'data-topclass' when at the top.
- Supports multiple selectors
- Supports multiple classes.
- Regular classes may match 'data-topclasses' classes to show them on page load.

## Example usage
```html
<body onscroll="styleOnScroll(''#element .another-element')">
  <div id="element" data-topclass="py-5" data-scrollclass="py-3 scrolled">
  <div class="another-element px-5" data-topclass="px-5" data-scrollclass="px-3">
</body>
```
