import { Box, Grid, GridItem, Heading, Text, Divider, Button, Spinner, RadioGroup, Stack, FormControl, FormErrorMessage, Flex, Radio } from "@chakra-ui/react";
// import chevronLeft from "../../assets/chevronsImg/chevronLeft.svg"
// import chevronRight from "../../assets/chevronsImg/chevronRight.svg"

import React from "react";
// import PledgeItem from "components/PledgeItem";
import { useNavigate, useParams } from "react-router-dom";
import { ICustomerData } from "components/createMainPage";
import { httpClient } from "httpClient";
import useSWR from "swr";
import { Controller, FormProvider, useForm } from "react-hook-form";

interface IPledgeList {
    CIF: number
    pledgeList: {
        code: string
        desc: string
        date: string
    }[]
}
interface IPledgeItem {
    pledgeItemNumber: string
}
export default function PladgeEditList() {
    const { cif } = useParams();
    const apiUrl = `/customers/flex-customer-reader/v3/individual-customer-controller/getIndividualCustomerByCifUsingGET_1/${cif}`;
    const apiUrlPledgeList = `/pledges/edit/${cif}`;
    const navigate = useNavigate()

    const methods = useForm<IPledgeItem>();

    const fetchCustomerData = async (url: string): Promise<ICustomerData> => {
        const response: ICustomerData = await httpClient.get(url);
        return response
    };
    const fetchPLedgesEditing = async (url: string): Promise<IPledgeList> => {
        const response: IPledgeList = await httpClient.get(url);
        return response
    };

    const {
        data: user,
        error: userDataError,
        isLoading: isUserLoading
    } = useSWR(
        cif ? apiUrl : null,
        fetchCustomerData,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    );

    const {
        data,
        // error: pledgeError,
        // isLoading: isPledgesLoading
    } = useSWR(
        cif ? apiUrlPledgeList : null,
        fetchPLedgesEditing,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    );
    const onSubmitHandler = methods.handleSubmit((data) => {
        navigate(`/abb-mf-pledge/edit/99745`);
    });

   
    return (
        <FormProvider {...methods}>
            <Box backgroundColor="GhostWhite" pl="44px" pr="44px" pb={'20px'}>
                <Heading pb="32px" pt="32px" className="headingText"  >Girov seçimi</Heading>
                <Box backgroundColor="white" borderEndRadius="12px" className="secondContent" p="24px" borderRadius="12px" >
                    <Grid mb="24px" templateColumns="repeat(3, 1fr)" gap="24px">
                        <GridItem  >
                            <Text className="textWidthGreyColor" >Müştəri nömrəsi</Text>
                            <Text className="textWidthBlackColor" >
                                {userDataError && <Text color={'red'}>User not found</Text>}
                                {!isUserLoading ? (user?.CIF) : <Spinner />}</Text>
                        </GridItem >
                        <GridItem >
                            <Text className="textWidthGreyColor">Ad, Soy ad, Ata adı</Text>
                            <Text className="textWidthBlackColor" >
                                {userDataError && <Text color={'red'}>User not found</Text>}
                                {!isUserLoading ? (user?.fullname) : <Spinner />}
                            </Text>
                        </GridItem >
                    </Grid>
                    <Heading className="secondHeading" >Düzəliş etmək istədiyiniz girovu seçin:</Heading>
                    <Grid pt="16px" pl="60px" pr="24px" pb="15px" templateColumns="0.8fr 2fr 1fr" gap="24px" >
                        <GridItem>
                            <Text >Girov kodu</Text>
                        </GridItem>
                        <GridItem>
                            <Text pl="15px" >Təsiri</Text>
                        </GridItem>
                        <GridItem>
                            <Text>Etibarnamə tarixi</Text>
                        </GridItem>
                    </Grid>
                    <Divider />
                    <FormControl isInvalid={!!0}>
                        <Controller
                            control={methods.control}
                            rules={{
                                required: 'This field is required'
                            }}
                            name='pledgeItemNumber'
                            render={({ field }) => (
                                <RadioGroup {...field} value={field.value} onChange={field.onChange}>
                                    <Stack direction='column'>
                                        {
                                            data?.pledgeList.map((pledge, key) => {
                                                const { code, date, desc } = pledge
                                                return (
                                                    <Grid p="11px 24px 10px 24px" key={key} templateColumns="1fr 2fr 1fr" gap="8px" cursor={'pointer'} onClick={() => field.onChange(code)} >
                                                        <GridItem className="contributionCode" >
                                                            <Flex>
                                                                <Radio me={"10px"} value={code} isChecked={field.value === code}></Radio>
                                                                <Text>{code}</Text>
                                                            </Flex>
                                                        </GridItem>
                                                        <GridItem>
                                                            <Text>{desc}</Text>
                                                        </GridItem>
                                                        <GridItem>
                                                            <Text>{date}</Text>
                                                        </GridItem>
                                                    </Grid>
                                                    // <PledgeItem {...pledge} key={key}/>
                                                )
                                            })
                                        }
                                    </Stack>
                                </RadioGroup>
                            )}
                        />

                        <FormErrorMessage>
                            {methods.formState.errors.pledgeItemNumber?.message}
                        </FormErrorMessage>
                    </FormControl>

                    <Divider />
               
                </Box>
                <Box mt="20px" mb="20px" className="bottomBar"  >
                    <Grid templateColumns="2fr 2fr" display="flex" justifyContent="space-between" >
                        <GridItem>
                            <Button mt={"12px"} color={"#fff"} bg={"red"} onClick={()=>navigate('/abb-mf-pledge')}>Ləvğ et</Button>
                        </GridItem>
                        <GridItem display="flex" gap="16px" alignItems="center" justifyContent="end" >
                            <Button mt={"12px"} border={"1px solid gray"} borderRadius={"5px"} onClick={() => navigate("/abb-mf-pledge/pledgelist")}>Başqa müştəri axtar </Button>
                            <Button mt={"12px"} color={"#fff"} bg={"blue"} isDisabled={!methods.watch('pledgeItemNumber')} type="submit" onClick={onSubmitHandler}>Davam et</Button>
                            {/* /?pledge=234343545245 */}
                        </GridItem>
                    </Grid>
                </Box>
            </Box>
        </FormProvider>
    )
}