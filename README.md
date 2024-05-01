# Vue Nice Tailwind
Vite Tailwind plugin for decluttering tailwind classes from vue template.

## Installation
Paste the following command in your terminal to install the package
`npm install vue-nice-tailwind`

## Usage
Open your vite config file and paste the following code at proper place to use the package

```js
import VueNiceTailwind from 'vue-nice-tailwind';

export default defineConfig({
  	plugins: [		
		VueNiceTailwind(),
		vue()
	]
})
```

## Basic Usage
This package allows you to replace taliwind classes for Dom elements with custom id or class
  
```js-vue
<template>
	<div id="container-parent">
		<div class="form-group">
			<input id="email" class="form-input"/>
 		</div>
	</div>
</template>
<tailwind>
//use with id
#container-parent {
	min-h-screen items-center justify-center
}
//use with class
.form-group {
	//tailwind classes seperated by space
}
.form-input {
	//tailwind classes seperated by space
}
</tailwind>
<script setup>
</script>
```
It's current limitation or to-do are:
- You can only use single id or class for perticular dom element.
- You can't use custom id or class attribute value with space.
- You can't use custom id or class with v-bind or : symbol.