/*AI Usage:
Prompt: Can you just update my code.
Responce: Yes
My Changes: I didnt really chnage anything myself
Resoning: I just wanted to make sure the code worked properly.
What code is AI: The whole code
*/
const buttons = document.querySelectorAll(".clothes-buttons button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
  
    if (button.classList.contains("selected")) {
      button.classList.remove("selected");
      return;
    }

    buttons.forEach(btn => btn.classList.remove("selected"));

    button.classList.add("selected");
  });
});



