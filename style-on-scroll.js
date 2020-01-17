/**
 * True if the page was scrolled when the function was previously executed.
 *
 * @type {boolean}
 */
let wasAtTop = true;

/**
 * Appies '.scrolled' class when the page is scrolled.
 *
 * Example usage:
 * <body onscroll="styleOnScroll('#element .another-element')">
 *   <div id="element">
 *   <div class="another-element">
 * </body>
 *
 * @author  Rien Stenekes
 * @version 2.0
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
   * @type {array}
   */
  selectors = selectors.split(' ');

  selectors.forEach(selector => {
    /**
     * The element retrieved through the selector.
     *
     * @type {HTMLElement}
     */
    const element = document.querySelector(selector);

    /**
     * Adds and removes '.scrolled' class when the page left or reached the top.
     */
    if (isAtTop !== wasAtTop) {
      if (isAtTop) {
        element.classList.remove('scrolled');
      } else {
        element.classList.add('scrolled');
      }
    }
  });

  /**
   * Sets wasAtTop for the next time the function runs.
   */
  wasAtTop = isAtTop;
}
