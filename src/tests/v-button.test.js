import { test, expect } from "vitest"
import { render, screen } from '@testing-library/vue'
import VButton from '../components/buttons/v-button.vue'

test('renders button', () => {

    //given (arrange)
    const options = {
        slots: {
            default: "Button"
        }
    }

    //when (act)
    render(VButton,options)


    //then (assert)
    screen.getByText('Button')
})