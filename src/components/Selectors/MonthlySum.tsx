import React from 'react';
import { textField } from './styles';
import { TextField } from '@material-ui/core';

interface IProps {
    // eslint-disable-next-line no-unused-vars
    onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    monthlySum: number
}

const MonthlySum:React.FC<IProps> = ({ onChangeHandler, monthlySum }:IProps) => (
    <form noValidate autoComplete="off">
        <TextField
            type="number"
            id="cypressMonthlySum"
            style={textField}
            placeholder="Enter Monthly Sum"
            variant="outlined"
            InputLabelProps={{
                shrink: true,
            }}
            InputProps={{ inputProps: { min: 1 } }}
            value={monthlySum === 0 ? 'Enter Monthly Sum' : monthlySum}
            onChange={onChangeHandler}
        />
    </form>
);

export default MonthlySum;
