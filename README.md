
Status of Last Deployment:<br>

<img src="https://github.com/va-ovsyanikov/vue-uikit-components/workflows/UI-KIT/badge.svg?branch=main">

# DMEWEB UI KIT

## Style Guide
### component template 
_(2 new lines between blocks)_

```
<template>
    ...
</template>


<script>
    ...
</script>


<style>
    ...
</style>
```

### Self-closed component syntax
Example:

**Has inner text/slot/html**
```
<v-list>
    <v-list-header>Hello</v-list-header>
    <v-list-item>Item 1</v-list-item>
</v-list>
```
**No inner text/slot/html**
```
<v-input v-model="test" />
```


## Components

### Button
#### Props
| Name     | Type    | Default | Description                     |
|----------|---------|---------|---------------------------------|
| type     | string  | primary | Button Css-class                |
| disabled | boolean | false   |                                 |
| icon     | string  |         | Prepend Icon name               |
| loading  | boolean | false   | Disabled button while it's true |

#### Slots
| Name    | Description |
|---------|-------------|
| default |             |

#### Events
| Name  | Description |
|-------|-------------|
| click |             |
