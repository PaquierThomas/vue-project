import MyCard from '@/components/elements/MyCard.vue'

export default {
  title: 'components/elements/MyCard',
  component: MyCard,
  argTypes: {
    description: {
      control: 'text'
    },
    title: {
      control: 'text'
    },
    imageSrc: {
      control: 'text'
    },
    imageAlt: {
      control: 'text'
    },
    buttonLabel: {
      control: 'text'
    }
  }
}

export const Card = {
  render: (args) => {
    return {
      components: {
        MyCard
      },
      setup() {
        return { args }
      },
      template: `<MyCard v-bind="args" />`
    }
  },
  args: {
    title: 'Healthy Food',
    description: `But I must explain to you 
    how all this mistaken idea of denouncing pleasure and
    practising pain was wrong.`,
    buttonLabel: 'Bouton de la card'
  }
}
