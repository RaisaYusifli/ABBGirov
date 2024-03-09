import { Box, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Heading, Select } from '@chakra-ui/react';
import { IProps } from 'components/createMainPage';
import DepositInfo from 'components/DepositInfo';
import { MyInput } from 'components/UI/MyInput';
// import DepositInfo from 'components/DepositInfo';
import { Footer } from 'Layout/Footer';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useParams } from 'react-router-dom';

interface IFormValues {
  propertyType: string;
  owner: string;
  propertyDetail: string;
  buildingCompany: string;
  city: string;
  district: string;
  municipality: string;
  'town/village': string;
  'construction-project': string;
  'land-designation': string;
}
import useSWR from 'swr';
  
const fetchPledgesData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const OtherInformation: React.FC<IProps> = () => {
  const methods = useFormContext<IFormValues>();
  const { colletralCode } = useParams();
  const { data: pledgeData } = useSWR(`http://localhost:8082/pledges/${colletralCode}`, fetchPledgesData);

  const onSubmitHandler = methods.handleSubmit((data) => {
    console.log({ data });
  });

  return (
    <>
      {pledgeData?.data[0].deposit.length ? <DepositInfo /> : ''}
      <Box padding="24px" w={'100%'} bg="white" borderRadius="12px" margin="0 auto">
        <Grid templateColumns="repeat(3, 1fr)" gap="24px">
          <GridItem colSpan={3}>
            <Heading as="h3" size="lg">
              Digər məlumatlar
            </Heading>
          </GridItem>

          {pledgeData?.data[0].questions.map((question, index) => {
            return question.type === 'select' ? (
              <GridItem key={index} colSpan={1}>
                <FormControl isInvalid={!!methods.formState.errors[question.key]}>
                  <Controller
                    control={methods.control}
                    rules={{
                      required: 'This field is required'
                    }}
                    name={question.key}
                    render={({ field }) => (
                      <>
                        <FormLabel>{question.value}</FormLabel>
                        <Select placeholder="Seçin" {...field}>
                          {question.items.map(({ key, value }) => (
                            <option key={key}>{value}</option>
                          ))}
                        </Select>
                      </>
                    )}
                  />
                  <FormErrorMessage color={'red'} fontSize={'14px'}>
                    {methods.formState.errors[question.key]?.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
            ) : (
              <GridItem key={index} colSpan={1}>
                <FormControl isInvalid={!!methods.formState.errors[question.key]}>
                  <Controller
                    control={methods.control}
                    rules={{
                      required: 'This field is required'
                    }}
                    name={question.key}
                    render={({ field }) => <MyInput {...field} placeholder="Daxil edin" label={question.value} />}
                  />
                  <FormErrorMessage color={'red'} fontSize={'14px'}>
                    {methods.formState.errors[question.key]?.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
      <Footer onSubmitHandler={onSubmitHandler} isCreateMode={!!colletralCode} />
    </>
  );
};

export default OtherInformation;
