import React from "react";
import { Button, cn, Textarea, Select, SelectItem, Checkbox, CheckboxGroup, Input, ModalHeader, ModalBody, Switch, ModalFooter } from "@nextui-org/react"


export function AddExpense() {

    const transactionGroups = [
        { label: "Hogar", value: "hogar" },
        { label: "Ocio", value: "ocio" },
        { label: "Necesidades", value: "necesidades" },
        { label: "Formacion", value: "formacion" }
    ];

    const [description, setDescription] = React.useState("");
    const [amount, setAmount] = React.useState("");
    const [date, setDate] = React.useState("");
    const [group, setGroup] = React.useState("");
    const [comment, setComment] = React.useState("");
    const [isSelected, setIsSelected] = React.useState(true);


    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleGroupChange = (value) => {
        setGroup(value.target.value);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const onCreate = () => {
        const o = {
            description,
            amount,
            date,
            group,
            comment,
            transationType: isSelected ? 'income' : 'expense'
        };
        console.log("created ", o);

    }


    return (
        <>
            <ModalHeader className="flex flex-col gap-1 text-3xl">Add transaction</ModalHeader>
            <ModalBody>

                <Switch isSelected={isSelected} onValueChange={setIsSelected}
                    classNames={{
                        base: cn(
                            "inline-flex flex-row-reverse w-full max-w-md bg-content1 hover:bg-content2 items-center",
                            "justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
                            "data-[selected=true]:border-primary",
                        ),
                        wrapper: "p-0 h-4 overflow-visible",
                        thumb: cn("w-6 h-6 border-2 shadow-lg",
                            "group-data-[hover=true]:border-primary",
                            //selected
                            "group-data-[selected=true]:ml-6",
                            // pressed
                            "group-data-[pressed=true]:w-7",
                            "group-data-[selected]:group-data-[pressed]:ml-4",
                        ),
                    }}
                >
                    <div className="flex flex-col gap-1">
                        <p className="text-medium">Mark as an income</p>
                        <p className="text-tiny text-default-400">
                            By probability, a transaction is considered expense
                        </p>
                    </div>
                </Switch>

                <Input value={description} onChange={handleDescriptionChange} isRequired type="text" label="Description" labelPlacement="outside" ></Input>
                <Input value={amount} onChange={handleAmountChange} className="mb-4" isRequired type="number" label="Amount" labelPlacement="outside" step="0.1"></Input>
                <Input value={date} onChange={handleDateChange} className="mb-4" isRequired type="date" placeholder=""></Input>
                <Select value={group} isRequired onChange={handleGroupChange} label="Select a group" className="max-w mb-4">
                    {transactionGroups.map((t) => (
                        <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
                    ))}
                </Select>

                <Textarea value={comment} onChange={handleCommentChange} label="Comments" placeholder="Add a comment" className="max-w" />

            </ModalBody>


            <ModalFooter className="self-center py-5">
                <Button color="primary" className="text-xl p-7" onPress={onCreate}>
                    Add Expense
                </Button>
            </ModalFooter>
        </>)
}