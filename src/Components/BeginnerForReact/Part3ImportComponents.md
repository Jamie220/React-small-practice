# Importing Components

Be careful for those ways to export 

```JavaScript
//Body.js
export default props => (
    <div>
        {props.title}        
    </div>
    
) 

export const Body2 = () => (
    <div>
        <h2>hey!</h2>
    </div>
)

```

So if want to import `Body.js` 

```JavaScript
import Body, {Body2} from './Body'
```