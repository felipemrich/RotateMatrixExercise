# rotatematrixexercise

<video src="record_rotatematrix.mov width" height="320px" width="320px"> 
Rotate Matrix Recording </video>

In this exercise i created a 2D array, 3x3.
This is a small part of a bigger project, in this exercise we learn a little bit of how we can rotate an image.
Instead of using pixels, that is a lot more comples, we are using an array to represent the pixels.

First a declared an 2Darray that goes 1 to 9.
Then i created a function called swap. This function can change the position in the matrix.
Than i created another function called transpode. This function invert columns with rows.
After that i created the function moveCols. This functions like the name already say move the columns position;
Then rotatematrix. This function only call both functions above, and obviously rotate the matrix.
For the end of this little project i need to integrate this array to my grid section, so to do that i created another function called updateGraphics.
First I create a variable to store the div element, in this case was a class called "box".
Then i create 2 loop one inside another to loop over the array and append/push the data into the 3x3 grid section that i've created in my index.html file.
