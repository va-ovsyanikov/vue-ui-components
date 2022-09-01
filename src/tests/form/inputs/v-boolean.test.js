import { mount } from '@vue/test-utils'
import VBoolean from '../../../components/form/inputs/v-boolean.vue'

describe('render button', () => {
    test('render button true', () => {
        const trueText = 'Yes'
        const wrapper = mount(VBoolean, {
            props: {
                trueText
            }
        })
        expect(wrapper.find('.boolean__btn__true').text()).toBe(trueText)
    })
    test.todo('render button false', () => {
        const falseText = 'No'
        const wrapper = mount(VBoolean, {
            props: {
                falseText
            }
        })
        expect(wrapper.find('.boolean__btn__false').text()).toBe(falseText)
    })
})


describe('events button', () => {
    test('event button true', () => {
        const wrapper = mount(VBoolean)
        wrapper.find('.boolean__btn__true').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    })

    test('event button false', () => {
        const wrapper = mount(VBoolean)
        wrapper.find('.boolean__btn__false').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    })
})


describe('active class buttons', () => {
    test('active button true', () => {
        const wrapper = mount(VBoolean, {
            props: {
                modelValue: true
            }
        })
        expect(wrapper.find('.boolean__btn__true').classes()).toContain('active')
    })
    test('active button false', () => {
        const wrapper = mount(VBoolean, {
            props: {
                modelValue: false
            }
        })
        expect(wrapper.find('.boolean__btn__false').classes()).toContain('active')
    })
})
