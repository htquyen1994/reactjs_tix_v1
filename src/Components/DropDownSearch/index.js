import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: "flex",
            flexWrap: "wrap"
        },
        formControl: {
            margin: theme.spacing(1),
            width: '100%',
          
        },
        
        selectEmpty: {
            marginTop: theme.spacing(2),
        }
    }),
);

export default function DropDownSearch(props) {
    const placeHolder = props.placeHolder;
    const selectValue = props.selectValue;
    const handleChange = props.handleChange;
    const listValue = props.data;
    const classes = useStyles();
    const renderList = (list) => {
        return list.map((item, index) => {
            return <MenuItem  key={index} value={item.value}>{item.name}</MenuItem>
        });
    }

    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">{placeHolder}</InputLabel>
            <Select
               
                autoWidth={false}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectValue}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'Without label' }}
                disableUnderline={true} 
            >
                {renderList(listValue)}
            </Select>
        </FormControl>
    )
}
