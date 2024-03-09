import { Box, Button, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { IFormValues } from 'pages/Create';
import { useNavigate } from 'react-router-dom';

interface IProps {
  isCreateMode: boolean
  mode?: string
  onSubmitHandler: (e) => object
}

export const Footer = ({ onSubmitHandler, isCreateMode, mode = 'create' }: IProps) => {

  const methods = useFormContext<IFormValues>();
  const isEdit = mode === 'edit'

  const navigate=useNavigate();

  return (
    <Box mt="20px" mb="20px" className="bottomBar" bg={'white'} borderRadius="12px" w="100%" >
      <Grid
        templateColumns="2fr 2fr"
        alignItems={'center'}
        display="flex"
        padding={'1rem 2rem'}
        justifyContent="space-between"
      >
        <GridItem>
          <Button padding={'.5rem 1rem'} color={'#fff'} bg={'red'} type="reset" onClick={() => {
            methods.reset()
            navigate('/abb-mf-pledge')
          }}>
            Ləvğ et
          </Button>
        </GridItem>
        <GridItem display="flex" gap="16px" alignItems="center" justifyContent="end">

          <Button padding={'.5rem 1rem'} color={'#fff'} bg={'blue'} type="submit" onClick={onSubmitHandler} position={'relative'} zIndex={'0'}>
            {isEdit ? 'Təsdiq et' : (isCreateMode ? 'Yarat' : 'Növbəti')}
          </Button>

        </GridItem>
      </Grid>
    </Box>
  );
};
