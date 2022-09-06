import { Field } from '.'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'
import { AiFillLock } from 'react-icons/ai'

export default {
  component: Field,
  title: 'Molecules/Field'
} as ComponentMeta<typeof Field>

const Template: ComponentStory<typeof Field> = args => <Field {...args} />

export const Primary = Template.bind({})

Primary.args = {
  name: 'password',
  label: { text: 'Senha', icon: <AiFillLock /> }
}
