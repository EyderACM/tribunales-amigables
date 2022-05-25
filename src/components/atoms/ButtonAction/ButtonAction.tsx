import { ButtonProps, Button } from '@chakra-ui/react'
import { FC } from 'react'

const ButtonAction: FC<ButtonProps> = ({ children, ...restOfProps }) => {
  return (
    <Button
      p="1.5rem"
      fontSize={{ base: '20px', md: '2xl' }}
      bgColor="social.green"
      color="social.white"
      boxShadow="0px 5px 0px 0px rgba(98,144,94,0.75)"
      {...restOfProps}
    >
      {children}
    </Button>
  )
}

export default ButtonAction
