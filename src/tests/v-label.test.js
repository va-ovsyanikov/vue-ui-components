import { mount } from '@vue/test-utils'
import VLabel from '../components/form/addons/v-label.vue'

const renderLabel = (focus = '', error = '', disabled = '', label = '') => {
    const options = {
        props: {
            focus,
            error,
            disabled,
            label
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
        const wrapper = renderLabel(focus)
        expect(wrapper.classes()).toContain('focus')
    })
    test('class disabled', () => {
        const disabled = true
        const wrapper = renderLabel(disabled)
        expect(wrapper.classes()).toContain('disabled')
    })
    test('class error', () => {
        const error = true
        const wrapper = renderLabel(error)
        expect(wrapper.classes()).toContain('error')
    })
})

test('label render', () => {
    const label = 'label'
    const wrapper = mount(VLabel, {
        props: {
            label,
        }
    })
    expect(wrapper.find('label').text()).toBe(label)
   
})

test('required ', () => {
    const label = 'label'
    const wrapper = mount(VLabel, {
        props: {
            label,
            required: true
        }
    })
    expect(wrapper.find('label > span' ).text()).toBe('*')
})