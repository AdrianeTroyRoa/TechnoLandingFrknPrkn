import { Button, Flex } from '@chakra-ui/react';

export default function Download(props) {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Button
        {...props}
        /* flex={1} */
        px={4}
        fontSize={'sm'}
        rounded={'full'}
        bg={'orange.400'}
        color={'white'}
        boxShadow={
          '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
        }
        _hover={{
          bg: 'orange.500',
        }}
        _focus={{
          bg: 'orange.500',
        }}>
        Download Now
      </Button>
    </Flex>
  );
}
