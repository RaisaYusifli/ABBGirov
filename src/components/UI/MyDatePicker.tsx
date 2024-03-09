import DatePicker from 'react-datepicker';
import { FormLabel, InputGroup, InputRightElement, chakra } from '@chakra-ui/react';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
import React from 'react';
import { FaCalendar } from 'react-icons/fa';
import { ControllerRenderProps } from 'react-hook-form';
import { IFormValues } from 'pages/Create';
import './datePicker.css'
interface IProps {
  label: string
  disabled?: boolean
  field: ControllerRenderProps<IFormValues, any>
}

const ChakraDatePicker = chakra(DatePicker, {
  baseStyle: {
    w:'100%',
    // marginTop: '32px',
    minWidth: '15rem',
    height: '2.5rem',
    padding: '0 7px',
    ':focus': {
      outline: '3px solid #0E86D4',
      borderRadius: '2px',
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.8)',
      border: 'none',
    },
    border: '1px solid #d3d3d3',
    borderRadius: '5px',
    position: 'relative',
    zIndex: 55

  },
});
const MyDatePicker = ({ label, field, disabled = false }: IProps) => {
  // const today = new Date();

  return (
    <>
      <FormLabel>{label}</FormLabel>
      <InputGroup w={'100%'}>
        <ChakraDatePicker
          className='h-full bg-red customDatePckr'
          toggleCalendarOnIconClick
          placeholderText='mm/dd/yyyy'
          selected={field.value}
          onChange={(date) => {
            field.onChange(date)
          }}
        // maxDate={today}
        />

        <InputRightElement pointerEvents="none">
          <FaCalendar color="gray.300" />
        </InputRightElement>
      </InputGroup>
    </>

  );
};
MyDatePicker.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  field: PropTypes.any
};

export default MyDatePicker


