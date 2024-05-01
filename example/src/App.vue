<template>
	<div id="container-parent">
	</div>
</template>
<tailwind>
#container-parent {
	min-h-screen items-center justify-center
}
</tailwind>
<script setup>
import {useI18n} from 'vue-i18n';
const { locale } = useI18n();

import { reactive } from 'vue';
import { useVueNiceValidate } from 'vue-nice-validate';
const { vValidate, formErrors, validateForm, validationFields } = useVueNiceValidate();

let data = reactive({
	'first_name': '',
	'last_name': '',
	'email': '',
	'phone': {
		country_code:'',
		phone_number: ''
	},
	'password': '',
	'confirm_password': '',
});

function onSubmit() {
	validateForm(data).then(result => {
		console.log(validationFields);

		if (result) {
			console.log('Its valid');
		} else {
			console.log('Its not valid');
		}
	});
}

function currentTab(lang){
	locale.value = lang;
}
</script> 
