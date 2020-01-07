let wasAtTop = true;

/**
 * Appies classes depending on the scroll position.
 *
 * Appies 'data-scrollclass' when the element is scrolled, and
 * 'data-topclass' when at the top. Supports multiple classes. Regular classes
 * may match 'data-topclasses' classes to show them on page load.
 *
 * Example usage:
 * <body onscroll="styleOnScroll(''#element .another-element')">
 *   <div id="styleMe" data-topclass="py-5" data-scrollclass="py-3 rounded">
 *   <div class="another-element px-5" data-topclass="px-5" data-scrollclass="px-3">
 * </body>
 *
 * @author Rien Stenekes
 * @version 1.0
 *
 * @param {array} selectors The selectors to be used to toggle the classes.
 */
function styleOnScroll(selectors) {
  /**
   * True if the page is scrolled.
   *
   * @type {boolean}
   */
  const isAtTop = window.scrollY === 0;

  /**
   * The selectors to be used to toggle the classes, exploded into an array.
   *
   * @type {boolean}
   */
  const selectorsArray = selectors.split(' ');

  selectorsArray.forEach(selector => {
    /**
     * The element retrieved through the selector.
     *
     * @type {object}
     */
    const element = document.querySelector(selector);

    /**
     * The classes that are applied when the page is scrolled to the top.
     *
     * @type {string}
     */
    const topClasses = element.dataset.topclass;

    /**
     * The classes that are applied when the page is scrolled.
     *
     * @type {string}
     */
    const scrollClasses = element.dataset.scrollclass;

    /**
     * The classes that are applied when the page is at the top, exploded into
     * an array.
     *
     * @type {array}
     */
    const topClassesArray = topClasses.split(' ');

    /**
     * The classes that are applied when the page is scrolled down, exploded
     * into an array.
     *
     * @type {array}
     */
    const scrollClassesArray = scrollClasses.split(' ');

    /**
     * Adds and removes top and scroll classes if the scroll position left or
     * reached the top,
     */
    if (isAtTop !== wasAtTop) {
      if (isAtTop) {
        topClassesArray.forEach(topClass => element.classList.add(topClass));
        scrollClassesArray.forEach(scrollClass => element.classList.remove(scrollClass));
      } else {
        topClassesArray.forEach(topClass => element.classList.remove(topClass));
        scrollClassesArray.forEach(scrollClass => element.classList.add(scrollClass));
      }
    }
  });

  wasAtTop = isAtTop;
}
