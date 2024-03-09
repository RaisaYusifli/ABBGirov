import { Box } from "@chakra-ui/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Outlet } from "react-router-dom";
export interface IEditFormValues {
    customerId: string
}
const EditPage = () => {

    const methods = useForm<IEditFormValues>({
        mode: "all",
        defaultValues: {
            customerId: ''
        }
    })

    return (
        <FormProvider {...methods} >
            <Box w={'100%'}>

                <Outlet />
            </Box>
        </FormProvider>
    )
}

export default EditPage