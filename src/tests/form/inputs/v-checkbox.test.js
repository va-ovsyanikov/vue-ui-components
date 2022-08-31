import { mount } from '@vue/test-utils'
import VCheckbox from '../../../components/form/inputs/v-checkbox.vue'

const renderCheckbox = (label) => {
    const options = {
        props: {
            label,
            modelValue: true,
            trueValue: true,
        }
    }
    const wrapper = mount(VCheckbox, options)
    return wrapper
}

test('label render', () => {
 const label = "Remember me"
    const wrapper = renderCheckbox(label)
    expect(wrapper.find('.checkbox__label__text').text()).toBe(label)
})


test('event change', () => {
    const wrapper = mount(VCheckbox)
    wrapper.find('input').trigger('change')
    expect(wrapper.emitted()).toHaveProperty("update:modelValue")
})


test('class checked', () => {
    const wrapper = renderCheckbox()
    expect(wrapper.classes()).toContain('checked')
})

test('input checked', () => {
    const wrapper = renderCheckbox()
    expect(wrapper.get('input').element.checked).toBeTruthy()
})
