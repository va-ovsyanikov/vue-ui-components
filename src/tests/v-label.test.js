import { mount } from '@vue/test-utils'
import VLabel from '../components/form/addons/v-label.vue'

const label = 'label'
const required = true
const renderLabel = (label, required = false) => {
    const options = {
        props: {
            focus: true,
            disabled: true,
            error: true,
            label,
            required,
        }
    }
    return mount(VLabel, options)
}

describe('classes', () => {
    test('class default', () => {
        const wrapper = mount(VLabel)
        expect(wrapper.classes()).toContain('label')
    })
    test('class focus', () => {
        const wrapper = renderLabel()
        expect(wrapper.classes()).toContain('focus')
    })
    test('class disabled', () => {
        const wrapper = renderLabel()
        expect(wrapper.classes()).toContain('disabled')
    })
    test('class error', () => {
        const wrapper = renderLabel()
        expect(wrapper.classes()).toContain('error')
    })
})

test('label render', () => {
    const wrapper = renderLabel(label)
    expect(wrapper.find('label').text()).toBe(label)

})

test('required field', () => {
    const wrapper = renderLabel(label, required)
    expect(wrapper.find('label > span').text()).toBe('*')
})