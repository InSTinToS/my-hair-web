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
    },
    invisible: {
      control: { type: 'radio' },
      options: [
        'primary',
        'primary_contrast',
        'secondary',
        'secondary_contrast',
        'tertiary',
        'tertiary_contrast',
        'info',
        'info_contrast',
        'error',
        'error_contrast',
        'success',
        'success_contrast'
      ]
    }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = { children: 'Button Text', theme: 'primary' }
