import {mount} from '@vue/test-utils'
import vNote from '../../../components/form/addons/v-note.vue'



test('noteMessage', ()=>{
 const  noteMessage = 'note'
    const wrapper = mount(vNote, {
        props:{
            noteMessage
        }
    })
  expect(wrapper.find('.note').text()).toBe(noteMessage)
})


test('errorMessage', ()=>{
    const  errorMessage = 'error'
    const wrapper = mount(vNote, {
        props:{
            errorMessage
        }
    })
  expect(wrapper.find('.error').text()).toBe(errorMessage)
})
