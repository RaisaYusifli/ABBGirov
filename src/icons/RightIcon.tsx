import { Icon } from '@chakra-ui/react';
import React from 'react';
interface IProps {
    width: string;
    height: string;
}
const RightIcon: React.FC<IProps> = ({ width, height }) => {
    return (
        <Icon width={`${width}px`} height={`${height}px`} viewBox={`0 0 ${width} ${height}`} fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.74408 4.4107C8.06951 4.08527 8.59715 4.08527 8.92259 4.4107L13.9226 9.4107C14.248 9.73614 14.248 10.2638 13.9226 10.5892L8.92259 15.5892C8.59715 15.9147 8.06951 15.9147 7.74408 15.5892C7.41864 15.2638 7.41864 14.7361 7.74408 14.4107L12.1548 9.99996L7.74408 5.58921C7.41864 5.26378 7.41864 4.73614 7.74408 4.4107Z" fill="black" fill-opacity="0.64" />
        </Icon>
    );
};
export default RightIcon;