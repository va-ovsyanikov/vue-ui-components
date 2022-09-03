import { mount } from '@vue/test-utils'
import VTextarea from '../../../components/form/inputs/v-textarea.vue'

const label = "label"

describe('textarea', () => {
    describe('classes textarea', () => {
        
        // test('class focus', () => {
        //     const wrapper = mount(VTextarea)
        //     wrapper.find('.textarea__field').trigger('focus');
        //     console.log(wrapper.html())
        //     expect(wrapper.classes()).toContain('focus')
        // })

        test('class error', () => {
            const wrapper = mount(VTextarea, {
                props: {
                    error: true
                }
            })
            expect(wrapper.classes()).toContain('error')
        })

        test('class disabled', () => {
            const wrapper = mount(VTextarea, {
                props: {
                    disabled: true
                }
            })
            expect(wrapper.classes()).toContain('disabled')
        })
    })

    test('emit input', () => {
        const wrapper = mount(VTextarea)
        wrapper.find('textarea').trigger('input')
        expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    })

    test('placeholder', () => {
        const placeholder = 'placeholder'
        const wrapper = mount(VTextarea, {
            props: {
                placeholder
            }
        })
        expect(wrapper.find('textarea').attributes().placeholder).toBe(placeholder)
    })
})

describe('prompt', () => {
    describe('text', () => {
        test('error text', () => {
            const errorMessage = 'Error message'
            const wrapper = mount(VTextarea, {
                props: {
                    errorMessage
                }
            })
            expect(wrapper.find('.error').text()).toBe(errorMessage)
        })

        test('note text', () => {
            const noteMessage = 'Note message'
            const wrapper = mount(VTextarea, {
                props: {
                    noteMessage
                }
            })
            expect(wrapper.find('.note').text()).toBe(noteMessage)
        })
    })

    test('label field', () => {
        const wrapper = mount(VTextarea, {
            props: {
                label
            }
        })
        expect(wrapper.find('.label').text()).toBe(label)
    })

    test('required field', () => {
        const wrapper = mount(VTextarea, {
            props: {
                required: true,
                label
            }
        })
        expect(wrapper.find('.label__required').text()).toBe('*')

    })

    test('class error', () => {
        const wrapper = mount(VTextarea, {
            props: {
                error: true
            }
        })
        expect(wrapper.find('.label').classes()).toContain('error')
    })

    test('class disabled', () => {
        const wrapper = mount(VTextarea, {
            props: {
                disabled: true
            }
        })
        expect(wrapper.find('.label').classes()).toContain('disabled')
    })
})