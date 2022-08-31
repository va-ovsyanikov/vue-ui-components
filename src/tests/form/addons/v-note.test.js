import {mount} from '@vue/test-utils'
import VNote from '../../../components/form/addons/v-note.vue'



test('noteMessage', ()=>{
 const  noteMessage = 'note'
    const wrapper = mount(VNote, {
        props:{
            noteMessage
        }
    })
  expect(wrapper.find('.note').text()).toBe(noteMessage)
})


test('errorMessage', ()=>{
    const  errorMessage = 'error'
    const wrapper = mount(VNote, {
        props:{
            errorMessage
        }
    })
  expect(wrapper.find('.error').text()).toBe(errorMessage)
})
