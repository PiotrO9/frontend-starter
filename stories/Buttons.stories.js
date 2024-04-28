import { fn } from '@storybook/test'
import BaseButton from '../components/Base/BaseButton.vue'

export default {
    title: 'Example/Buttons',
    component: BaseButton,
    tags: ['autodocs'],
    argTypes: {},
    args: { onClick: fn() },
}

export const Primary = {}
