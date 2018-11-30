import Vue from 'vue'
import { mount } from '@vue/test-utils'
import App from '../../src/App.vue'
import Form from '../../src/components/inputform.vue'

Vue.component(App);
Vue.component(Form);

describe('Form', function () {
  it('checks if form is clear on clicking cancel', function () {
    var wrapper = mount(Form);
    expect(wrapper.find(Form).exists()).toBe(true);
    expect(wrapper.find(Form).vm.form.name).toBe('');

    wrapper.find(Form).vm.form = {
      name: 'Bronwin',
      gender: 'female',
      dateofbirth: '26031985',
      email: 'bronwin@mail.com',
      mobile: '0789990000',
      customerID: '1234567',
      membership: 'gold'
    }

    //expect form values to be populated
    expect(wrapper.find(Form).vm.form.name).toBe('Bronwin');
    expect(wrapper.find(Form).vm.form.gender).toBe('female');
    expect(wrapper.find(Form).vm.form.dateofbirth).toBe('26031985');
    expect(wrapper.find(Form).vm.form.email).toBe('bronwin@mail.com');
    expect(wrapper.find(Form).vm.form.mobile).toBe('0789990000');
    expect(wrapper.find(Form).vm.form.customerID).toBe('1234567');
    expect(wrapper.find(Form).vm.form.membership).toBe('gold');

    //call clear function
    wrapper.find(Form).vm.clear();

    //expect form values to be cleared
    expect(wrapper.find(Form).vm.form.name).toBe('');
    expect(wrapper.find(Form).vm.form.gender).toBe('');
    expect(wrapper.find(Form).vm.form.dateofbirth).toBe('');
    expect(wrapper.find(Form).vm.form.email).toBe('');
    expect(wrapper.find(Form).vm.form.mobile).toBe('');
    expect(wrapper.find(Form).vm.form.customerID).toBe('');
    expect(wrapper.find(Form).vm.form.membership).toBe('');

  })
})