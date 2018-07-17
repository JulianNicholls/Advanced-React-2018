# Advanced React and Redux - 2018

This is the code from the Advanced React course by Stephen Grider at
[Udemy](https://www.udemy.com/react-redux-tutorial/learn/v4/overview)

## Progress

Completed section 3 - HOC

## Differences from Stephen's

I have added some minimal CSS to the apps.

I have done the Section 3 - HOC in a new directory called HOC, rather than 
continuing in the testing directory.

I used `requireAuth(CommentBox)` as the component to be loaded by the `/post` 
route, rather than calling it at the bottom of the CommentBox file. It seems 
to me that putting it in there inextricably links requireAuth to the CommentBox, 
defeating the whole object of the HOC in the first place.


#### Login / Signin

I have used Login / Logout instead of Signin / Signout consistently across the 
HOC, auth server and client, because I prefer the complete difference in words.
I have confused myself, and I have seen lecturers / co-workers confuse themselves 
and me when there is the slip of the tongue between talking about signin and signup.
e.g.

* HOC header button


### Git client

I have used Git at the command-line for almost 10 years. Over that time, 
I have tried many different graphical shells for Git, without finding one 
that was easier and nicer to use than the command-line (in my view).

I have now found that [GitKraken](https://www.gitkraken.com) is an excellent
Git shell and would advise using it to everyone.

### Questions

If you have any questions about this repository, or any others of mine, please
don't hesitate to contact me.
