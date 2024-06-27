import { PeopleInStarsWar } from '@/features/stars-war-people/routes';
import { ErrorBoundary } from 'react-error-boundary';
import { Stack } from '@chakra-ui/react';

import { InternetChecked } from '@/components';

function App() {
    return (
        <ErrorBoundary fallback={<div> Something went wrong... </div>}>
            <Stack position={'relative'}>
                <PeopleInStarsWar />
            </Stack>
            <InternetChecked />
        </ErrorBoundary>
    );
}

export default App;
