/**
 * True if the page was scrolled when the function was previously executed.
 *
 * @type {boolean}
 */
let wasAtTop = true;

/**
 * Applies '.scrolled' class when the page is scrolled.
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
 * @param {array}   selectors The selectors to be used to toggle the classes.
 * @param {integer} offset    The offset from the top of the document to trigger
 *                            the class in pixels. Default is zero.
 */
function styleOnScroll(selectors, offset = 0) {
  /**
   * True if the page is scrolled.
   *
   * @type {boolean}
   */
  const isAtTop = window.scrollY <= offset;

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
