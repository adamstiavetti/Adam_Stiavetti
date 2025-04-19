import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const Error = () => {

    const navigate = useNavigate();

    return (
        <div style={{
            height: '100vh',
            backgroundColor: '#1a1a1a',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: "center",
            alignItems: 'center',
            textAlign: 'center',
            padding: '20px'
        }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem'}}>404 - Page not Found</h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '500px' }}>
                Oops! The page youre looking for doesnt exist
            </p>
            <Button
            variant="contained"
            color="secondary"
            sx={{ marginTop: '2rem' }}
            onClick={() => navigate('/')}
            >
                Back to Home
            </Button>
        </div>
    );
};

export default Error;