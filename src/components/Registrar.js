import React from 'react'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const Registrar = () => {
    return (
        <>
        <div className='form'>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '100%' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="filled-basic" label="Filled" variant="outlined" />
                <TextField id="standard-basic" label="Standard" variant="outlined" />
            </Box>
        </div>
        </>
    )
}

export default Registrar
