function myFunc(password, pword)
{
  if(password.length < 8)
  {
    alert("Password needs more than eight characters, yo!");
  }
  else if(password != pword)
  {
    alert("Passwords do not match, yo!");
  }
  else {
    alert("Passwords Vaidated, yo!");
  }
}
