import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //Arrange
    //render checkoutform component
    render(<CheckoutForm />);

    //Act
    //query DOM for the header element
    const header = screen.getByText(/checkout form/i)

    //Assert
    //is header in DOM
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    //render
    render(<CheckoutForm />);

    //query for all inputs
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);

    //type into inputs
    userEvent.type(firstNameInput, "Fiona");
    userEvent.type(lastNameInput, "Ogre");
    userEvent.type(addressInput, "North Farquark Lane")
    userEvent.type(cityInput, "Towersville");
    userEvent.type(stateInput, "Alaska");
    userEvent.type(zipInput, "11111");

    //query for button
    const checkoutButton = screen.getByRole("button", {name: /checkout/i})

    //click button
    userEvent.click(checkoutButton);

    //query for text 
    const fionaText = screen.queryByText(/fiona/i);
    const ogreText = screen.queryByText(/ogre/i);
    const northText = screen.queryByText(/north farquark lane/i);
    const towerText = screen.queryByText(/towersville/i);
    const alaskaText = screen.queryByText(/alaska/i);
    const zipText = screen.queryByText(/11111/i)

    //assert
    expect(fionaText).toBeInTheDocument();
    expect(ogreText).toBeInTheDocument();
    expect(northText).toBeInTheDocument();
    expect(towerText).toBeInTheDocument();
    expect(alaskaText).toBeInTheDocument();
    expect(zipText).toBeInTheDocument();

});
