import React from 'react';
import { Button, Divider, Select, SelectSection, SelectItem } from "@nextui-org/react";
import { AddExpense } from './AddExpense';
import { useTheme } from 'next-themes';
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
export function MonthExpenses() {

    const expenses = [
        { name: "Alquiler piso", ammount: 350, currency: "€", type: "expense", group: "Hogar" },
        { name: "Ropa", ammount: 75, currency: "€", type: "expense", group: "Necesidad" },
        { name: "Sopar + Cine", ammount: 15, currency: "€", type: "expense", group: "Ocio" },
        { name: "Nomina", ammount: 1650, currency: "€", type: "income", group: "Hogar" },
        { name: "Regalo padre", ammount: 350, currency: "€", type: "expense", group: "Hogar" },
        { name: "Tasa UPV", ammount: 180, currency: "€", type: "expense", group: "Formacion" },
    ];
    const { isOpen, onOpen, onOpenChange } = useDisclosure();


    const onClose = () => {
        console.log("modal is closed");
    }

    return (
        <>
            <Divider></Divider>
            <span justify="end" className="text-3xl text-default-500 mr-7">Month: January</span>
            <span justify="end" className="text-3xl text-default-500 ml-8">Year:2024</span>
            <Button onPress={onOpen} justify="start">Add Expense</Button>
            <Divider></Divider>
            <Modal isDismissable={false} isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent className="p-3">
                    <AddExpense ></AddExpense>
                </ModalContent>
            </Modal>
            {expenses.map((e, index) => (
                <Card className="p-4 m-5" key={`${e.name}-${index}`}>
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <h2 className=" text-3xl uppercase font-bold mb-2">{e.name}</h2>
                    </CardHeader>
                    <CardBody className="overflow-visible py-3 px-4">
                        <span className="text-3xl">{e.ammount}{e.currency}</span>
                        <span className="text-xl"><strong>Tipo gastos: </strong>{e.group}</span>
                    </CardBody>
                </Card>)
            )}
        </>
    )
}