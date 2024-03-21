import React from "react";
import { Button, Textarea, Checkbox, CheckboxGroup, Input, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react"


export function AddExpense() {

    const onClose = () => { console.log("closed") }
    const onCreate = () => { console.log("created") }
    const [selected, setSelected] = React.useState(["expense"]);


    return (
        <>
            <ModalHeader className="flex flex-col gap-1 text-3xl">Add transaction</ModalHeader>

            <ModalBody>
                <CheckboxGroup
                    className="mb-5 mt-5"
                    label="Transaction Type"
                    color="primary"
                    orientation="horizontal"
                    value={selected}
                    onValueChange={setSelected}
                >
                    <Checkbox value="expense">Expense</Checkbox>
                    <Checkbox value="income">Income</Checkbox>
                </CheckboxGroup>

                <Input isRequired type="text" label="Description" labelPlacement="outside" ></Input>
                <Input className="mb-4" isRequired type="number" label="Amount" labelPlacement="outside" step="0.1"></Input>
                <Input className="mb-4" isRequired type="date" placeholder=""></Input>
                <Textarea label="Comments" placeholder="Add a comment" className="max-w" />

            </ModalBody>


            <ModalFooter className="self-center py-5">
                <Button color="primary" className="text-xl p-7" onPress={onCreate}>
                    Add Expense
                </Button>
            </ModalFooter>
        </>)
}