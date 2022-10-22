<template>
	<a
		href="#"
		:class="[
			'btn',
			`btn-${type}`,
			{ loading: loading },
			{ disabled: disabled },
			{ iconOnly: iconOnly },
		]"
		@click.prevent="onClick"
	>
		<span v-if="loading" class="btn__spinner"></span>
		<v-icon v-if="icon" class="btn__icon">{{ icon }}</v-icon>
		<slot></slot>
	</a>
</template>

<script setup>
import vIcon from "../icons/v-icon.vue";
const props = defineProps({
	type: {
		type: String,
		required: true,
		default: "primary",
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	loading: {
		type: Boolean,
		default: false,
	},
	iconOnly: {
		type: Boolean,
		default: false,
	},
	icon: {
		type: String,
		default: "",
	},
	onClick: {
		type: Function,
		default: () => {},
	},
});
</script>

<style lang="less" scoped>
@keyframes spinner__border {
	100% {
		transform: rotate(360deg);
	}
}

.btn {
	position: relative;
	font-weight: 600;
	border-radius: 2px;
	padding: 8px 15px;
	height: 40px;
	font-size: 14px;
	cursor: pointer;
	transition: 0.2s;
	border: none;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	&.loading {
		pointer-events: none;

		&::before {
			content: "";
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			background-color: var(--white);
			opacity: 0.5;
			z-index: 1;
		}
	}

	&.disabled {
		pointer-events: none;
	}

	&__icon {
		font-size: 24px;
		margin: 0 13px 0 3px;
	}
	&-icon {
		border: none;
		padding: 0;
		color: var(--btn-text);
		&:hover {
			color: var(--hover-secondary);
		}
		.btn__icon {
			margin: 0;
		}
	}
	&-primary {
		color: var(--white);
		background-color: var(--primary);

		&:hover {
			background-color: var(--hover-primary);
		}

		&:active {
			background-color: var(--active-primary);
		}

		&.disabled {
			background-color: var(--disabled);
		}
	}

	&-secondary {
		color: var(--btn-text);
		border: 1px solid var(--btn-text);
		background-color: var(--white);

		&:hover {
			color: var(--hover-secondary);
			border-color: var(--hover-secondary);
		}

		&:active {
			color: var(--active-secondary);
			border-color: var(--active-secondary);
		}

		&.disabled {
			color: var(--disabled);
			border-color: var(--disabled);
		}

		&.iconOnly {
			height: 32px;
			width: 32px;
			.btn__icon {
				margin: 0;
			}
		}
	}

	&-tetritary {
		padding: 8px 10px;
		color: var(--btn-text);
		background-color: var(--white);

		&:active {
			color: var(--tetritary-active);
		}

		&.disabled {
			color: var(--disabled);
		}

		.btn__icon {
			margin-right: 5px;
		}
	}

	&__spinner {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: url("../../assets/img/loader.svg") no-repeat center;
		background-size: auto 50%;
		z-index: 2;
	}
}
</style>
