import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  InputGroup,
  Select
} from '@chakra-ui/react';
import { useAppContext } from 'context';
import { Footer } from 'Layout/Footer';
import { IFormValues } from 'pages/Create';
import React, { useRef } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';
import MyDatePicker from 'components/UI/MyDatePicker';
import { MyInput } from 'components/UI/MyInput';
import { httpClient } from 'httpClient';
import InputMask from 'react-input-mask';

// interface IFormValues {
//   customerId: number;
//   customerName: string;
//   product: string;
//   value: number;
//   description: string;
//   currency: string;
//   startDate: string;
//   category: string;
//   endDate: string;
// }

export interface IProps {
  mode?: 'edit' | 'create'
}

interface IProductData {
  product: string;
}

export interface ICustomerData {
  fullname: string;
  CIF: number
}


const CreateMain: React.FC<IProps> = () => {
  const { colletralCode } = useParams();
  const methods = useFormContext<IFormValues>();

  const navigate = useNavigate();

  const category = methods.watch('category');
  const customerId = methods.watch('customerId');

  const apiUrl = `/customers/flex-customer-reader/v3/individual-customer-controller/getIndividualCustomerByCifUsingGET_1/${customerId}`;
  const fetchProductData = async (url: string): Promise<IProductData> => {
    const response: IProductData = await httpClient.get(url);
    return response; // Return the entire Axios response object
  };


  const fetchCustomerData = async (url: string): Promise<ICustomerData> => {
    if (customerId.toString().length !== 7) return
    const response: ICustomerData = await httpClient.get(url);
    return response
  };

  const { data, error, isLoading: isCustomerIdLoading } = useSWR(customerId ? apiUrl : null, fetchCustomerData, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });


  const {
    data: productData,
    error: productDataError,
    isLoading: isCategoryLoading
  } = useSWR(
    category ? `http://localhost:8082/products/product-code/${category}` : null,
    fetchProductData,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    }
  );

  const [{ setIsCreateButtonExist }] = useAppContext();

  const onSubmitHandler = methods.handleSubmit((data) => {
    setIsCreateButtonExist(true);
    navigate(`${data?.category}`);
  });
  const ref = useRef(null);

  return (
    <>
      {productDataError && <div>Error !</div>}

      <Box padding="24px" w={'100%'} bg="white" borderRadius="12px" margin="0 auto" mt="20px">
        <Grid templateColumns="repeat(3, 1fr)" gap="24px">
          <GridItem colSpan={3}>
            <Heading as="h3" size="lg">
              Girovun yaradılması
            </Heading>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isInvalid={!!methods.formState.errors.customerId}>
              <Controller
                control={methods.control}
                rules={{
                  required: 'This field is required',
                  pattern: /^\d{7}$/,
                  minLength: { value: 7, message: 'Customer number must be 7 digits long' },
                  maxLength: { value: 7, message: 'Customer number must be 7 digits long' }
                }}
                name="customerId"
                render={({ field }) => (

                  <>
                    <FormLabel>Müştəri nömrəsi</FormLabel>
                    <InputMask
                      mask="9999999999"
                      maskChar=""
                      alwaysShowMask
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                    >
                      {() => (

                        <InputGroup display={'flex'} flexDirection={'column'}>
                          <Input {...field} ref={ref} placeholder='Daxil edin' />
                        </InputGroup>

                      )}
                    </InputMask>
                  </>
                )}
              />
              {error && <div style={{ color: 'red' }}>Belə istifadəçi yoxdur</div>}
              <FormErrorMessage color={'red'} fontSize={'14px'}>
                {methods.formState.errors.customerId?.message}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isInvalid={!!methods.formState.errors.customerId}>
              <Controller
                control={methods.control}
                name="customerName"
                render={({ field }) => (
                  <MyInput
                    {...field}
                    value={data ? data?.fullname : 'Müştəri'}
                    placeholder="Ad Soyad Ata adı"
                    isLoading={isCustomerIdLoading}
                    disabled
                    label="Müştərinin adı"
                    ref={ref}
                  />
                )}
              />
              {error && <div style={{ color: 'red' }}>Belə istifadəçi yoxdur</div>}

              <FormErrorMessage color={'red'} fontSize={'14px'}>
                {methods.formState.errors.customerId?.message}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormLabel>Girovun kateqoriyası</FormLabel>
            <FormControl isInvalid={!!methods.formState.errors.category}>
              <Controller
                control={methods.control}
                rules={{
                  required: 'This field is required'
                }}
                name="category"
                render={({ field }) => (
                  <Select
                    placeholder="Seçin"
                    onChange={(e) => {
                      field.onChange(e);
                    }}
                    {...field}
                  >
                    <option value={'99743'}>99743</option>
                    <option value={'99745'}>99745</option>
                  </Select>
                )}
              />
              <FormErrorMessage color={'red'} fontSize={'14px'}>
                {methods.formState.errors.category?.message}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isInvalid={!!methods.formState.errors.category}>
              <Controller
                control={methods.control}
                name="product"
                render={({ field }) => (
                  <MyInput
                    {...field}
                    disabled={true}
                    isLoading={isCategoryLoading}
                    value={productData ? productData?.product : 'Məhsul'}
                    label="Məhsul"
                    ref={ref}
                  />
                )}
              />
              <FormErrorMessage color={'red'} fontSize={'14px'}>
                {methods.formState.errors.category?.message}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isInvalid={!!methods.formState.errors.value}>
              <Controller
                control={methods.control}
                rules={{
                  required: 'This field is required',
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'Please enter a valid number'
                  }
                }}
                name="value"
                render={({ field }) => (
                  <>
                    <FormLabel>Mehsulun Deyeri</FormLabel>
                    <InputMask
                      mask="9999999999"
                      maskChar=""
                      alwaysShowMask={true}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                    >
                      {() => (


                        <InputGroup display={'flex'} flexDirection={'column'}>
                          <Input {...field} ref={ref} placeholder='Mehsul' />
                        </InputGroup>

                      )}
                    </InputMask>
                  </>
                )}

              />
              <FormErrorMessage color={'red'} fontSize={'14px'}>
                {methods.formState.errors?.value?.message}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isInvalid={!!methods.formState.errors.description}>
              <Controller
                control={methods.control}
                rules={{
                  required: 'This field is required'
                }}
                name="description"
                render={({ field }) => <MyInput placeholder="Daxil edin" {...field} label="Girovun təsviri" />}
              />
              <FormErrorMessage color={'red'} fontSize={'14px'}>
                {methods.formState.errors['description']?.message}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormLabel>Girovun valyutası</FormLabel>
            <FormControl isInvalid={!!methods.formState.errors.currency}>
              <Controller
                control={methods.control}
                rules={{
                  required: 'This field is required'
                }}
                name="currency"
                render={({ field: { onChange, onBlur, value } }) => (
                  <Select placeholder="Seçin" onChange={onChange} onBlur={onBlur} value={value}>
                    <option value="1">AZN</option>
                    <option value="2">USD</option>
                  </Select>
                )}
              />
              <FormErrorMessage color={'red'} fontSize={'14px'}>
                {methods.formState.errors['currency']?.message}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isInvalid={!!methods.formState.errors.startDate}>
              <Controller
                control={methods.control}
                rules={{
                  required: 'This field is required',
                  pattern: {
                    value: /^\d+$/,
                    message: 'Please enter a valid number'
                  }
                }}
                name="startDate"
                render={({ field }) => <MyDatePicker field={field} label="Başlama tarixi" />}
              />
              <FormErrorMessage color={'red'} fontSize={'14px'}>
                {methods.formState.errors.startDate?.message}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl isInvalid={!!methods.formState.errors.endDate}>
              <Controller
                control={methods.control}
                rules={{
                  required: 'This field is required',
                  pattern: {
                    value: /^\d+$/,
                    message: 'Please enter a valid number'
                  }
                }}
                name="endDate"
                render={({ field }) => {
                  return (
                    <MyDatePicker field={field} label="Bitmə tarixi" />
                  )
                }}
              />
              <FormErrorMessage color={'red'} fontSize={'14px'}>
                {methods.formState.errors.endDate?.message}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
        </Grid>
      </Box>
      {!colletralCode && <Footer onSubmitHandler={onSubmitHandler} isCreateMode={!!colletralCode} />}
    </>
  );
};

export default CreateMain;
