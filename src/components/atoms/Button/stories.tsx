import { Button } from '.'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

export default {
  component: Button,
  title: 'Atoms/Button',
  argTypes: {
    state: { control: { type: 'radio' }, options: ['enabled', 'disabled'] },
    theme: {
      control: { type: 'radio' },
      options: ['primary', 'success', 'error']
    }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = { children: 'Button Text', theme: 'primary' }
