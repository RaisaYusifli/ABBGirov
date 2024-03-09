import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Grid,
  GridItem,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Controller, useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IEditFormValues } from "pages/Edit";


export default function EditSelection() {

  const navigate = useNavigate()
  const methods = useFormContext<IEditFormValues>();
  const { control, formState: { errors } } = methods;
  const customerId = methods.watch('customerId');

  const onSubmit = methods.handleSubmit((data) => {
    if (customerId.toString().length !== 7) return

    navigate(`/abb-mf-pledge/pledgelist/${data.customerId}`)
  });

  return (
    <>
      <Box display="flex"flexDirection="column" w={'100%'}>
        <Text display="flex"
          p="32px 0px"
          alignItems="flex-start"
          gap="10px"
          alignSelf="stretch"
          color="var(--semantic-onBackground-primary, #0d0d19)"
          fontFamily="Inter"
          fontSize="32px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="40px"
        >Girov seçimi</Text>
        <FormControl
          isInvalid={!!methods.formState.errors.customerId}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          gap="16px"
          alignSelf="stretch"
          borderRadius="12px"
          padding="24px"
          w={'100%'}
          bg={'white'}
        >
          <Text
            color="var(--semantic-onSurface-primary, #0d0d19)"
            fontFamily="Inter"
            fontSize="18px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="28px">
            Müştərinin CİF-ini daxil edərək girovlarının siyahısına baxaq üçün
            axtarış edin
          </Text>
          <FormLabel
            color="var(--semantic-onSurface-primary, #0d0d19)"
            fontFamily="Inter"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="24px">
            Müştəri nömrəsi
          </FormLabel>
          <Controller
            name='customerId'
            control={control}
            rules={{
              required: "This field is required",
              pattern: /^\d+$/,
              minLength: { value: 7, message: "Customer number must be 7 digits long" },
              maxLength: { value: 7, message: "Customer number must be 7 digits long" },
            }}
            render={({ field }) => (
              <Input
              value={field.value}
              onChange={(e)=>field.onChange(e)}
              onBlur={field.onBlur}
              type="number"
              placeholder="Daxil edin"
              width="351px !important"
              {...field}
              />
            )}
          />
          <FormErrorMessage>
            {errors.customerId?.message}
          </FormErrorMessage>
        </FormControl>
      </Box>

      <Box w={"100%"} mt="20px" mb="20px" className="bottomBar" bg={'white'} borderRadius="12px" >
        <Grid templateColumns="2fr 2fr" alignItems={'center'} display="flex" padding={'1rem 2rem'} justifyContent="space-between" >
          <GridItem>
            <Button padding={'.5rem 1rem'} color={"#fff"} bg={"red"} onClick={()=>navigate('/abb-mf-pledge')}>Ləvğ et</Button>
          </GridItem>
          <GridItem display="flex" gap="16px" alignItems="center" justifyContent="end" >
            <Button padding={'.5rem 1rem'} color={"#fff"} bg={"blue"} type='submit' onClick={onSubmit}>Axtar</Button>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}