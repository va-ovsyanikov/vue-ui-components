<template>
	<i :class="addClass" data-testid="icon"></i>
</template>

<script setup>
import { useSlots, computed} from "vue";
const slots = useSlots();
const classIcon = slots.default()[0].children;

//class
const addClass = computed(()=>{
	return{
		'icon':true,
		[`${classIcon}`]:true
	}
})
</script>

<style lang="less" scoped></style>
