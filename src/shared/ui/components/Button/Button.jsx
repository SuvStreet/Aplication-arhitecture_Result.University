import { Button as MantineButton } from '@mantine/core'

export const Button = (props) => {
  return (
    // <button className={props.className} {...props}>
    //   {text}
    // </button>
    <MantineButton {...props}>
      {props.children}
    </MantineButton>
  )
}
