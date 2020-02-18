# Part 6 Fetch data from API in React

The best place to fetch the data from API in React is `componentDidMount()` 

## How it is work?

`render()` --> `componentDidMount()` --> `render()`

## The best place to understan lifecyle in React
[official react lifecycle diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)


## using Asycn await 
```JavaScript
    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.results[0], loading: false });
    }
```