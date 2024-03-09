import { Icon } from '@chakra-ui/react';
import React from 'react';
interface IProps {
    width: string;
    height: string;
}
const LeftIcon: React.FC<IProps> = ({ width, height }) => {
    return (
        <Icon width={`${width}px`} height={`${height}px`} viewBox={`0 0 ${width} ${height}`} fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2558 4.4107C12.5813 4.73614 12.5813 5.26378 12.2558 5.58921L7.8451 9.99996L12.2558 14.4107C12.5813 14.7361 12.5813 15.2638 12.2558 15.5892C11.9304 15.9147 11.4028 15.9147 11.0773 15.5892L6.07733 10.5892C5.75189 10.2638 5.75189 9.73614 6.07733 9.4107L11.0773 4.4107C11.4028 4.08527 11.9304 4.08527 12.2558 4.4107Z" fill="black" fill-opacity="0.36" />
        </Icon>
    );
};
export default LeftIcon;