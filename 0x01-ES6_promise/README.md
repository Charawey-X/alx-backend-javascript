## ES6 Promises

#### Requirements

- Your code should use the js extension
- Your code will be tested using the [Jest Testing Framework](https://jestjs.io/)
- Your code will be analyzed using the linter [ESLint](https://eslint.org/) along with specific rules that we’ll provide
- All of your functions must be exported
##

#### Task files

**utils.js**

Use when you get to tasks requiring uploadPhoto and createUser.
<summary>Click to show/hide file contents</summary>
<pre>

```
export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}



export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}
```

</pre>

##

#### Response Data Format

`uploadPhoto` returns a response with the format

```
{
  status: 200,
  body: 'photo-profile-1',
}
```

`createUser` returns a response with the format

```
{
  firstName: 'Guillaume',
  lastName: 'Salva',
}
```

##

0. Return a Promise using this prototype function `getResponseFromAPI()`
1. 
