# 🔀 media-queries-min

> Simplest way to use media query with Child Functions and Hooks

## Installation

```
yarn add media-queries-min
```

## Child Function

```javascript
import { MediaQuery } from 'media-queries-min'

function App() {
  // ...

  return (
    <div>
      <MediaQuery size="md">
        {({ matches }) => <>{matches ? '🎉' : '😥'}</>}
      </MediaQuery>
    </div>
  )
}
```

## Hooks

```javascript
import { useMediaQuery } from 'media-queries-min'

function App() {
  const { matches } = useMediaQuery('md')
  // ...

  return <div>{matches ? '🎉' : '😥'}</div>
}
```

## API

### useMediaQuery

```js
const state = useMediaQuery(initialState)
```

#### state

##### Type: `Object`

| Key     |   Type    | Description                                    |
| ------- | :-------: | ---------------------------------------------- |
| matches | `Boolean` | Becomes `true` when the window's size matches. |

#### initialState

##### Default: `xs`

##### Type: `<String,Object>`

| Key    |                Type                | Description                                                                   |
| ------ | :--------------------------------: | ----------------------------------------------------------------------------- |
| xs     |              `string`              | Assign a new value query to `<= 576px`.                                       |
| sm     |              `string`              | Assign a new value query to `>= 576px`.                                       |
| md     |              `string`              | Assign a new value query to `>= 768px`.                                       |
| lg     |              `string`              | Assign a new value query to `>= 992px`.                                       |
| xl     |              `string`              | Assign a new value query to `>= 1200px`.                                      |
| params | `Object<size, maxWidth, minWidth>` | Provide with the following values `{ size: , maxWidth: 400 , minWidth: 500 }` |

### MediaQuery

```js
<MediaQuery {...props}>{(state) => {}}</MediaQuery>
```

#### state

##### Type: `Object`

| Key     |   Type    | Description                                    |
| ------- | :-------: | ---------------------------------------------- |
| matches | `Boolean` | Becomes `true` when the window's size matches. |

#### Props

##### Key/Type: `size=<String>`

###### Default: `xs`

| Key |   Type   | Description                              |
| --- | :------: | ---------------------------------------- |
| xs  | `string` | Assign a new value query to `<= 576px`.  |
| sm  | `string` | Assign a new value query to `>= 576px`.  |
| md  | `string` | Assign a new value query to `>= 768px`.  |
| lg  | `string` | Assign a new value query to `>= 992px`.  |
| xl  | `string` | Assign a new value query to `>= 1200px`. |

##### Key/Type: `maxWidth=<String,Number>`

```js
<MediaQuery maxWidth={'30vw'}>{(state) => {}}</MediaQuery>
```

##### Key/Type: `minWidth=<String,Number>`

```js
<MediaQuery minWidth={'20vw'}>{(state) => {}}</MediaQuery>
```

## Contribution

All the feedbacks/issues are very welcome! 😄

Please, contact me if any update about this repo [@clouby](https://github.com/clouby)
