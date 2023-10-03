import MyIconFood from '@/components/elements/MyIconFood.vue'

export default {
  title: 'elements/MyIconFood',
  component: MyIconFood,
  argTypes: {
    name: {
      control: 'select',
      options: [
        'right-arrow',
        'left-arrow',
        'play',
        'chevron-right',
        'shopping-bag',
        'search',
        'clock',
        'map-pin',
        'phone',
        'star',
        'filled-star',
        'fork-knife',
        'fork-knife-crossed',
        'truck',
        'facebook',
        'instagram',
        'linkedin',
        'twitter'
      ]
    },
    background: {
      control: 'select',
      options: ['orange', 'tangerine', 'black', 'white', 'no-bg']
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    }
  }
}

export const PrimaryIcon = {
  render: (args) => {
    return {
      components: {
        MyIconFood
      },
      setup() {
        return { args }
      },
      template: `<MyIconFood v-bind="args"></MyIconFood>`
    }
  },
  args: {
    name: 'play',
    background: 'orange'
  }
}
