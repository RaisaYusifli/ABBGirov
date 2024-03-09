import { Icon } from '@chakra-ui/react';
import React from 'react';
interface IProps {
    width: string;
    height: string;
}
const ModaLSuccess: React.FC<IProps> = ({ width, height }) => {
    return (
        <Icon width={`${width}px`} height={`${height}px`} viewBox={`0 0 ${width} ${height}`} fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M31.9999 3.33331C16.1678 3.33331 3.33325 16.1678 3.33325 32C3.33325 47.8321 16.1678 60.6666 31.9999 60.6666C47.8321 60.6666 60.6666 47.8321 60.6666 32C60.6666 16.1678 47.8321 3.33331 31.9999 3.33331Z" fill="#00B100" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M49.4144 19.9191C50.1954 20.7002 50.1954 21.9665 49.4144 22.7476L28.081 44.0809C27.3 44.8619 26.0337 44.8619 25.2526 44.0809L15.9193 34.7476C15.1382 33.9665 15.1382 32.7002 15.9193 31.9191C16.7003 31.1381 17.9667 31.1381 18.7477 31.9191L26.6668 39.8382L46.586 19.9191C47.367 19.1381 48.6333 19.1381 49.4144 19.9191Z" fill="white" />

        </Icon>
    );
};
export default ModaLSuccess;