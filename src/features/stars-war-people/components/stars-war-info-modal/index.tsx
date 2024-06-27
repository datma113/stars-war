import React, { ReactNode } from 'react';
import {
    Box,
    Button,
    Divider,
    Grid,
    GridItem,
    HStack,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import { TypeStarsWarPeople } from '@/types';
import { RowInfo } from '@/components/row-info';
import { UserCard } from '@/components/user-card';
import { stringify } from '@/utils';
import { useGetHomeworldByPeople } from '@/features/stars-war-people/api/get/useGetHomeworldByPeople.ts';
import { PeopleInfoDetail } from '@/features/stars-war-people/components/people-info-detail';
import { PlanetOfPeople } from '@/features/stars-war-people/components';

export type StarsWarInfoModalProps = {
    people: TypeStarsWarPeople;
    children: ReactNode;
    planetId: string;
};

export const StarsWarInfoModal: React.FC<StarsWarInfoModalProps> = ({
    people,
    children,
    planetId,
}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { response, loading, error } = useGetHomeworldByPeople({
        id: planetId,
        isSkip: !isOpen,
    });

    return (
        <>
            <Box onClick={onOpen}>{children}</Box>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <UserCard
                            name={people.name}
                            gender={people.gender}
                            eyeColor={people.eye_color}
                        />
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack spacing={4}>
                            <PeopleInfoDetail people={people} />
                            <Divider />
                            <Stack spacing={2}>
                                <Text fontWeight={'semibold'}>Home world:</Text>
                                <PlanetOfPeople
                                    planet={response}
                                    isLoading={loading}
                                    error={error}
                                />
                            </Stack>
                        </Stack>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
