import Vue from 'vue'
import LoginView from '@/components/LoginView'
import router from '@/router'
// import { shallowMount } from '@vue/test-utils'

describe('LoginView.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(LoginView)
    const vm = new Constructor({router}).$mount()
    expect(vm.$el.querySelector('button').textContent)
      .to.equal('Log in')
  })
})
