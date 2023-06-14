import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText, Form, FormGroup, Label, Input, FormText, Button,
} from 'reactstrap';

export default function UploadForm(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className={'w-3/4 mx-auto my-0 sm:w-3/4 lg:w-1/3'}>
            <Form>
                <FormGroup>
                    <Label for="eventName">
                        Event Name:
                    </Label>
                    <Input
                        className={"text-style placeholder: text-amber-300"}
                        id="eventName"
                        name="eventName"
                        placeholder="Enter Event Name"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="eventdate">
                        Date
                    </Label>
                    <Input
                        id="eventDate"
                        name="eventDate"
                        placeholder="Enter Date"
                        type="date"
                    />
                </FormGroup>
                {/*<FormGroup>*/}
                {/*    <Label for="exampleSelect">*/}
                {/*        Select*/}
                {/*    </Label>*/}
                {/*    <Input*/}
                {/*        id="exampleSelect"*/}
                {/*        name="select"*/}
                {/*        type="select"*/}
                {/*    >*/}
                {/*        <option>*/}
                {/*            1*/}
                {/*        </option>*/}
                {/*        <option>*/}
                {/*            2*/}
                {/*        </option>*/}
                {/*        <option>*/}
                {/*            3*/}
                {/*        </option>*/}
                {/*        <option>*/}
                {/*            4*/}
                {/*        </option>*/}
                {/*        <option>*/}
                {/*            5*/}
                {/*        </option>*/}
                {/*    </Input>*/}
                {/*</FormGroup>*/}
                {/*<FormGroup>*/}
                {/*    <Label for="exampleSelectMulti">*/}
                {/*        Select Multiple*/}
                {/*    </Label>*/}
                {/*    <Input*/}
                {/*        id="exampleSelectMulti"*/}
                {/*        multiple*/}
                {/*        name="selectMulti"*/}
                {/*        type="select"*/}
                {/*    >*/}
                {/*        <option>*/}
                {/*            1*/}
                {/*        </option>*/}
                {/*        <option>*/}
                {/*            2*/}
                {/*        </option>*/}
                {/*        <option>*/}
                {/*            3*/}
                {/*        </option>*/}
                {/*        <option>*/}
                {/*            4*/}
                {/*        </option>*/}
                {/*        <option>*/}
                {/*            5*/}
                {/*        </option>*/}
                {/*    </Input>*/}
                {/*</FormGroup>*/}
                <FormGroup>
                    <Label for="eventDescription">
                        Description
                    </Label>
                    <Input
                        id="eventDescription"
                        name="eventDescription"
                        placeholder="Describe an Event"
                        type="textarea"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="eventPicture">
                        Picture
                    </Label>
                    <Input
                        id="eventPicture"
                        name="eventPicture"
                        type="file"
                        accept={".png, .jpg, .jpeg"}
                    />
                    <FormText>
                        Supported formats are PNG, JPG, and JPEG
                    </FormText>
                </FormGroup>
                {/*<FormGroup tag="fieldset">*/}
                {/*    <legend>*/}
                {/*        Radio Buttons*/}
                {/*    </legend>*/}
                {/*<FormGroup check>*/}
                {/*    <Input*/}
                {/*        name="radio1"*/}
                {/*        type="radio"*/}
                {/*    />*/}
                {/*    {' '}*/}
                {/*    <Label check>*/}
                {/*        Option one is this and that—be sure to include why it‘s great*/}
                {/*    </Label>*/}
                {/*</FormGroup>*/}
                {/*<FormGroup check>*/}
                {/*    <Input*/}
                {/*        name="radio1"*/}
                {/*        type="radio"*/}
                {/*    />*/}
                {/*    {' '}*/}
                {/*    <Label check>*/}
                {/*        Option two can be something else and selecting it will deselect option one*/}
                {/*    </Label>*/}
                {/*</FormGroup>*/}
                {/*<FormGroup*/}
                {/*    check*/}
                {/*    disabled*/}
                {/*>*/}
                {/*    <Input*/}
                {/*        disabled*/}
                {/*        name="radio1"*/}
                {/*        type="radio"*/}
                {/*    />*/}
                {/*    {' '}*/}
                {/*    <Label check>*/}
                {/*        Option three is disabled*/}
                {/*    </Label>*/}
                {/*</FormGroup>*/}
                {/*</FormGroup>*/}
                <FormGroup check className={"pb-3"}>
                    <Input id="checkTerms" type="checkbox" />
                    {' '}
                    <Label for="checkTerms" check>
                        By checking this you have to give me a head tonight
                    </Label>
                </FormGroup>
                <Button className={"bg-blue-600 border-0 hover:bg-blue-500"}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}