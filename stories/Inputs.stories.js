import { fn } from '@storybook/test'
import BaseButton from '../components/Base/BaseButton.vue'

export default {
	title: 'Example/Inputs',
	component: BaseButton,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large'],
			description: 'Size',
		},
		buttonType: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'other'],
			description: 'Type of button',
		},
		isLoading: {
			control: { type: 'boolean' },
		},
		isDisable: {
			control: { type: 'boolean' },
		},
	},
	args: { onClick: fn() },
}
