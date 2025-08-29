# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
-> Ans:
      getElementById select a html element with the given ID.
      getElementsByClassName selects all the html elements with the given ID.
      querySelector selects the first element with the given css selector.
      querySelectorAll selects all the element with the given css selector.

#2. How do you create and insert a new element into the DOM?
 -> Ans:
        First we create the element by document.createElement("tagName")
        then we add it's inner element 
        after that we append this created element with its parents by ParentNode.appendChild(createDiv);

#3. What is Event Bubbling and how does it work?
->Ans:
      Event bubbling is the process in the DOM where an event starts from the target element then it passed sequentially to its parent elements.
      How it work
      First target(child) run
      then it's parent
      after then it's grand parent
      and so on

#04.What is Event Delegation in JavaScript? Why is it useful?
->Ans:
      Event delegation is a technique in Javascript where, instead of adding event listeners to every child element, we add one event listener to a common parent element and use the  event’s target property to           check which child was clicked.
      It is useful because we don’t need to add many event listeners which saves memory space and increase performance

      
#05.What is the difference between preventDefault() and stopPropagation() methods?
->Ans:
      preventDefault() stops the browsers default action for an event
      stopPropagation() stops event bubbling.
