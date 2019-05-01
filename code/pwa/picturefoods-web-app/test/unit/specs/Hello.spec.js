import Vue from 'vue'
import Hello from '@/components/Hello'
// import { shallowMount } from '@vue/test-utils'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Hello)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js PWA')
  })
})
/*
describe('Hello.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Welcome to Your Vue.js PWA'
    const wrapper = shallowMount(Hello, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
*/
