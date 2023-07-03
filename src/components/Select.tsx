import { default as Select, GroupBase } from 'react-select'
import { Props } from 'react-select/dist/declarations/src'

export default function CustomSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>) {
  return <Select {...props} />
}
