import React, { useState } from 'react';
import Switch from '@mui/material/Switch';

interface SwitchComponentProps {
    checked: boolean;
    handleUpdateChecked: any;
}

const SwitchComponent = ({
    checked,
    handleUpdateChecked,
}: SwitchComponentProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleUpdateChecked(event.target.checked);
    };

    return <Switch checked={checked} onChange={handleChange} size="medium" />;
};

export default SwitchComponent;
