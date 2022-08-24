import { render, screen } from '@testing-library/vue'
import vCheckbox from '../components/form/inputs/v-checkbox.vue'

test('checkbox render checked with label', () => {
    const label = "Remember me"
    const options = {
        props: {
            label: label,
            modelValue: true,
        }
    }
    render(vCheckbox, options)

    expect(screen.getByLabelText(label).checked).toBe(true)
})


test('checkbox render unchecked', () => {

    render(vCheckbox)

    expect(screen.getByRole('checkbox').checked).toBe(false)
})