import React from 'react';
import { Container } from '@material-ui/core';

import EmpStepper from './components/stepper';

export default function Page() {
    return (
        <Container maxWidth="lg">
                <EmpStepper />
        </Container>
    );
}
