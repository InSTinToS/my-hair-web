import { Style } from './styles'
import { IChangeableListProps } from './types'

import { AddContent } from './AddContent'
import { Item } from './Item'

export const ChangeableList = ({
  items,
  toAddContent
}: IChangeableListProps) => (
  <Style>
    {items?.map((item, index) => (
      <Item key={index}>{item}</Item>
    ))}

    <AddContent>{toAddContent}</AddContent>
  </Style>
)
