import kebabCase from 'lodash.kebabcase'

export const getCarUrl = (props: Car) => {
  return kebabCase(`${props.make}/${props.model}/${props.year}/${props.id}`)
}
