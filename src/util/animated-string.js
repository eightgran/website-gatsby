/***
 * An string animation pro
 */

/**
 * Animates the provided string by appending one character
 * consecutively on the provided state variable until all
 * characters have been appended.
 *
 * @param {*} animatedString
 * @param {*} setNameLetters
 * @param {*} nameLetters
 */
export function animateString(animatedString, setNameLetters, nameLetters) {
  if (_currentCharIndex < animatedString.length) {
    for (let i = 0; i < animatedString.length; i++) {
      setNameLetters(nameLetters + animatedString[_currentCharIndex])
    }
    _currentCharIndex++

    if (animatedString.length === nameLetters.length) {
      setNameLetters(animatedString[0])
    }
  } else {
    // Reset the local counter.
    _currentCharIndex = 0
  }
}

/**
 * States whether to show the animated string.
 * 
 * @param {*} nameLetters 
 * @param {*} animatedString 
 * @returns 
 */
export function showAnimatedString(nameLetters, animatedString) {
  return nameLetters.length < animatedString.length
}

/**
 * Local counter variable to keep track of the current
 * character index. This variable should be decleared outside
 * the actual function bacause the function will be called
 * whenever the animation's interval will be reset. This could
 * also reset the state on the counter variable
 */

let _currentCharIndex = 0
