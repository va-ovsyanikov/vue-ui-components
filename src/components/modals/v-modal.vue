<template>
	<div v-if="isOpen" class="modal" @click="cancel">
		<div class="modal__content" @click.stop>
			<div class="modal__header">
				<slot name="header">
					<h2 class="modal__title">Modal window</h2>
					<v-button type="icon" icon="ci-close_big" :onClick="cancel"></v-button>
				</slot>
			</div>
			<div class="modal__body">
				<slot name="body">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur quaerat delectus earum
					voluptatum
					facere quis amet, harum nobis aliquam perferendis minima totam tempora officiis voluptate autem,
					quos
					facilis, sit quidem!
				</slot>
			</div>
			<div class="modal__footer">
				<slot name="footer">
					<v-button class="modal__btn__cancel" type="secondary" :onClick="cancel">Cancel</v-button>
					<v-button type="primary" :onClick="send">Send</v-button>
				</slot>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, watch } from 'vue';
import vButton from '../buttons/v-button.vue';
const props = defineProps({
	isOpen: {
		type: Boolean,
		default: true
	}
})

onMounted(() => {
	document.addEventListener("keydown", handleKeydown)
})

onBeforeUnmount(() => {
	document.removeEventListener("keydown", handleKeydown)
})

watch(() => props.isOpen, (value) => {
	if (value) {
		document.body.style.overflow = 'hidden'
	} else {
		document.body.style.overflow = 'auto'
	}
})

const handleKeydown = (e) => {
	if (props.isOpen && e.key === 'Escape')
		cancel()
}

const emit = defineEmits('cancel')
const cancel = () => {
	emit('cancel')
}

const send = () => {
	console.log('sdfsdf');
}

</script>

<style lang="less" scoped>
.modal {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.3);
	overflow: auto;
	z-index: 99;
	display: flex;
	justify-content: center;


	&__content {
		min-width: 370px;
		width: 50%;
		min-height: 300px;
		background-color: var(--white);
		top: 50%;
		position: absolute;
		transform: translate(0, -50%);
		border: 1px solid var(--border);
		box-shadow: -3px 0px 6px rgba(0, 0, 0, 0.06);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	&__body {
		padding: 10px 16px;
	}

	&__header {
		padding: 10px 16px;
		border-bottom: 1px solid var(--border);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&__title {
		font-weight: 600;
		font-size: 20px;
		color: var(--secondary);

	}

	&__footer {
		padding: 10px 16px;
		border-top: 1px solid var(--border);
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	&__btn__cancel {
		margin-right: 15px;
	}
}
</style>
