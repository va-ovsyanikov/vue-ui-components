import { mount } from '@vue/test-utils'
import VButton from '../../components/buttons/v-button.vue'

const renderButton = (type) => {
    const options = {
        props: {
            type,
            disabled: true,
            iconOnly: true,
            loading: true,
            icon: 'icon'
        },
        slots: {
            default: 'Button'
        }
    }

    return mount(VButton, options)
}

describe('name button', () => {
    test('displays name button', () => {
        const wrapper = renderButton()
        expect(wrapper.text()).toContain('Button')
    })

})
describe('classes', () => {
    test('class default', () => {
        const wrapper = mount(VButton)
        expect(wrapper.classes()).toContain('btn')
    })
    test('class type', () => {
        const type = 'primary'
        const wrapper = renderButton(type)
        expect(wrapper.classes()).toContain(`btn-${type}`)
    })
    test('class disabled', () => {
        const wrapper = renderButton()
        expect(wrapper.classes()).toContain('disabled')
    })
    test('class iconOnly', () => {
        const wrapper = renderButton()
        expect(wrapper.classes()).toContain('iconOnly')
    })
    test('class loading', () => {
        const wrapper = renderButton()
        expect(wrapper.classes()).toContain('loading')
        expect(wrapper.get('.btn__spinner').isVisible()).toBe(true)

    })
})

test('icon render', () => {
    const wrapper = renderButton()
    expect(wrapper.find('.btn__icon').isVisible()).toBe(true)
})
