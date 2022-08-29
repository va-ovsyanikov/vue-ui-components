// import { render, screen, waitForElementToBeRemoved } from '@testing-library/vue'
// import userEvent from '@testing-library/user-event'
// import matchers from '@testing-library/jest-dom/matchers';
import { mount } from '@vue/test-utils'
import VTableSettings from '../components/tables/v-table-settings.vue'
// expect.extend(matchers);
// const user = userEvent.setup()


test('show modal', async () => {
    const wrapper = mount(VTableSettings)
    await wrapper.find('.btnShowModal').trigger('click')
    expect(wrapper.find('.modal__settings').exists()).toBeTruthy()
})

test('show all items', async () => {
    const wrapper = mount(VTableSettings, {
        props: {
            showAll: true
        }
    })
    await wrapper.find('.btnShowModal').trigger('click')
    expect(wrapper.find('.table__settings__show').exists()).toBeTruthy()
})

test('hide modal', async () => {
    const wrapper = mount(VTableSettings)
    await wrapper.find('.btnShowModal').trigger('click')
    await wrapper.find('.btnHideModal').trigger('click')
    expect(wrapper.find('.modal__settings').exists()).toBeFalsy()
})

test('show items ', async () => {
    const items = [
        { text: "Status", value: "status", enabled: true },
        { text: "Patient Name", value: "name", enabled: true },
        { text: "DOB", value: "dob", enabled: true }
    ];
    const wrapper = mount(VTableSettings, {
        props: {
            items
        }
    })
    await wrapper.find('.btnShowModal').trigger('click')
   wrapper.findAll('.table__settings__name').forEach((el, i) => expect(el.text()).toBe(items[i].text))
})

test('drag and drop elements', async () => {
    const wrapper = mount(VTableSettings)
    await wrapper.find('.btnShowModal').trigger('click')
    wrapper.find('.draggable').trigger('change')
    expect(wrapper.emitted()).toHaveProperty('onDrag')
})