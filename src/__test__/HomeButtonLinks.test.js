import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HomeButtonLinks from "../components/HomeButtonLinks";

// href attribute should match expected URL
describe("Gallery navigation component", () => {
    test("Should navigate to the next image in the 1990s array when the next button is clicked", () => {
        render(<HomeButtonLinks />);
        const mailingLink = screen.getByText("Mailing List");

        fireEvent.click(mailingLink);

        expect(mailingLink.getAttribute("href")).toBe(
            "https://union.us19.list-manage.com/subscribe?u=269e6fccce0e382e53a4d91ee&id=2153e388bc"
        );
    });

    test("Should navigate to the previous image in the 1990s array when the prev button is clicked", () => {
        render(<HomeButtonLinks />);
        const unionLink = screen.getByText("Union Website");

        fireEvent.click(unionLink);

        expect(unionLink.getAttribute("href")).toBe(
            "https://www.imperialcollegeunion.org/activities/a-to-z/gliding"
        );
    });

    test("Should navigate to the next image in the 1980s array when the next button is clicked", () => {
        render(<HomeButtonLinks />);
        const mailingLink = screen.getByText("Mailing List");

        fireEvent.click(mailingLink);

        expect(mailingLink.getAttribute("href")).toBe(
            "https://union.us19.list-manage.com/subscribe?u=269e6fccce0e382e53a4d91ee&id=2153e388bc"
        );
    });

    test("Should navigate to the previous image in the 1980s array when the prev button is clicked", () => {
        render(<HomeButtonLinks />);
        const unionLink = screen.getByText("Union Website");

        fireEvent.click(unionLink);

        expect(unionLink.getAttribute("href")).toBe(
            "https://www.imperialcollegeunion.org/activities/a-to-z/gliding"
        );
    });

    test("Should navigate to the next image in the 1970s array when the next button is clicked", () => {
        render(<HomeButtonLinks />);
        const mailingLink = screen.getByText("Mailing List");

        fireEvent.click(mailingLink);

        expect(mailingLink.getAttribute("href")).toBe(
            "https://union.us19.list-manage.com/subscribe?u=269e6fccce0e382e53a4d91ee&id=2153e388bc"
        );
    });

    test("Should navigate to the previous image in the 1970s array when the prev button is clicked", () => {
        render(<HomeButtonLinks />);
        const unionLink = screen.getByText("Union Website");

        fireEvent.click(unionLink);

        expect(unionLink.getAttribute("href")).toBe(
            "https://www.imperialcollegeunion.org/activities/a-to-z/gliding"
        );
    });
});
