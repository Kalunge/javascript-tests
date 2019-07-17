EXERCISE 1
Here is another
exercise. I want you to implement this function.
(Function isLandscape), it takes two parameters,
width, and height of an image, and returns true
if the image is landscape, which means width is greater than
height, otherwise it returns false. Now you may think this
is similar to the exercise in the last lecture, in fact it is, but I want you to
do this exercise because I'm going to give you a simple and affective tip to
write better code. So pause the video, do the exercise, and then come back
and continue watching.

EXERCISE 2

Alright here's an exercise for you
I want you to write a function that takes two numbers and returns
the maximum of the two. Call that function, give a different
argument, and make sure it's working properly.

EXERCISE 3

This next
exercise I want you to work on, is a very popular interview question
called the fizzBuzz algorithm. So we have this
function called fizz buzz, we give it an input and it
returns a string. Let me show you how that works, so
let's declare a constant called output. Here we call
fizzBuzz and pass an input like
3. Then, log the output
on the console. Let's see what we get. We get
fizz. So if the number that we're passing is divisible
by 3, we get fizz. So let me show you here.
If the number is divisible by 3 we get fizz.:00:52.000
Now if the number that we pass is divisible by 5,
divisible by 5 we get buzz.
Now if the number that we're passing is divisible by 3 and 5,
like 15, we get fizz buzz.
So, divisible by
both 3 and 5, we get fizzBuzz.
Now if the number is not divisible by either 3 or
5, we're going to get the same number, so if you pass0
let's say 7, we get 7, so
not divisible by 3 or 5, we get
the same input. Now if we don't pass a number here, let's say
we pass a string, we should get this message,
not a number. The same is true if you pass
a boolean, or anything that is not a number. So
if the input is not a number, that is the message that
we should display on the console. So I want you to pause
the video. Spend 10-15 minutes on this exercise,
and when you're done come back and continue watching.

EXERCISE 4
Alright here's
another exercise, but this exercise is a little more complicated than the earlier
exercises. So I want you to implement this function, check
Speed, this function takes a parameter that's the speed of a car.
Now in this program, I'm assuming that speed limit
is 70 km an hour. So if a
car is driving under the speed limit, we get this Ok
message on the console. Similarly if we pass 70
here, so if somebody is driving exactly at the speed limit, we're still good.
We still get the Ok message. Now for every
five kilometers above the speed limit,
they're going to get 1 point. So if I drive at
75 km an hour, I get 1 point here.
But what if I drive at 72 km an hour?
I'm still good. So for every 5 km,
above the speed limit, we should give the driver 1 point. Now as
part of calculating the point here, you will have to use one of the built in
functions in JavaScript that is Math.
floor. We can give this function a floating point number,
like 1.3, let's say 1.3 points, and this will
convert that to the greatest integer, for example if we go to the
console here, and type math.floor of
1.3, we get 1. So you will have to use this function
as part of your calculations okay, now here is a tip for you.
Back to our checkSpeed function, what if you passed 80 here?
We should get 2 points right? So we get 2 points, beautiful.
Now what if we drive at 180 km an hour? Our
license is suspended. So if a driver gets more
than 12 points, then their license should be
suspended. So here's the logic for this function.
I want you to spend 15-20 minutes to do this exercise,
once you're done, come back and continue watching.

EXERCISE 5

Alright
here's your next exercise. I want you to write a function called show numbers
that takes a parameter called limit. So we pass a number here,
like 10, and when we call this function, we should call all the numbers
from 0 to the number we supplied as the limit.
Now next to each number if that number is even we should
display the even number, otherwise we should display odd. It's a fairly
easy exercise. Pause the video, spend a few minutes, and when you're done come back,
continue watching.

EXERCISE 6

In this exercise
I want you to create a function called countTruthy which
takes an array and returns a number of truthy elements in this array.
Now what are these truthy or false values, let me
quickly refresh your memory. Sometimes when we have an if
statement, we might pass a boolean true or false
as the condition here, for example we might have a constant called
isActive, we set this to true, and when we use
this constant as the condition here, we get
this Hello message on the console. Because this
is a boolean true. But sometimes what we have
in our if statement is not necessarily a boolean value, it could
be a string, it could be a number, it could be an object, so the JavaScript number
engine tries to convert that value to something that is like a boolean
but is not a boolean. Here's an example, let's say I have a constant,
called name, I set this to a string, Mosh.0
Now if I pass name here, obviously name is
a string, it's not a boolean true or false, so the JavaScript engine
tries to interpret this as truthy or falsey
so when we run this code you can see we still see the hello
message, because we are dealing with a string of characters.
So this is what we call a truthy value. It's
not the boolean true, it's truthy. In contrast,
if we had an empty string, JavaScript engine would
save this as falsey. Again, it's not the boolean
false. It's falsey. Now when we run this code,
you no longer see the Hello message. So that's all about truthy and falsey
values. Now let's quickly review the list of falsey
values in JavaScript. So undefined
null. Empty string. The boolean
false. 0 and not a number.
You learned about this value in an earlier exercise, that's something that I forgot
to mention when I talked about all the falsey values in JavaScript, but
this is the complete list of falsey values in JavaScript.
So now, your job is to create a function called
truthy that gets an array, and returns the number of
truthy values in this array. So here's an example, if I declare
this array, and set it to 123,
so here we have 3 truthy values. We call
countTruthy, pass the array, and immediately
send the result to console.log. Save the changes
so we get 3 here. Now if we add
0 here, because 0 here is a falsey value,
we still get 3. If you add null, undefined and empty string,
we still get 3. If I remove 1 of these numbers, let's say
1, we get 2. So
go ahead, do this exercise. And when you're done, come back and continue watch

EXERCISE 7

Alright here's
another simple but great exercise, your job is to create a function
called show properties. We pass an object here. And this function
should display all the properties of this object that are
of type string. Let me give you an example. So on the
top, I'm going to define an object,
like movie, here's the object literal syntax to initialize this,
so here we're gonna add a few properties like title,
set it to a simple string, the value doesn't really matter, a is enough.
Release here, we set it to a number, like 2018.
Rating, again, a number, and then director
we set it to another string. Now if we call
function showProperties, we pass this movie object
see what we get. We see the
string properties of our movie object, so title is a and director is
b. So pause the video, do the exercise
and when you're done come back and continue watching.

EXERCISE 8

Here's another
simple but great exercise that trains your programming brain.
So I want you to create this function called sum, we give it a limit
and this function will return the sum of all the multiples
of 3 and 5 from 0 up to this limit.
Here's an example. What are the multiples of 3 and 5,
between 0 and 10. Well, multiples
of 3, are 3, 6, and 9
and multiples of 5 are
are 5 and 10, so I'm including this number that
is passed as a limit. Now if you add these numbers together,
the result will be 33, and that
is the trouble of this function, so save the changes, we get 33.

EXERCISE 9

In this exercise,
we want to calculate the grade of a student. So here,
are the marks of a student in different subjects,
we pass this array with this function, calculate grade, what
this function does, is first it calculates the average
grade. So what is the average here, 80 plus 80
plus 50, that comes to 210 divided by 3, so
the average is 70. Now here we need
a table to see what grade this average corresponds to.
So if the average comes down to this range 1 to
59, the grade should be f, if it is between 60 and00
69, that should be d, if it's between
70 and 79, that should be a c.
If it's between 8- and 89, that should be a b.
And finally if it's between 90 and 100,
that should be an a. So spend 5 to 10 minutes
on this exercise, when you're gone, come back and continue watching.

EXERCISE 10
This exercise
is a very popular exercise for junior programmers. So,
we have this function, show stars, with a parameter called
rows. So when we call this function and pass 5, see
what we get on the console. We get 5 rows,
in each row we have a star, and the number of
stars in that row, depends on the row we are in. So in the first row we
have one star, in the second row we have 2 stars, and so on.
If you call this function pass 1, get only a single star,
if we pass 2, we get 2 rows, if we pass 10,
you got the point. So go ahead and spend 5-10
minutes on this exercise, when you're done, come back and continue watching.

EXERCISE 11

And finally
your last exercise for this section. I want you to create this function,
showPrimes, that takes a limit, and shows
all the prime numbers up to this limit. So here are the prime numbers
that we have, up to 20, we got 2, 3, 5,
7 and so on. In case you don't know what's a prime number, let me give you a brief
explanation. So in mathematics, numbers can be prime,
or composite. A prime number is 1
whose factors are only 1 and itself.
So it cannot be divided evenly into another
number. Let me give you another example, think of 12.
What are the factors of 12? Well 1, 2,
the factors of 12. So when we divided 12 by these numbers,
we won't get any remainder. The remainder will be 0, so
we say 12, can be divided evenly
by its factors. Now 12 is a composite number,
because it has many factors, a prime
number in contrast has only 2 factors, it's 1
and itself. Here's an example. So we've got 11 here
the factors of 11 are 1 and 11 itself.
The same is true for 13. It can only be divided
evenly by 1 and 13. So go ahead and create this
function. You will see my solution next.
