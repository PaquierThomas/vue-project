import MyCards from '../components/elements/MyCards.vue'

export default {
  title: 'components/elements/MyCards',
  component: MyCards
}

export const Cards = {
  render: (args) => {
    return {
      components: {
        MyCards
      },
      template: `<MyCards />`
    }
  }
}
