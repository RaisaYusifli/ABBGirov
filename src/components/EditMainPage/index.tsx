import React, { useRef } from "react"
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
import { Controller, FormProvider, useForm } from 'react-hook-form';
import MyDatePicker from 'components/UI/MyDatePicker';
import { MyInput } from 'components/UI/MyInput';
import InputMask from 'react-input-mask';
import { IFormValues } from "pages/Create";
import OtherInformation from "components/OtherDetails";

const EditMain = () => {
    const ref = useRef(null);

    const methods = useForm<IFormValues>({
        defaultValues: {
            customerId: '1234567',
            customerName: 'Ismayil',
            category: '99743',
            currency: 'AZN',
            product: 'KKl',
            value: '55',
            description: 'Normal',
            // startDate: '22-11-2022',
            // endDate:'22/12/2023'
        }
    })

    return (
        <>
            {/* {productDataError && <div>Error !</div>} */}
            <FormProvider {...methods}>
                <Box padding="24px" w={'100%'} bg="white" borderRadius="12px" margin="0 auto" mt="20px">
                    <Grid templateColumns="repeat(3, 1fr)" gap="24px">
                        <GridItem colSpan={3}>
                            <Heading as="h3" size="lg">
                                Girov haqqında məlumatlar
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
                                                alwaysShowMask={true}
                                                value={field.value}
                                                onChange={(e) => field.onChange(e.target.value)}
                                            >
                                                {() => (
                                                    <InputGroup display={'flex'} flexDirection={'column'}>
                                                        <Input {...field} disabled value={field.value} ref={ref} placeholder='Daxil edin' />
                                                    </InputGroup>

                                                )}
                                            </InputMask>
                                        </>
                                    )}
                                />
                                {/* {error && <div style={{ color: 'red' }}>Belə istifadəçi yoxdur</div>} */}
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
                                            value={field.value}
                                            placeholder="Ad Soyad Ata adı"
                                            disabled
                                            label="Müştərinin adı"
                                            ref={ref}
                                        />
                                    )}
                                />
                                {/* {error && <div style={{ color: 'red' }}>Belə istifadəçi yoxdur</div>} */}

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
                                            {...field}
                                            value={field.value}
                                            placeholder="Seçin"
                                            disabled
                                            onChange={(e) => {
                                                field.onChange(e);
                                            }}
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
                                            // value={productData ? productData?.product : 'Məhsul'}
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
                                                        <Input {...field} ref={ref} disabled placeholder='Mehsul' />
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
                                    disabled
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
                                    render={({ field }) => (
                                        <Select placeholder="Seçin" {...field} disabled onChange={field.onChange} value={field.value} onBlur={field.onBlur}>
                                            <option value="AZN">AZN</option>
                                            <option value="USD">USD</option>
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
                                    render={({ field }) => <MyDatePicker disabled={true} field={field} label="Bitmə tarixi" />}
                                />
                                <FormErrorMessage color={'red'} fontSize={'14px'}>
                                    {methods.formState.errors.endDate?.message}
                                </FormErrorMessage>
                            </FormControl>
                        </GridItem>
                    </Grid>
                </Box>
                <OtherInformation mode="edit" />
            </FormProvider>
        </>
    )
}
export default EditMain