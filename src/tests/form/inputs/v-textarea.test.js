import { mount } from '@vue/test-utils'
import VTextarea from '../../../components/form/inputs/v-textarea.vue'

    test('placeholder', () => {
        const placeholder ='placeholder'
        const wrapper = mount(VTextarea, {
            props:{
                placeholder
            }
        })
        expect(wrapper.find('textarea').attributes().placeholder).toBe(placeholder)
    })


describe('classes textarea', () => {
    // test('class focus', () => {
    //     const wrapper = mount(VTextarea)
    //     wrapper.find('.textarea__field').trigger('focus');
    //     console.log(wrapper.html())
    //     expect(wrapper.classes()).toContain('focus')
    // })
    test('class error', () => {
        const wrapper = mount(VTextarea,{
            props:{
                error:true
            }
        })
        expect(wrapper.classes()).toContain('error')
    })
    
    test('class disabled', () => {
        const wrapper = mount(VTextarea,{
            props:{
                disabled:true
            }
        })
        expect(wrapper.classes()).toContain('disabled')
    })
})